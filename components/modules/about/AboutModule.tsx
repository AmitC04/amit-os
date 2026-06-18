import { Terminal, Award, ChevronRight, User } from "lucide-react";

export function AboutModule() {
  return (
    <div className="max-w-4xl space-y-12 pb-12">
      
      {/* Featured Banner */}
      <div className="flex items-center gap-4 bg-primary/10 border border-primary/30 p-4 rounded-lg relative overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.15)]">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
        <Award className="w-8 h-8 text-primary shrink-0" />
        <div>
          <p className="text-xs font-mono text-primary uppercase font-bold tracking-wider mb-1">Featured</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm">
            <span className="font-bold text-text-primary">🏆 Winner - Citi Global Blockchain Hackathon 2025</span>
            <span className="hidden sm:inline text-text-muted">•</span>
            <span className="text-text-primary/80">🎓 Top 5% Department Rank (CGPA 9.56)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="space-y-8">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="relative shrink-0 group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-surface border-2 border-hairline rounded-xl overflow-hidden relative z-10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Online Indicator */}
            <div className="absolute -bottom-2 -right-2 bg-base p-1 rounded-full z-20">
              <div className="w-4 h-4 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
            </div>
          </div>

          <div className="space-y-6 flex-1">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">AMIT CHAUHAN</h1>
              
              {/* Pulsing Status Indicators */}
              <div className="flex flex-wrap gap-4 font-mono text-xs font-bold text-text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  ONLINE
                </div>
              </div>
            </div>

            {/* Current Mission Card */}
            <div className="font-mono text-sm border border-hairline rounded-lg overflow-hidden bg-surface/30 w-full max-w-xl">
              <div className="bg-surface border-b border-hairline px-4 py-2 font-bold text-text-muted flex items-center gap-2 text-xs uppercase tracking-wider">
                <Terminal className="w-3 h-3" />
                Current Mission
              </div>
              <div className="p-4 space-y-2 text-text-primary/90">
                <div className="flex items-center"><span className="w-32 text-text-muted">Organization</span><span className="text-accent font-bold flex items-center gap-1.5">: <img src="/logo_cdot.png" className="w-4 h-4 rounded-[2px] bg-white/90 p-[1px] object-contain inline-block" alt="C-DOT" /> C-DOT</span></div>
                <div className="flex items-center"><span className="w-32 text-text-muted">Role</span><span>: Software Engineering Intern</span></div>
                <div className="flex items-center"><span className="w-32 text-text-muted">Focus</span><span>: Q-SETU Testing & Validation</span></div>
                <div className="flex items-center"><span className="w-32 text-text-muted">Status</span><span className="flex items-center gap-2 text-primary font-bold">: ACTIVE</span></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* System Metrics Panel */}
      <section className="flex flex-wrap gap-4 font-mono text-xs">
        <div className="flex-1 min-w-[100px] border border-hairline bg-surface/30 rounded p-3 text-center">
          <p className="text-text-muted mb-1">CGPA</p>
          <p className="font-bold text-primary text-lg">9.56</p>
        </div>
        <div className="flex-1 min-w-[100px] border border-hairline bg-surface/30 rounded p-3 text-center">
          <p className="text-text-muted mb-1">Projects</p>
          <p className="font-bold text-text-primary text-lg">8+</p>
        </div>
        <div className="flex-1 min-w-[100px] border border-hairline bg-surface/30 rounded p-3 text-center">
          <p className="text-text-muted mb-1">Internships</p>
          <p className="font-bold text-text-primary text-lg">5+</p>
        </div>
        <div className="flex-1 min-w-[100px] border border-hairline bg-surface/30 rounded p-3 text-center">
          <p className="text-text-muted mb-1">Certifications</p>
          <p className="font-bold text-status-deployed text-lg">5+</p>
        </div>
        <div className="flex-1 min-w-[100px] border border-hairline bg-surface/30 rounded p-3 text-center">
          <p className="text-text-muted mb-1">Current Role</p>
          <p className="font-bold text-accent text-lg flex items-center justify-center gap-1.5"><img src="/logo_cdot.png" className="w-4 h-4 rounded-[2px] bg-white/90 p-[1px] object-contain inline-block" alt="C-DOT" /> C-DOT</p>
        </div>
        <div className="flex-1 min-w-[100px] border border-hairline bg-surface/30 rounded p-3 text-center">
          <p className="text-text-muted mb-1">Research</p>
          <p className="font-bold text-status-research text-lg flex items-center justify-center gap-1.5"><img src="/logo_iiita.png" className="w-4 h-4 rounded-[2px] bg-white/90 p-[1px] object-contain inline-block" alt="IIIT-A" /> IIIT-A</p>
        </div>
        <div className="flex-1 min-w-[100px] border border-primary/30 bg-primary/10 rounded p-3 text-center">
          <p className="text-primary/70 mb-1">Status</p>
          <p className="font-bold text-primary text-lg">ACTIVE</p>
        </div>
      </section>

      {/* Terminal Logs */}
      <section className="bg-[#0A0A0A] border border-hairline rounded-lg p-4 font-mono text-sm text-text-muted overflow-x-auto shadow-inner relative group">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs opacity-50">system.log</span>
        </div>
        <div className="space-y-1.5">
          <p className="text-text-muted/60 mb-2">&gt; initializing amit_os...</p>
          <p className="flex items-center gap-1.5"><span className="text-status-deployed font-bold">[OK]</span> <img src="/logo_srmist.png" className="w-3.5 h-3.5 rounded-[2px] bg-white/90 p-[1px] object-contain" alt="SRM" /> SRMIST connected</p>
          <p className="flex items-center gap-1.5"><span className="text-status-deployed font-bold">[OK]</span> <img src="/logo_iiita.png" className="w-3.5 h-3.5 rounded-[2px] bg-white/90 p-[1px] object-contain" alt="IIIT" /> IIIT Allahabad connected</p>
          <p className="flex items-center gap-1.5"><span className="text-status-deployed font-bold">[OK]</span> <img src="/logo_genospark.png" className="w-3.5 h-3.5 rounded-[2px] bg-white/90 p-[1px] object-contain" alt="GenoSpark" /> GenoSpark connected</p>
          <p className="flex items-center gap-1.5"><span className="text-status-deployed font-bold">[OK]</span> <img src="/logo_cdot.png" className="w-3.5 h-3.5 rounded-[2px] bg-white/90 p-[1px] object-contain" alt="C-DOT" /> C-DOT active</p>
          <div className="flex items-center gap-2 mt-4 pt-2">
            <span className="text-primary font-bold animate-pulse">SYSTEM READY_</span>
          </div>
        </div>
      </section>

      {/* 3 Command Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-hairline bg-surface/30 rounded-lg p-5 space-y-3 hover:border-primary/50 transition-colors">
          <h2 className="text-xs font-bold text-text-muted font-mono uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" /> MISSION
          </h2>
          <p className="text-sm text-text-primary/90 leading-relaxed font-mono">
            Building AI systems,<br/>enterprise software,<br/>and telecom infrastructure.
          </p>
        </div>
        <div className="border border-hairline bg-surface/30 rounded-lg p-5 space-y-3 hover:border-primary/50 transition-colors">
          <h2 className="text-xs font-bold text-text-muted font-mono uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" /> CURRENT FOCUS
          </h2>
          <ul className="text-sm text-text-primary/90 space-y-1.5 font-mono">
            <li>Q-SETU Testing</li>
            <li>Secure Communication</li>
            <li>Backend Systems</li>
          </ul>
        </div>
      </section>

      <div className="h-px w-full bg-hairline" />

      {/* Timeline Section */}
      <section className="space-y-6">
        <h2 className="text-sm font-bold text-text-muted font-mono uppercase tracking-wider">── SYSTEM EVOLUTION ──</h2>
        <div className="relative pl-6 border-l border-hairline space-y-10 font-mono text-sm max-w-2xl mt-6 ml-2 pb-4">
          
          {/* SRM */}
          <div className="relative group">
            <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-surface border-2 border-hairline group-hover:border-text-muted transition-colors" />
            <p className="text-text-muted mb-1 text-xs">2023</p>
            <p className="text-text-primary/40 group-hover:text-text-primary transition-colors">Started B.Tech in Electronics &amp; Communication Engineering</p>
            <p className="text-text-primary/40 group-hover:text-text-primary transition-colors">at <span className="font-bold inline-flex items-center gap-1.5 align-middle"><img src="/logo_srmist.png" className="w-4 h-4 rounded-[2px] bg-white/90 p-[1px] object-contain" alt="SRM" /> SRM Institute of Science and Technology</span> (9.56 CGPA)</p>
          </div>
          
          {/* IIIT-A */}
          <div className="relative group">
            <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-surface border-2 border-hairline group-hover:border-text-muted transition-colors" />
            <p className="text-text-muted mb-1 text-xs">2024</p>
            <p className="text-text-primary/40 group-hover:text-text-primary transition-colors font-bold">Research Intern at <span className="inline-flex items-center gap-1.5 align-middle"><img src="/logo_iiita.png" className="w-4 h-4 rounded-[2px] bg-white/90 p-[1px] object-contain" alt="IIIT" /> IIIT Allahabad</span></p>
            <ul className="text-text-primary/30 group-hover:text-text-primary/70 mt-2 space-y-1 transition-colors text-xs">
              <li>• Developed a Scene Text Spotting System</li>
              <li>• Worked on OCR, Computer Vision, and Deep Learning</li>
            </ul>
          </div>
          
          {/* GenoSpark */}
          <div className="relative group">
            <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-surface border-2 border-hairline group-hover:border-text-muted transition-colors" />
            <p className="text-text-muted mb-1 text-xs">2025</p>
            <p className="text-text-primary/40 group-hover:text-text-primary transition-colors font-bold">Next.js Intern at <span className="inline-flex items-center gap-1.5 align-middle"><img src="/logo_genospark.png" className="w-4 h-4 rounded-[2px] bg-white/90 p-[1px] object-contain" alt="GenoSpark" /> GenoSpark</span></p>
            <ul className="text-text-primary/30 group-hover:text-text-primary/70 mt-2 space-y-1 transition-colors text-xs">
              <li>• Built a User Analytics Dashboard</li>
              <li>• Developed an Admin Activity Monitoring Dashboard</li>
              <li>• Developed scalable full-stack applications</li>
            </ul>
          </div>
          
          {/* C-DOT Active */}
          <div className="relative">
            {/* Glowing Connector Line */}
            <div className="absolute -left-[24.5px] bottom-[calc(100%-12px)] w-[2px] h-32 bg-gradient-to-t from-accent via-accent/40 to-transparent z-0 shadow-[0_0_10px_rgba(0,229,255,0.4)]" />
            
            {/* Glowing Active Node */}
            <span className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(0,229,255,0.8)] z-10 animate-pulse" />
            <span className="absolute -left-[28px] top-2.5 w-2 h-2 rounded-full bg-white z-20" />
            
            <p className="text-accent mb-1 text-xs font-bold tracking-widest">ACTIVE NODE</p>
            <div className="bg-accent/5 border border-accent/30 p-4 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.05)] mt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <p className="text-text-primary font-bold text-base">Software Engineering Intern</p>
                <span className="text-text-muted text-xs">2026 — Present</span>
              </div>
              <p className="text-accent text-sm mb-4 font-bold"><span className="inline-flex items-center gap-1.5 align-middle"><img src="/logo_cdot.png" className="w-4 h-4 rounded-[2px] bg-white/90 p-[1px] object-contain" alt="C-DOT" /> C-DOT (Govt. of India)</span></p>
              
              <div className="text-xs text-text-primary/80 space-y-1">
                <p>• Secure Communication &amp; Cryptography</p>
                <p>• Telecom Infrastructure &amp; Security Engineering</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
