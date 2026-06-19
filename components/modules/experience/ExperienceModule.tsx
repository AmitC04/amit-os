import { StatusTag } from "@/components/ui/StatusTag";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  achievements?: string[];
  status: "ACTIVE" | "ARCHIVED" | "COMPLETED";
  orgType: string;
  logoUrl?: string;
}

const EXPERIENCES: Experience[] = [
  {
    company: "Centre for Development of Telematics (C-DOT)",
    logoUrl: "/logo_cdot.png",
    role: "Software Engineering Intern",
    period: "Jun 2026 - Present",
    status: "ACTIVE",
    orgType: "GOVT. R&D",
    description: [
      "Working on secure communication and cryptographic networking systems.",
      "Assisting in deployment, configuration, and testing of Q-SETU IP Encryptors.",
      "Performing system validation, troubleshooting, and security testing."
    ],
    achievements: ["Q-SETU Testing", "Secure Communication"]
  },
  {
    company: "Genospark Innovative Solutions Pvt. Ltd.",
    logoUrl: "/logo_genospark.png",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 - Mar 2026",
    status: "COMPLETED",
    orgType: "INDUSTRY",
    description: [
      "Developed a User Analytics Dashboard.",
      "Developed an Admin Activity Monitoring Dashboard.",
      "Built scalable full-stack applications using Next.js and REST APIs.",
      "Analyzed user interaction data to generate product insights.",
      "Worked with Git workflows and modern development practices."
    ],
    achievements: ["Next.js", "REST APIs", "Analytics"]
  },
  {
    company: "IBM AICTE",
    logoUrl: "/logo_ibm.png",
    role: "AI Intern",
    period: "Nov 2024 - Jan 2025",
    status: "COMPLETED",
    orgType: "AI/ML",
    description: [
      "Built ML pipelines using Python and SQL.",
      "Automated workflows using GitHub Actions and CI/CD.",
      "Improved pipeline performance through optimized data processing."
    ],
    achievements: ["Python", "SQL", "GitHub Actions"]
  },
  {
    company: "IIIT Allahabad",
    logoUrl: "/logo_iiita.png",
    role: "Research Intern",
    period: "Nov 2024 - Dec 2024",
    status: "COMPLETED",
    orgType: "RESEARCH",
    description: [
      "Developed a Scene Text Spotting System integrating detection and recognition.",
      "Worked on OCR, Computer Vision, and Deep Learning.",
      "Documented architecture and experimental results."
    ],
    achievements: ["85%+ Accuracy", "30% Faster Inference"]
  },
  {
    company: "AWS EduSkills",
    logoUrl: "/logo_aws.png",
    role: "Machine Learning Virtual Intern",
    period: "Sep 2023 - Nov 2023",
    status: "COMPLETED",
    orgType: "AI/ML",
    description: [
      "Deployed ML models on AWS EC2.",
      "Used AWS S3 and CloudWatch for storage and monitoring.",
      "Explored scalable cloud infrastructure for ML systems."
    ]
  }
];

export function ExperienceModule() {
  return (
    <div className="w-full max-w-3xl space-y-8 pb-12 overflow-x-hidden">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight font-mono uppercase">SYSTEM HISTORY</h1>
        <p className="text-text-muted font-mono text-sm">{EXPERIENCES.length} Experience Records Loaded</p>
      </header>

      <div className="space-y-4 ml-2 mt-4">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className={`relative pl-8 pr-6 py-5 rounded-lg transition-all duration-300 ${exp.status === 'ACTIVE' ? 'border border-primary/50 bg-primary/5 shadow-[0_0_15px_rgba(0,229,255,0.1)]' : 'border border-transparent hover:bg-surface/30'}`}>
            {/* Timeline Line & Dot */}
            <div className={`absolute left-0 top-0 w-[2px] ${idx !== EXPERIENCES.length - 1 ? '-bottom-4' : 'bottom-0'} ${
              exp.status === 'ACTIVE' 
                ? 'bg-primary shadow-[0_0_8px_rgba(0,229,255,0.8)] z-10' 
                : idx === 1 
                  ? 'bg-gradient-to-b from-primary/60 to-hairline' 
                  : 'bg-hairline'
            }`} />
            
            <span className={`absolute -left-[5px] top-7 w-3 h-3 rounded-full border-2 z-20 ${
              exp.status === 'ACTIVE' 
                ? 'bg-primary border-primary shadow-[0_0_10px_rgba(0,229,255,0.8)]' 
                : idx === 1
                  ? 'bg-surface border-primary/60'
                  : 'bg-surface border-hairline'
            }`} />
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <div className="flex items-start gap-2">
                  {exp.logoUrl && (
                    <img src={exp.logoUrl} alt={`${exp.company} logo`} className="w-5 h-5 rounded-sm object-contain bg-white/90 p-[1px] mt-1 shrink-0" />
                  )}
                  <h3 className={`font-bold text-lg leading-snug ${exp.status === 'ACTIVE' ? 'text-primary' : 'text-text-primary'}`}>
                    {exp.company}
                    <span className="inline-block align-text-bottom ml-2 mb-0.5 font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-hairline bg-surface/50 text-text-muted">
                      [{exp.orgType}]
                    </span>
                  </h3>
                </div>
                <p className="font-mono text-sm text-text-muted mt-1">{exp.role}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                {exp.status === 'ACTIVE' ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-bold bg-primary/20 text-primary border border-primary/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    ACTIVE NODE
                  </span>
                ) : (
                  <StatusTag status={exp.status} />
                )}
                <span className="font-mono text-xs text-text-muted/60 whitespace-nowrap">{exp.period}</span>
              </div>
            </div>
            
            {exp.achievements && (
              <div className="flex flex-wrap gap-2 mb-3">
                {exp.achievements.map((ach, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold border border-accent/30 bg-accent/10 text-accent">
                    {ach}
                  </span>
                ))}
              </div>
            )}
            
            <ul className="list-disc list-inside space-y-1.5 text-sm text-text-primary/70 marker:text-text-muted/50">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
