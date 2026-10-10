import React, { useEffect, useRef, useState } from 'react';
import '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

// Explicit Lifecycle States
const CAMERA_STATES = {
  INITIALIZING: 'INITIALIZING',
  READY: 'READY',
  OBSTRUCTED: 'OBSTRUCTED',
  UNAVAILABLE: 'UNAVAILABLE',
  DENIED: 'DENIED',
};

const MediaProctor = ({ onViolation, isActive, onCameraStatus, onCameraWarning }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  
  const [cameraState, setCameraState] = useState(CAMERA_STATES.INITIALIZING);
  const [errorMsg, setErrorMsg] = useState(null);

  // Object Detection state
  const modelRef = useRef(null);
  const consecutivePhonesRef = useRef(0);
  const [phoneWarning, setPhoneWarning] = useState(false);
  const [isMinimized, setIsMinimized] = useState(window.innerWidth < 768); // Auto-minimize on mobile

  const isActiveRef = useRef(isActive);
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  // Sync internal state with parent callbacks
  useEffect(() => {
    if (cameraState === CAMERA_STATES.READY) {
      onCameraStatus?.(true);
      onCameraWarning?.(null);
    } else {
      onCameraStatus?.(false);
      onCameraWarning?.(errorMsg || "Camera is not ready.");
    }
  }, [cameraState, errorMsg, onCameraStatus, onCameraWarning]);

  // Load CocoSSD model
  useEffect(() => {
    let isMounted = true;
    const loadModel = async () => {
      try {
        const loadedModel = await cocoSsd.load();
        if (isMounted) modelRef.current = loadedModel;
      } catch (e) {
        console.error("Failed to load coco-ssd model:", e);
      }
    };
    loadModel();
    return () => { isMounted = false; };
  }, []);

  // Stream Setup and Camera Health Checks
  useEffect(() => {
    let cameraCheckTimeoutId;
    let consecutiveObstructed = 0;
    let consecutiveUnavailable = 0;
    let currentState = CAMERA_STATES.INITIALIZING;

    const setState = (newState, newErrorMsg = null) => {
      if (currentState !== newState) {
        currentState = newState;
        setCameraState(newState);
        if (newErrorMsg !== undefined) setErrorMsg(newErrorMsg);
      }
    };

    const startMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        const startTime = Date.now();

        const checkCameraHealth = () => {
          if (!streamRef.current || !videoRef.current) {
            cameraCheckTimeoutId = setTimeout(checkCameraHealth, 1000);
            return;
          }

          const videoTrack = streamRef.current.getVideoTracks()[0];
          const timeSinceStart = Date.now() - startTime;
          const isGracePeriod = timeSinceStart < 10000;
          
          // 1. Availability Check
          if (!videoTrack || videoTrack.muted || videoTrack.readyState === 'ended' || videoRef.current.readyState < 2) {
            if (isGracePeriod && currentState === CAMERA_STATES.INITIALIZING) {
              // Still initializing
            } else {
              consecutiveUnavailable++;
              if (consecutiveUnavailable >= 3) {
                setState(CAMERA_STATES.UNAVAILABLE, "Your camera is unavailable. Please check your connection and browser permissions.");
                if (isActiveRef.current) onViolation('CAMERA_UNAVAILABLE');
              }
            }
            cameraCheckTimeoutId = setTimeout(checkCameraHealth, 1000);
            return;
          } else {
            consecutiveUnavailable = 0;
          }

          // 2. Obstruction Check (only if readyState >= 2)
          try {
            if (videoRef.current.videoWidth > 0 && videoRef.current.videoHeight > 0) {
              ctx.drawImage(videoRef.current, 0, 0, 64, 64);
              const imageData = ctx.getImageData(0, 0, 64, 64).data;
              let sum = 0, sumSq = 0;
              const pixelCount = 64 * 64;
              
              for (let i = 0; i < imageData.length; i += 4) {
                const luma = 0.299 * imageData[i] + 0.587 * imageData[i+1] + 0.114 * imageData[i+2];
                sum += luma;
                sumSq += luma * luma;
              }
              
              const mean = sum / pixelCount;
              const variance = (sumSq / pixelCount) - (mean * mean);

              const isDark = mean < 15;
              const isBright = mean > 240;
              const isLowContrast = variance < 50;

              if (isDark || isBright || isLowContrast) {
                // If we are just starting up, skip obstruction check for the first 8 seconds (lens adjustment)
                if (timeSinceStart > 8000) {
                  consecutiveObstructed++;
                  if (consecutiveObstructed >= 4) {
                    setState(CAMERA_STATES.OBSTRUCTED, "Camera visibility is obstructed. Please uncover the camera and keep your face visible.");
                    if (isActiveRef.current) onViolation('CAMERA_OBSTRUCTED');
                  }
                }
              } else {
                consecutiveObstructed = Math.max(0, consecutiveObstructed - 1);
                if (consecutiveObstructed === 0) {
                  setState(CAMERA_STATES.READY, null);
                }
              }
            }
          } catch (e) {
            console.error("Obstruction check failed:", e);
          }
          
          cameraCheckTimeoutId = setTimeout(checkCameraHealth, 1000);
        };

        checkCameraHealth();

      } catch (err) {
        console.error("Media devices error:", err);
        setState(CAMERA_STATES.DENIED, "Camera permission is required for this proctored exam.");
        if (isActiveRef.current) onViolation('MEDIA_PERMISSION_DENIED');
      }
    };

    startMedia();

    return () => {
      if (cameraCheckTimeoutId) clearTimeout(cameraCheckTimeoutId);
      if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    };
  }, [onViolation]);

  // Object Detection Loop (Mobile Phone)
  useEffect(() => {
    let timeoutId;

    const detectFrame = async () => {
      if (!isActiveRef.current || !modelRef.current || !videoRef.current || videoRef.current.readyState !== 4) {
        timeoutId = setTimeout(detectFrame, 1000);
        return;
      }
      
      try {
        const predictions = await modelRef.current.detect(videoRef.current);
        const hasPhone = predictions.some(p => p.class === 'cell phone' && p.score > 0.5);
        
        if (hasPhone) {
          consecutivePhonesRef.current += 1;
          
          if (consecutivePhonesRef.current >= 3 && consecutivePhonesRef.current < 6) {
            setPhoneWarning(true);
          } else if (consecutivePhonesRef.current >= 6) {
            onViolation('SUSTAINED_POSSIBLE_PHONE_USE');
            consecutivePhonesRef.current = 0; 
            setPhoneWarning(false);
          }
        } else {
          if (consecutivePhonesRef.current > 0) {
            consecutivePhonesRef.current -= 1;
          }
          if (consecutivePhonesRef.current < 3) {
            setPhoneWarning(false);
          }
        }
      } catch (e) {
        console.error("Detection error", e);
      }
      timeoutId = setTimeout(detectFrame, 1000);
    };

    timeoutId = setTimeout(detectFrame, 1000);
    return () => clearTimeout(timeoutId);
  }, [isActive, onViolation]);

  if (cameraState === CAMERA_STATES.DENIED) {
    return (
      <div className="fixed bottom-4 right-4 w-48 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-xs shadow-lg z-50">
        <p><strong>Error:</strong> {errorMsg}</p>
      </div>
    );
  }

  // Hide video frame completely if initializing to prevent flashing
  const containerClass = cameraState === CAMERA_STATES.INITIALIZING 
    ? 'hidden' 
    : `fixed z-50 transition-all duration-300 shadow-2xl border-2 border-primary/50 overflow-hidden bg-black rounded-lg cursor-pointer ${
        isMinimized 
          ? 'bottom-20 right-4 w-16 h-24 md:bottom-4 md:right-4 md:w-24 md:h-20 opacity-60' 
          : 'bottom-20 right-4 w-24 h-32 md:bottom-4 md:right-4 md:w-48 md:h-36 opacity-90 hover:opacity-100'
      }`;

  return (
    <>
      {phoneWarning && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 border-2 border-yellow-400 text-yellow-800 px-6 py-4 rounded-xl shadow-2xl z-50 animate-pulse text-center max-w-md w-[90%] md:w-auto">
          <p className="font-bold text-lg mb-1">⚠️ Possible Device Detected</p>
          <p className="text-sm">Mobile phone detected in the camera view. Please keep external devices away during the assessment.</p>
        </div>
      )}
      <div 
        className={containerClass}
        onClick={() => setIsMinimized(!isMinimized)}
        title={isMinimized ? "Click to expand camera preview" : "Click to minimize camera preview"}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`w-full h-full object-cover transform -scale-x-100 transition-opacity ${isMinimized ? 'opacity-50' : 'opacity-100'}`}
        />
        <div className="absolute bottom-1 left-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] text-white font-mono flex items-center gap-1 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          {isMinimized ? 'REC' : 'RECORDING'}
        </div>
        {isMinimized && (
          <div className="absolute top-1 right-1 bg-black/60 rounded p-0.5 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
          </div>
        )}
      </div>
    </>
  );
};

export default MediaProctor;
