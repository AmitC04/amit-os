import { StatusTag } from "@/components/ui/StatusTag";

export function ResearchModule() {
  return (
    <div className="w-full max-w-3xl space-y-12 pb-12 overflow-x-hidden">
      <header className="space-y-2 flex justify-between items-end border-b border-hairline pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-mono uppercase text-accent">RESEARCH & APPLIED ENGINEERING</h1>
          <p className="text-text-muted font-mono text-sm">From Computer Vision Research to Secure Telecom Systems</p>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 border border-hairline bg-surface rounded space-y-2">
          <div className="font-mono text-xs text-text-muted">METRIC 01</div>
          <div className="text-2xl font-bold text-primary">85%+</div>
          <div className="text-sm text-text-primary/80">Scene Text Spotting Accuracy</div>
        </div>
        <div className="p-4 border border-hairline bg-surface rounded space-y-2">
          <div className="font-mono text-xs text-text-muted">METRIC 02</div>
          <div className="text-2xl font-bold text-primary">30%</div>
          <div className="text-sm text-text-primary/80">Inference Improvement</div>
        </div>
        <div className="p-4 border border-hairline bg-surface rounded space-y-2">
          <div className="font-mono text-xs text-text-muted">METRIC 03</div>
          <div className="text-2xl font-bold text-primary">01</div>
          <div className="text-sm text-text-primary/80">Research Project Delivered</div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-12 p-6 border border-hairline rounded-lg bg-surface/20">
        <div className="space-y-4">
          <h3 className="font-mono font-bold text-primary text-sm uppercase tracking-wider">Computer Vision & OCR</h3>
          <ul className="text-sm text-text-primary/70 space-y-2 font-mono">
            <li>• Scene Text Spotting</li>
            <li>• OCR Systems</li>
            <li>• Deep Learning</li>
            <li>• Model Optimization</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-mono font-bold text-accent text-sm uppercase tracking-wider">Systems Engineering</h3>
          <ul className="text-sm text-text-primary/70 space-y-2 font-mono">
            <li>• Secure Communication</li>
            <li>• Linux Systems</li>
            <li>• Telecom Infrastructure</li>
            <li>• Security Testing</li>
          </ul>
        </div>
      </section>

      <section className="space-y-0 relative pl-4">
        <div className="absolute left-[15px] top-4 bottom-4 w-px bg-hairline" />

        <div className="relative pl-8 py-2">
          <span className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-surface border border-hairline z-10" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-1">
            <div className="flex items-center gap-2">
              <img src="/logo_iiita.png" alt="IIIT Logo" className="w-6 h-6 rounded-sm bg-white/90 p-[1px] object-contain" />
              <h3 className="font-bold text-lg">IIIT Allahabad Research Internship</h3>
            </div>
            <StatusTag status="COMPLETED" className="text-xs w-max" />
          </div>
          <p className="font-mono text-xs text-text-muted mb-4">Nov 2024 – Dec 2024</p>
          
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-primary/90 mb-6 marker:text-text-muted/50">
            <li>Designed a Scene Text Spotting System integrating detection and recognition.</li>
            <li>Optimized model performance achieving 85%+ accuracy.</li>
            <li>Documented architecture and experiments for academic research.</li>
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {["85%+ Accuracy", "30% Faster Inference", "OCR Pipeline"].map((ach, i) => (
              <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold border border-accent/30 bg-accent/10 text-accent">
                {ach}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 font-mono text-[10px] text-text-muted mb-4">
            {["OCR", "Computer Vision", "Deep Learning"].map(tech => (
              <span key={tech} className="px-1.5 py-0.5 border border-hairline bg-base rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative pl-8 py-6 my-2">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-hairline via-primary/50 to-accent/50 z-0" />
          <div className="bg-surface/40 border border-hairline rounded-lg p-5">
            <h4 className="font-mono text-xs font-bold text-primary mb-2 uppercase tracking-widest">EVOLUTION</h4>
            <p className="text-sm text-text-primary/70 italic">
              Research in OCR and Computer Vision provided the foundation for building and testing secure communication systems and telecom infrastructure at C-DOT.
            </p>
          </div>
        </div>

        <div className="relative pl-8 py-2">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/50 z-0" />
          <span className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,255,0.5)] z-10" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-1">
            <div className="flex items-center gap-2">
              <img src="/logo_cdot.png" alt="C-DOT Logo" className="w-6 h-6 rounded-sm bg-white/90 p-[1px] object-contain" />
              <h3 className="font-bold text-lg">C-DOT Software Engineering Internship</h3>
            </div>
            <StatusTag status="ACTIVE" className="text-xs w-max" />
          </div>
          <p className="font-mono text-xs text-text-muted mb-4">Jun 2026 – Present</p>
          
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-primary/90 mb-6 marker:text-text-muted/50">
            <li>Working on secure communication and cryptographic networking systems.</li>
            <li>Deploying and testing Q-SETU IP Encryptors in Linux environments.</li>
            <li>Performing system validation and security-focused testing.</li>
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Q-SETU Testing", "System Validation", "Secure Communication"].map((ach, i) => (
              <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold border border-primary/30 bg-primary/10 text-primary">
                {ach}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 font-mono text-[10px] text-text-muted">
            {["Networking", "Linux", "Security Testing", "Telecom Systems"].map(tech => (
              <span key={tech} className="px-1.5 py-0.5 border border-hairline bg-base rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
