"use client";

import { useState, useEffect } from "react";
import { BootSequence } from "./BootSequence";
import { TopBar } from "./TopBar";
import { NavRail } from "./NavRail";
import { CommandPalette } from "./CommandPalette";
import { TerminalDrawer } from "./TerminalDrawer";

export function RootShell({ children }: { children: React.ReactNode }) {
  const [booting, setBooting] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if we've already booted in this session
    const hasBooted = sessionStorage.getItem("amit_os_booted");
    if (hasBooted) {
      setBooting(false);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem("amit_os_booted", "true");
    setBooting(false);
  };

  return (
    <div className="flex h-full w-full flex-col bg-base text-text-primary overflow-hidden overflow-x-hidden font-sans relative">
      {booting ? (
        <BootSequence onComplete={handleBootComplete} />
      ) : (
        <>
          <TopBar onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          <div className="flex flex-1 overflow-hidden overflow-x-hidden relative">
            <NavRail 
              isMobileMenuOpen={isMobileMenuOpen} 
              onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
              onToggleTerminal={() => {
                setIsTerminalOpen(!isTerminalOpen);
                setIsMobileMenuOpen(false);
              }} 
            />
            <main className="flex-1 overflow-y-auto overflow-x-hidden bg-surface relative z-0 border-l border-hairline lg:border-l-0 lg:rounded-tl-2xl lg:m-2 lg:ml-0 shadow-2xl">
              {children}
            </main>
            <TerminalDrawer isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
          </div>
          <CommandPalette />
        </>
      )}
    </div>
  );
}

