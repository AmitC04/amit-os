"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  command: string;
  output: React.ReactNode;
}

export function TerminalDrawer({ isOpen, onClose }: TerminalDrawerProps) {
  const [logs, setLogs] = useState<LogEntry[]>([
    { command: "help", output: "Type a module name to navigate. Available commands: help, about, skills, projects, experience, research, credentials, resume, contact, clear" }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (!cmd) return;

    if (cmd === "clear") {
      setLogs([]);
      return;
    }

    const validRoutes = ["about", "skills", "projects", "experience", "research", "credentials", "resume", "contact"];
    let output: React.ReactNode = "";

    if (cmd === "help") {
      output = "Available commands: help, clear, " + validRoutes.join(", ");
    } else if (validRoutes.includes(cmd)) {
      output = `Navigating to /${cmd}...`;
      router.push(`/${cmd}`);
    } else {
      output = `command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setLogs(prev => [...prev, { command: cmd, output }]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-[40vh] bg-surface border-t border-hairline z-40 flex flex-col font-mono text-sm shadow-2xl"
        >
          <div className="flex justify-between items-center px-4 py-2 border-b border-hairline bg-base">
            <span className="text-text-muted font-bold text-xs uppercase">Terminal / System Shell</span>
            <button onClick={onClose} className="text-text-muted hover:text-primary transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3" onClick={() => inputRef.current?.focus()}>
            {logs.map((log, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center text-text-muted gap-2">
                  <span className="text-primary">amit_os@root:~$</span>
                  <span>{log.command}</span>
                </div>
                <div className="text-text-primary/90 pl-2 border-l border-hairline/50">
                  {log.output}
                </div>
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center text-text-muted gap-2">
              <span className="text-primary">amit_os@root:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-text-primary caret-primary"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
