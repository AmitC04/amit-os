"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TerminalSquare } from "lucide-react";

const NAV_ITEMS = [
  { name: "about", path: "/about" },
  { name: "experience", path: "/experience" },
  { name: "projects", path: "/projects" },
  { name: "research", path: "/research" },
  { name: "skills", path: "/skills" },
  { name: "credentials", path: "/credentials" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
];

export function NavRail({ onToggleTerminal }: { onToggleTerminal?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex lg:w-48 lg:flex-col justify-between border-t lg:border-t-0 lg:border-r border-hairline bg-base z-20 overflow-x-auto lg:overflow-visible text-sm font-mono order-last lg:order-none h-16 lg:h-auto shrink-0">
      <div className="flex lg:flex-col w-full px-2 lg:px-0 lg:py-4 gap-1 lg:gap-0 items-center lg:items-stretch">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path || (pathname === "/" && item.path === "/about");
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "group relative flex items-center px-4 py-2 hover:text-text-primary transition-colors",
                isActive ? "text-primary font-bold" : "text-text-muted"
              )}
            >
              <span className="hidden lg:inline-block w-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                ▸
              </span>
              <span className={cn("hidden lg:inline-block w-4", isActive && "opacity-100 text-primary")}>
                {isActive ? "▸" : ""}
              </span>
              <span>{item.name}</span>
              
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary lg:hidden" />
              )}
            </Link>
          );
        })}
      </div>
      
      <div className="hidden lg:flex flex-col border-t border-hairline p-4">
        <button 
          onClick={onToggleTerminal}
          className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors px-2 py-2 w-full text-left"
        >
          <TerminalSquare className="w-4 h-4" />
          <span>terminal</span>
        </button>
      </div>
    </nav>
  );
}

