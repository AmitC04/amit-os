"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_LINES = [
  { text: "> boot amit_os", delay: 100 },
  { text: "loading ai_engine........... ok", delay: 400 },
  { text: "loading cloud_services...... ok", delay: 700 },
  { text: "loading research_modules.... ok", delay: 850 },
  { text: "loading project_archive..... ok", delay: 1200 },
  { text: "mounting experience_db...   ", delay: 1500, spinner: true },
  { text: "system ready_", delay: 2200 },
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    BOOT_LINES.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines(index + 1);
        if (line.spinner) {
          setShowSpinner(true);
          setTimeout(() => setShowSpinner(false), 600); // spinner runs for 600ms
        }
        
        // Complete the boot sequence shortly after the last line
        if (index === BOOT_LINES.length - 1) {
          setTimeout(onComplete, 500);
        }
      }, line.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="flex h-full w-full items-center justify-center bg-base text-text-primary p-4 font-mono text-sm md:text-base">
      <div className="w-full max-w-2xl">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <span>{line.text.replace("...", "")}</span>
            {line.spinner && showSpinner && (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="inline-block"
              >
                ⠋
              </motion.span>
            )}
            {line.spinner && !showSpinner && <span>ok</span>}
            {i === visibleLines - 1 && i === BOOT_LINES.length - 1 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-primary ml-1"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
