"use client";

import { useEffect, useState } from "react";
import { Terminal, Menu } from "lucide-react";

export function TopBar({ onToggleMobileMenu }: { onToggleMobileMenu?: () => void }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }) + " IST"); // Mocking IST or local time
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-hairline bg-base px-4 font-mono text-sm text-text-primary z-10 w-full overflow-hidden">
      <div className="flex items-center space-x-3">
        <button 
          onClick={onToggleMobileMenu}
          className="lg:hidden p-1 -ml-1 text-text-muted hover:text-primary transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2 font-bold tracking-tight">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="hidden sm:inline">AMIT_OS</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-2 text-status-deployed">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-deployed opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status-deployed"></span>
          </span>
          <span className="text-xs uppercase">Online</span>
        </div>
      </div>

      <div className="flex items-center space-x-6 text-text-muted">
        <span className="hidden sm:inline-block">{time}</span>
        <button className="flex items-center space-x-1 rounded px-2 py-1 hover:bg-surface hover:text-text-primary transition-colors border border-transparent hover:border-hairline">
          <span className="text-xs">⌘K</span>
        </button>
      </div>
    </header>
  );
}
