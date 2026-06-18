"use client";

import { Mail, Phone, ExternalLink, MapPin, Clock } from "lucide-react";
import { track } from "@vercel/analytics";

// Inline Github Icon component
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

// Inline Linkedin Icon component
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export function ContactModule() {
  return (
    <div className="max-w-4xl space-y-12 pb-12">
      <header className="space-y-2 border-b border-hairline pb-4">
        <h1 className="text-2xl font-bold tracking-tight font-mono uppercase">Contact</h1>
        <p className="text-text-muted font-mono text-sm">Initiate secure connection.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {/* Status Block */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-text-muted font-mono uppercase tracking-wider">Current Mission</h2>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-surface border border-hairline rounded text-[10px] font-mono text-text-muted">
              <Clock className="w-3 h-3" />
              <span>Response Time &lt; 12 Hours</span>
            </div>
          </div>
          <div className="p-6 border border-hairline bg-surface/30 rounded-lg space-y-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent shadow-[0_0_8px_rgba(0,229,255,0.8)]"></span>
                </span>
                <span className="font-mono text-sm font-bold text-text-primary">Currently at C-DOT</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted ml-6">
                <span className="text-primary">•</span> Available for Full-Time Roles (2027)
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-text-muted font-mono mb-3">Interested in:</p>
              <ul className="space-y-2 text-sm text-text-primary/90 font-mono">
                <li className="flex items-center gap-2"><span className="text-accent">•</span> Software Engineering</li>
                <li className="flex items-center gap-2"><span className="text-accent">•</span> AI/ML Engineering</li>
                <li className="flex items-center gap-2"><span className="text-accent">•</span> Research &amp; Innovation</li>
              </ul>
            </div>

            <p className="text-sm font-bold text-primary italic border-t border-hairline pt-4 mt-4 leading-relaxed">
              "Building systems that bridge research, software engineering, and real-world impact."
            </p>
          </div>
        </section>

        {/* Network Links */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-text-muted font-mono uppercase tracking-wider">Network Links</h2>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-surface border border-hairline rounded text-[10px] font-mono text-text-muted">
              <MapPin className="w-3 h-3" />
              <span>Chennai, India</span>
            </div>
          </div>
          <p className="text-sm text-text-primary/80 leading-relaxed font-mono">
            Open to Full-Time Opportunities in Software Engineering, AI Systems, Backend Development, and Applied Research.
          </p>
          
          <div className="space-y-3">
            <a href="mailto:amitchauhan.220404@gmail.com" className="flex items-center gap-3 p-3 border border-hairline rounded hover:border-primary hover:bg-surface/50 transition-all group">
              <div className="p-2 bg-surface rounded text-text-muted group-hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">Email</p>
                <p className="text-xs font-mono text-text-muted">amitchauhan.220404@gmail.com</p>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/amitchauhan-" target="_blank" rel="noreferrer" onClick={() => track("linkedin_click")} className="flex items-center gap-3 p-3 border border-hairline rounded hover:border-primary hover:bg-surface/50 transition-all group">
              <div className="p-2 bg-surface rounded text-text-muted group-hover:text-primary transition-colors shrink-0">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">LinkedIn</p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                  <span>linkedin.com/in/amitchauhan-</span>
                  <ExternalLink className="w-3 h-3 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </a>
            
            <a href="https://github.com/AmitC04" target="_blank" rel="noreferrer" onClick={() => track("github_click")} className="flex items-center gap-3 p-3 border border-hairline rounded hover:border-primary hover:bg-surface/50 transition-all group">
              <div className="p-2 bg-surface rounded text-text-muted group-hover:text-primary transition-colors shrink-0">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">GitHub</p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                  <span>github.com/AmitC04</span>
                  <ExternalLink className="w-3 h-3 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </a>
            
            <div className="flex items-center gap-3 p-3 border border-hairline rounded group hover:border-primary transition-colors cursor-default">
              <div className="p-2 bg-surface rounded text-text-muted group-hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">Phone</p>
                <p className="text-xs font-mono text-text-muted">+91 8879506104</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
