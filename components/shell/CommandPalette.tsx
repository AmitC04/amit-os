"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setInput("");
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      const cmd = input.trim().toLowerCase();
      const validRoutes = ["about", "skills", "projects", "experience", "research", "credentials", "resume", "contact"];
      
      if (validRoutes.includes(cmd)) {
        router.push(`/${cmd}`);
        setOpen(false);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-base/80 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl border border-hairline bg-surface shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 border-b border-hairline">
          <span className="text-text-muted mr-2">&gt;</span>
          <input 
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 h-12 bg-transparent outline-none text-text-primary font-mono text-sm placeholder:text-text-muted"
            placeholder="Type a module name (e.g. projects, about) and press Enter..."
          />
        </div>
        <div className="p-2 py-4 text-center text-text-muted text-sm">
          Press ESC to close
        </div>
      </div>
    </div>
  );
}

