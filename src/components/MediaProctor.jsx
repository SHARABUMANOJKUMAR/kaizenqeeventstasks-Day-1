import React, { useEffect, useRef, useState } from 'react';
import '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const MediaProctor = ({ onViolation, isActive, onCameraStatus, onCameraWarning }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState(null);

  // Object Detection state
  const modelRef = useRef(null);
  const consecutivePhonesRef = useRef(0);
  const [phoneWarning, setPhoneWarning] = useState(false);

  // Load CocoSSD model
  useEffect(() => {
    let isMounted = true;
    const loadModel = async () => {
      try {
        const loadedModel = await cocoSsd.load();
        if (isMounted) {
          modelRef.current = loadedModel;
        }
      } catch (e) {
        console.error("Failed to load coco-ssd model:", e);
      }
    };
    loadModel();
    return () => { isMounted = false; };
  }, []);

  const isActiveRef = useRef(isActive);
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  // Stream Setup and Camera Health Checks
  useEffect(() => {
    let cameraCheckTimeoutId;
    let isCameraHealthy = true;
    let consecutiveObstructed = 0;
    let consecutiveUnavailable = 0;

    const startMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        streamRef.current = stream;
        setHasPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        // --- Camera Health Check Loop (Obstruction & Availability) ---
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        const startTime = Date.now();

        const checkCameraHealth = () => {
          if (streamRef.current && videoRef.current) {
            const videoTrack = streamRef.current.getVideoTracks()[0];
            const isGracePeriod = Date.now() - startTime < 10000; // 10 seconds grace period for hardware init
            
            // 1. Check if track is muted, ended, or null
            if (!videoTrack || videoTrack.muted || videoTrack.readyState === 'ended' || videoRef.current.readyState < 2) {
              if (!isGracePeriod) {
                consecutiveUnavailable++;
                if (consecutiveUnavailable > 3) {
                  if (isCameraHealthy) {
                    if (isActiveRef.current) onViolation('CAMERA_UNAVAILABLE');
                    isCameraHealthy = false;
                    onCameraStatus?.(false);
                    onCameraWarning?.("Your camera is unavailable. Your assessment has been saved and temporarily locked. Restore camera access to continue.");
                  }
                }
              }
              // Skip obstruction check if unavailable
              cameraCheckTimeoutId = setTimeout(checkCameraHealth, 1000);
              return;
            } else {
              consecutiveUnavailable = 0;
            }

            // 2. Obstruction check (luminance & variance)
            try {
              if (videoRef.current.videoWidth > 0 && videoRef.current.videoHeight > 0) {
                ctx.drawImage(videoRef.current, 0, 0, 64, 64);
                const imageData = ctx.getImageData(0, 0, 64, 64).data;
                let sum = 0;
                let sumSq = 0;
                const pixelCount = 64 * 64;
                
                for (let i = 0; i < imageData.length; i += 4) {
                  const luma = 0.299 * imageData[i] + 0.587 * imageData[i+1] + 0.114 * imageData[i+2];
                  sum += luma;
                  sumSq += luma * luma;
                }
                
                const mean = sum / pixelCount;
                const variance = (sumSq / pixelCount) - (mean * mean);

                // Obstruction criteria: extremely dark, extremely bright, or practically zero variance
                const isDark = mean < 15;
                const isBright = mean > 240;
                const isLowContrast = variance < 50;

                if (isDark || isBright || isLowContrast) {
                  consecutiveObstructed++;
                  if (consecutiveObstructed >= 4) { // Configurable duration (4 seconds)
                    if (isCameraHealthy) {
                      if (isActiveRef.current) onViolation('CAMERA_OBSTRUCTED');
                      isCameraHealthy = false;
                      onCameraStatus?.(false);
                      onCameraWarning?.("Camera visibility is obstructed. Please uncover the camera and keep your face visible during the assessment.");
                    }
                  }
                } else {
                  consecutiveObstructed = Math.max(0, consecutiveObstructed - 1);
                  if (consecutiveObstructed === 0 && !isCameraHealthy) {
                    isCameraHealthy = true;
                    onCameraStatus?.(true);
                    onCameraWarning?.(null);
                  }
                }
              }
            } catch (e) {
              console.error("Obstruction check failed:", e);
            }
          }
          cameraCheckTimeoutId = setTimeout(checkCameraHealth, 1000);
        };

        checkCameraHealth();

      } catch (err) {
        console.error("Media devices error:", err);
        setError("Camera permission is required for this proctored exam.");
        onCameraStatus?.(false);
        if (isActiveRef.current) {
          onViolation('MEDIA_PERMISSION_DENIED');
        }
      }
    };

    startMedia();

    return () => {
      if (cameraCheckTimeoutId) {
        clearTimeout(cameraCheckTimeoutId);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [onViolation, onCameraStatus, onCameraWarning]);

  useEffect(() => {
    if (isActive && error) {
      onViolation('MEDIA_PERMISSION_DENIED');
    }
  }, [isActive, error, onViolation]);

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

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 w-48 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-xs shadow-lg z-50">
        <p><strong>Error:</strong> {error}</p>
      </div>
    );
  }

  if (!hasPermission) {
    return null;
  }

  return (
    <>
      {phoneWarning && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 border-2 border-yellow-400 text-yellow-800 px-6 py-4 rounded-xl shadow-2xl z-50 animate-pulse text-center max-w-md">
          <p className="font-bold text-lg mb-1">⚠️ Possible Device Detected</p>
          <p className="text-sm">Mobile phone detected in the camera view. Please keep external devices away during the assessment.</p>
        </div>
      )}
      <div className="fixed bottom-4 right-4 w-32 h-24 bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-primary/50 z-50 pointer-events-none opacity-80">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover transform -scale-x-100"
        />
        <div className="absolute bottom-1 left-1 bg-black/60 px-2 py-0.5 rounded text-[8px] text-white font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          RECORDING
        </div>
      </div>
    </>
  );
};

export default MediaProctor;
