export function SkillsModule() {
  const radar = [
    { label: "AI Systems", level: 85, filled: 17, total: 20, context: "Research + Projects" },
    { label: "Backend", level: 80, filled: 16, total: 20, context: "FastAPI + Next.js" },
    { label: "Full Stack", level: 75, filled: 15, total: 20, context: "Production Systems" },
    { label: "Cloud", level: 65, filled: 13, total: 20, context: "AWS + GCP" },
    { label: "Telecom", level: 60, filled: 12, total: 20, context: "C-DOT" }
  ];

  const skills = [
    {
      domain: "Programming",
      items: [
        {name: "Python", icon: "python", label: "IIIT-A, YT Pipeline, Projects"}, 
        {name: "JavaScript", icon: "javascript", label: "GenoSpark, Portfolio"}, 
        {name: "TypeScript", icon: "typescript", label: "GenoSpark, YT Pipeline, Portfolio"}, 
        {name: "C++", icon: "cplusplus", label: "Academic, ESP32"}, 
        {name: "SQL", icon: "mysql", label: "GenoSpark, Projects"}, 
        {name: "C", icon: "c", label: "Embedded, ESP32"}
      ]
    },
    {
      domain: "AI / ML",
      items: [
        {name: "TensorFlow", label: "IIIT-A", icon: "tensorflow"}, 
        {name: "OpenCV", label: "IIIT-A, Projects", icon: "opencv"}, 
        {name: "Google ADK", label: "YT Pipeline", icon: "google"}, 
        {name: "Streamlit", icon: "streamlit", label: "Projects"}, 
        {name: "LLM Systems", label: "YT Pipeline"}, 
        {name: "Computer Vision", label: "IIIT-A, Projects"}
      ]
    },
    {
      domain: "Telecom & Systems",
      items: [
        {name: "Linux Systems", icon: "linux", label: "C-DOT"}, 
        {name: "Q-SETU IP Encryptors", label: "C-DOT"},
        {name: "System Validation", label: "C-DOT"},
        {name: "Networking", label: "C-DOT, ESP32"}, 
        {name: "Security Testing", label: "C-DOT"}, 
        {name: "Telecom Infrastructure", label: "C-DOT"}
      ]
    },
    {
      domain: "Backend",
      items: [
        {name: "FastAPI", icon: "fastapi", label: "YT Pipeline"}, 
        {name: "Next.js APIs", icon: "nextdotjs", label: "GenoSpark"}, 
        {name: "PostgreSQL", icon: "postgresql", label: "GenoSpark"}, 
        {name: "MongoDB", icon: "mongodb", label: "YT Pipeline"}, 
        {name: "MySQL", icon: "mysql", label: "GenoSpark, Projects"}, 
        {name: "REST APIs", label: "GenoSpark, YT Pipeline"}
      ]
    },
    {
      domain: "Frontend",
      items: [
        {name: "Next.js", label: "GenoSpark", icon: "nextdotjs"}, 
        {name: "React", icon: "react", label: "GenoSpark, Portfolio"}, 
        {name: "HTML5", icon: "html5", label: "GenoSpark, Portfolio"}, 
        {name: "Tailwind CSS", icon: "tailwindcss", label: "GenoSpark, Portfolio"},
        {name: "CSS3", icon: "css3", label: "GenoSpark, Portfolio"}
      ]
    },
    {
      domain: "Cloud",
      items: [
        {name: "AWS", icon: "amazonaws", label: "AWS EduSkills, Projects"}, 
        {name: "EC2", icon: "amazonec2", label: "AWS EduSkills"}, 
        {name: "S3", icon: "amazons3", label: "AWS EduSkills"}, 
        {name: "CloudWatch", icon: "amazoncloudwatch", label: "AWS EduSkills"}
      ]
    },
    {
      domain: "DevOps & Tools",
      items: [
        {name: "Git", icon: "git", label: "All"}, 
        {name: "GitHub Actions", icon: "githubactions", label: "IBM"}, 
        {name: "Docker", icon: "docker", label: "YT Pipeline"}, 
        {name: "Postman", icon: "postman", label: "GenoSpark, YT Pipeline"}, 
        {name: "Linux", icon: "linux", label: "C-DOT"}, 
        {name: "Figma", icon: "figma", label: "Portfolio"}, 
        {name: "GitHub", icon: "github", label: "All"},
        {name: "CI/CD", label: "IBM"}
      ]
    },
    {
      domain: "Data & Analytics",
      items: [
        {name: "Pandas", icon: "pandas", label: "IIIT-A, Projects"}, 
        {name: "NumPy", icon: "numpy", label: "IIIT-A, Projects"}, 
        {name: "Power BI", icon: "powerbi", label: "Projects"}, 
        {name: "Microsoft Excel", icon: "microsoftexcel", label: "Projects"}, 
        {name: "Data Cleaning", label: "Projects"}, 
        {name: "Data Visualization", label: "GenoSpark, Projects"}, 
        {name: "Dashboard Development", label: "GenoSpark"}
      ]
    },
    {
      domain: "Research",
      items: [
        {name: "OCR", label: "IIIT-A"}, 
        {name: "Scene Text Spotting", label: "IIIT-A"}, 
        {name: "Model Optimization", label: "IIIT-A"}
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl space-y-12 pb-12 overflow-x-hidden">
      <header className="space-y-2 border-b border-hairline pb-4">
        <h1 className="text-2xl font-bold tracking-tight font-mono uppercase">Skills & Capabilities</h1>
        <p className="text-text-muted font-mono text-sm">System diagnostics and technical domains.</p>
      </header>

      {/* Tech Radar Panel */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold text-text-muted font-mono uppercase tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          TECH RADAR
        </h2>
        <div className="bg-[#0A0A0A] border border-hairline rounded-lg p-6 font-mono text-sm shadow-inner overflow-x-auto">
          <div className="space-y-3">
            {radar.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <span className="w-40 text-text-primary/90 font-bold">{item.label}</span>
                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-primary tracking-[2px] text-xs">
                      {"█".repeat(item.filled)}
                      <span className="text-hairline">{"█".repeat(item.total - item.filled)}</span>
                    </span>
                    <span className="text-text-muted text-xs w-8 text-right">{item.level}%</span>
                  </div>
                  <span className="text-xs text-text-muted/60 font-mono hidden sm:inline-block">→ {item.context}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Panel */}
      <section className="space-y-4 pt-6 pb-6">
        <h2 className="text-sm font-bold text-text-muted font-mono uppercase tracking-wider">
          CURRENTLY WORKING WITH
        </h2>
        <div className="bg-surface/20 border border-hairline rounded-lg p-5">
          <ul className="text-sm text-text-primary/80 space-y-2 font-mono marker:text-text-muted list-inside list-disc">
            <li>Q-SETU Testing & Validation</li>
            <li>Secure Communication Systems</li>
            <li>FastAPI & Backend Engineering</li>
            <li>AI Agent Workflows</li>
            <li>Analytics Dashboards</li>
          </ul>
        </div>
      </section>

      <div className="h-px w-full bg-hairline" />

      {/* Skills Matrix */}
      <section className="space-y-6 pt-6">
        <h2 className="text-sm font-bold text-text-muted font-mono uppercase tracking-wider">
          TECHNOLOGY STACK
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {skills.map((group) => (
            <div key={group.domain} className="space-y-4">
              <h3 className="text-xs font-bold text-text-primary/70 font-mono uppercase tracking-wider border-b border-surface pb-2">
                {group.domain}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...group.items].sort((a, b) => (b.icon ? 1 : 0) - (a.icon ? 1 : 0)).map((skill) => (
                  <span 
                    key={skill.name} 
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border border-hairline bg-surface/50 text-text-primary/90 hover:border-primary hover:text-primary transition-colors cursor-default rounded"
                  >
                    {skill.icon && <img src={`https://cdn.simpleicons.org/${skill.icon}/888888`} className="w-3.5 h-3.5 opacity-70" alt="" />}
                    {skill.name}
                    {skill.label && <span className="text-[10px] text-text-muted/70 ml-1">[{skill.label}]</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
