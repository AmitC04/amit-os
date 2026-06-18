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

export function NavRail({ 
  onToggleTerminal,
  isMobileMenuOpen,
  onCloseMobileMenu
}: { 
  onToggleTerminal?: () => void;
  isMobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-base/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onCloseMobileMenu}
        />
      )}
      
      <nav className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-base border-r border-hairline transform transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-48 lg:flex lg:flex-col lg:z-20 text-sm font-mono shrink-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col w-full h-full lg:py-4">
          
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-hairline lg:hidden">
            <span className="font-bold text-primary">NAVIGATION</span>
            <button onClick={onCloseMobileMenu} className="text-text-muted hover:text-text-primary p-1">
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-2 lg:py-0">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path || (pathname === "/" && item.path === "/about");
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onCloseMobileMenu}
                  className={cn(
                    "group relative flex items-center px-6 lg:px-4 py-3 lg:py-2 hover:text-text-primary transition-colors",
                    isActive ? "text-primary font-bold bg-primary/5 lg:bg-transparent" : "text-text-muted"
                  )}
                >
                  <span className="inline-block w-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    ▸
                  </span>
                  <span className={cn("inline-block w-4", isActive && "opacity-100 text-primary")}>
                    {isActive ? "▸" : ""}
                  </span>
                  <span>{item.name}</span>
                  
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary lg:hidden" />
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="flex flex-col border-t border-hairline p-4 mt-auto">
            <button 
              onClick={onToggleTerminal}
              className="flex items-center space-x-3 lg:space-x-2 text-text-muted hover:text-primary transition-colors px-2 py-2 w-full text-left"
            >
              <TerminalSquare className="w-5 h-5 lg:w-4 lg:h-4" />
              <span>terminal</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

