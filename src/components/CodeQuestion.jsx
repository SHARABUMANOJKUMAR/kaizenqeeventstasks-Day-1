import React, { useState } from 'react';
import Editor, { loader } from '@monaco-editor/react';

// Configure Monaco Editor to use UNPKG instead of jsDelivr to prevent loading issues in some regions
loader.config({ paths: { vs: 'https://unpkg.com/monaco-editor@0.44.0/min/vs' } });
import ReactMarkdown from 'react-markdown';
import { Terminal, Play, Loader2 } from 'lucide-react';

const CodeQuestion = ({ question, currentAnswer, onAnswer }) => {
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  
  const handleEditorChange = (value) => {
    onAnswer(value);
  };

  const runCode = async () => {
    const codeToRun = currentAnswer !== undefined ? currentAnswer : question.starterCode;
    if (!codeToRun || !codeToRun.trim()) return;
    
    setIsRunning(true);
    setOutput("Executing your code...\n");

    try {
      if (!window.pyodide) {
        setOutput("Initializing Python environment... (This may take a few seconds on first run)\n");
        
        if (!document.getElementById('pyodide-script')) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.id = 'pyodide-script';
            script.src = "https://unpkg.com/pyodide@0.25.0/pyodide.js";
            script.onload = resolve;
            script.onerror = () => reject(new Error("Failed to load Python execution environment. Please check your internet connection."));
            document.head.appendChild(script);
          });
        }
         
        window.pyodide = await window.loadPyodide({
          indexURL: "https://unpkg.com/pyodide@0.25.0/"
        });
      }

      let outputText = "";
      window.pyodide.setStdout({ batched: (msg) => { outputText += msg + "\n"; } });
      window.pyodide.setStderr({ batched: (msg) => { outputText += msg + "\n"; } });

      await window.pyodide.runPythonAsync(codeToRun);
      
      setOutput(outputText || "Program finished with no output.");
    } catch (error) {
      setOutput(`Error:\n${error.message || error}`);
    } finally {
      setIsRunning(false);
    }
  };

  const components = {
    code({node, inline, className, children, ...props}) {
      return inline ? (
        <code className="bg-gray-100 text-primary-700 px-1.5 py-0.5 rounded font-mono text-sm" {...props}>
          {children}
        </code>
      ) : (
        <code className={className} {...props}>{children}</code>
      )
    }
  }

  return (
    <div className="w-full flex flex-col h-full">
      <div className="mb-4 select-none" onDragStart={(e) => e.preventDefault()}>
        <h3 className="text-lg font-semibold text-text-main mb-2 flex items-center gap-2">
          <Terminal size={20} className="text-accent" /> Problem Statement
        </h3>
        <div className="text-text-muted">
          <ReactMarkdown components={components}>
            {question.question}
          </ReactMarkdown>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2 mt-2">
        <h3 className="text-sm font-semibold text-text-main flex items-center gap-2">
          Your Python Code
        </h3>
        <button
          onClick={runCode}
          disabled={isRunning}
          className="bg-[#26324A] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary transition-colors disabled:opacity-70 shadow-sm"
        >
          {isRunning ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} fill="currentColor" />}
          Run Code
        </button>
      </div>

      <div className="min-h-[300px] w-full rounded-t-xl overflow-hidden border border-gray-200 border-b-0 shadow-inner">
        <Editor
          height="300px"
          defaultLanguage="python"
          theme="vs-dark"
          value={currentAnswer !== undefined ? currentAnswer : question.starterCode}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'Fira Code', monospace",
            lineHeight: 24,
            padding: { top: 16, bottom: 16 },
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            cursorBlinking: "smooth",
          }}
        />
      </div>

      {/* Terminal Output Area */}
      <div className="bg-[#1e1e1e] border-t-2 border-[#333] rounded-b-xl p-4 min-h-[120px] max-h-[200px] overflow-y-auto">
        <div className="flex items-center gap-2 mb-2">
          <Terminal size={14} className="text-gray-400" />
          <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Output Terminal</span>
        </div>
        <pre className="text-sm font-mono text-[#d4d4d4] whitespace-pre-wrap leading-relaxed">
          {output || <span className="text-gray-500 italic">Click "Run Code" to see your program's output here...</span>}
        </pre>
      </div>
    </div>
  );
};

export default CodeQuestion;
