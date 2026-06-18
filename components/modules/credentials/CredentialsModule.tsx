import { Award, ShieldCheck } from "lucide-react";

export function CredentialsModule() {
  const achievements = [
    { 
      title: "Winner — Citi Global Blockchain Hackathon 2025", 
      badge: "🏆 Global Winner",
      desc: "Recognized for developing an innovative blockchain-based solution and securing the winning position in a global hackathon environment." 
    },
    { 
      title: "Top 5% in Department", 
      badge: "🎓 9.56 CGPA",
      desc: "Maintained a 9.56 CGPA in B.Tech Electronics & Communication Engineering at SRM Institute of Science and Technology, consistently ranking among the top-performing students in the department." 
    },
    { 
      title: "Software Engineering Intern — C-DOT", 
      badge: "🏛 Govt. R&D",
      desc: "Selected as a Software Engineering Intern at C-DOT (Centre for Development of Telematics), contributing to secure communication systems, cryptographic networking, and telecom infrastructure projects." 
    }
  ];

  const certifications = [
    {
      category: "Cloud",
      items: [
        { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", logoUrl: "/logo_aws.png" },
        { title: "Oracle Fusion Cloud", issuer: "Oracle", logoUrl: "/logo_oracle.png" }
      ]
    },
    {
      category: "AI & ML",
      items: [
        { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", logoUrl: "/logo_aws.png" },
        { title: "AWS Machine Learning Foundations", issuer: "Amazon Web Services", logoUrl: "/logo_aws.png" }
      ]
    },
    {
      category: "Enterprise",
      items: [
        { title: "ServiceNow Certified System Administrator", issuer: "ServiceNow", logoUrl: "/logo_servicenow.png" }
      ]
    }
  ];

  return (
    <div className="max-w-3xl space-y-12 pb-12">
      <header className="space-y-2 flex justify-between items-end border-b border-hairline pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-mono uppercase">CREDENTIALS & ACHIEVEMENTS</h1>
          <p className="text-text-muted font-mono text-sm">Certifications, recognitions, and professional milestones.</p>
        </div>
      </header>

      {/* Certification Summary Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 border border-hairline bg-surface/30 rounded text-center">
          <div className="text-2xl font-bold text-primary">5+</div>
          <div className="text-xs font-mono text-text-muted mt-1">Professional Certifications</div>
        </div>
        <div className="p-4 border border-hairline bg-surface/30 rounded text-center">
          <div className="text-2xl font-bold text-primary">Top 5%</div>
          <div className="text-xs font-mono text-text-muted mt-1">Department Rank</div>
        </div>
        <div className="p-4 border border-hairline bg-surface/30 rounded text-center">
          <div className="text-2xl font-bold text-primary">1</div>
          <div className="text-xs font-mono text-text-muted mt-1">Global Hackathon Win</div>
        </div>
        <div className="p-4 border border-hairline bg-surface/30 rounded text-center">
          <div className="text-2xl font-bold text-primary">Govt. R&D</div>
          <div className="text-xs font-mono text-text-muted mt-1">C-DOT Experience</div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-bold text-text-muted font-mono uppercase tracking-wider flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" />
          Key Achievements
        </h2>
        <div className="space-y-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-4 border border-hairline bg-surface/50 rounded-lg">
              <div className="text-primary font-mono text-sm mt-0.5">{(idx + 1).toString().padStart(2, '0')}</div>
              <div>
                <h3 className="font-bold text-text-primary">{item.title}</h3>
                <div className="mt-1 mb-2">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-mono border border-hairline bg-surface rounded text-text-muted">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-bold text-text-muted font-mono uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary" />
          Certifications
        </h2>
        <div className="space-y-8">
          {certifications.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <h3 className="text-xs font-bold text-text-primary/70 font-mono uppercase tracking-wider border-b border-surface pb-2">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((cert, idx) => (
                  <div key={idx} className="p-4 border border-hairline bg-surface/30 rounded-lg flex flex-col h-full hover:border-primary/50 transition-colors group">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        {cert.logoUrl && (
                          <div className="w-8 h-8 rounded bg-white/90 p-1 flex items-center justify-center shrink-0">
                            <img src={cert.logoUrl} alt={`${cert.issuer} logo`} className="max-w-full max-h-full object-contain" />
                          </div>
                        )}
                        <h3 className="font-bold text-sm text-text-primary leading-tight group-hover:text-primary transition-colors">{cert.title}</h3>
                      </div>
                      <span className="font-mono text-[10px] text-text-muted border border-hairline bg-surface/80 px-1.5 py-0.5 rounded tracking-wider uppercase shrink-0 mt-1">
                        Completed
                      </span>
                    </div>
                    <div className="flex justify-between items-end font-mono text-xs text-text-muted mt-auto pt-2">
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
