"use client";

import { Download, FileText } from "lucide-react";
import { track } from "@vercel/analytics";

export function ResumeModule() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 h-[calc(100vh-8rem)] flex flex-col overflow-x-hidden">
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 border-b border-hairline pb-6 shrink-0">
        <div className="mt-2">
          <h1 className="text-2xl font-bold tracking-tight font-mono uppercase text-text-primary">CAREER DOSSIER</h1>
          <p className="text-text-muted font-mono text-sm mt-1">Official resume and experience archive.</p>
        </div>
        
        <div className="flex gap-6 items-start">
          <div className="hidden sm:block border border-hairline bg-surface/30 rounded p-3 text-[10px] font-mono text-text-muted min-w-[200px]">
            <div className="text-primary font-bold mb-1.5 uppercase tracking-wider text-xs">DOCUMENT STATUS</div>
            <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
              <span>Version:</span> <span className="text-text-primary font-bold">2026.1</span>
              <span>Updated:</span> <span className="text-text-primary">Jun 2026</span>
              <span>Format:</span>  <span className="text-text-primary">ATS Optimized</span>
              <span>Status:</span>  <span className="text-primary flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>Active</span>
            </div>
          </div>
          
          <a 
            href="/resume.pdf" 
            download
            onClick={() => track("resume_download")}
            className="flex items-center gap-2 px-5 py-3 bg-primary text-base font-bold font-mono rounded hover:bg-primary/90 transition-colors shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume v2026</span>
          </a>
        </div>
      </header>

      <div className="flex-1 w-full bg-surface border border-hairline rounded overflow-hidden relative min-h-[500px]">
        <iframe
          src="/resume.pdf"
          className="w-full h-full absolute inset-0 z-10 border-none"
          title="Resume PDF Viewer"
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4 bg-surface z-20 relative">
            <FileText className="w-16 h-16 text-text-muted" />
            <div className="space-y-2">
              <p className="font-bold">PDF Viewer Not Available</p>
              <p className="text-sm text-text-muted">Your browser does not support inline PDFs.</p>
            </div>
            <a 
              href="/resume.pdf" 
              className="mt-4 px-4 py-2 border border-primary text-primary hover:bg-primary/10 rounded font-mono text-sm transition-colors"
            >
              Download PDF Instead
            </a>
          </div>
        </iframe>
      </div>
    </div>
  );
}
