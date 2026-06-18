"use client";

import { StatusTag } from "@/components/ui/StatusTag";
import { ExternalLink, FileText } from "lucide-react";
import { track } from "@vercel/analytics";

// Inline Github Icon component since it was removed from lucide-react
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

interface Project {
  id: string;
  name: string;
  status: "DEPLOYED" | "ACTIVE" | "ARCHIVED" | "COMPLETED" | "RESEARCH" | "INTERNSHIP";
  tag?: string;
  description: string;
  image?: string;
  metrics?: string[];
  stack: string[];
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
}

const PROJECTS: Project[] = [
  {
    id: "001",
    name: "YouTube Intelligence Pipeline",
    status: "COMPLETED",
    tag: "PERSONAL PROJECT",
    description: "Built an end-to-end Agentic AI pipeline using Google ADK and Gemini 2.0 Flash. Designed a real-time ingestion system using YouTube API v3 and PubSubHubbub webhooks, exposed LLM-callable tools, and developed a chatbot interface with analytics powered by FastAPI.",
    image: "/yt.png",
    metrics: ["5 AI Tools", "Real-Time Ingestion"],
    stack: ["Google ADK", "Gemini", "FastAPI", "MongoDB", "Docker"],
    links: { github: "https://github.com/AmitC04/YouTube-Intelligence-Pipeline" }
  },
  {
    id: "002",
    name: "Human & Animal Intruder Border Detection System",
    status: "COMPLETED",
    tag: "ACADEMIC PROJECT",
    description: "Developed a real-time border surveillance system using Computer Vision and Deep Learning to detect and classify human and animal intrusions. Implemented automated alert mechanisms and optimized the detection pipeline for reliable monitoring in border security environments.",
    image: "/border.png",
    stack: ["Computer Vision", "Deep Learning", "OpenCV", "Python"],
    links: { github: "https://github.com/AmitC04/HUMAN-AND-ANIMAL-INTRUDER-BORDER-DETECTION-SYSTEM-" }
  },
  {
    id: "003",
    name: "ESP32 Wi-Fi Network Analyzer",
    status: "COMPLETED",
    tag: "ACADEMIC PROJECT",
    description: "Built an ESP32-based wireless network analysis tool capable of scanning nearby Wi-Fi networks, monitoring signal strength, channel utilization, and security configurations. Designed for real-time wireless environment assessment and network diagnostics.",
    stack: ["ESP32", "Networking", "Wi-Fi Analysis", "Embedded Systems"],
    links: { github: "https://github.com/AmitC04/ESP32-WiFi-Network-Analyzer" }
  },
  {
    id: "004",
    name: "Intelligent Traffic Management System (ITMS)",
    status: "COMPLETED",
    tag: "ACADEMIC PROJECT",
    description: "Developing an intelligent traffic monitoring and management platform to analyze traffic flow, detect congestion patterns, and support traffic optimization using Computer Vision and intelligent automation techniques.",
    image: "/itms.png",
    stack: ["Computer Vision", "Analytics", "Automation", "Smart Systems"],
    links: { github: "#" }
  },
  {
    id: "005",
    name: "Scene Text Spotting System",
    status: "RESEARCH",
    tag: "IIIT ALLAHABAD",
    description: "Designed a Scene Text Spotting system integrating text detection and recognition into a unified pipeline. Optimized model performance achieving 85%+ accuracy with faster inference and documented architecture and experimental results for academic evaluation.",
    image: "/scene.png",
    metrics: ["85%+ Accuracy", "30% Faster Inference"],
    stack: ["OCR", "Computer Vision", "Deep Learning"],
    links: { github: "https://github.com/AmitC04/SCENE-TEXT-SPOTTING-TEXT-RECOGNITION-" }
  },
  {
    id: "006",
    name: "User Analytics Dashboard",
    status: "INTERNSHIP",
    tag: "GENOSPARK",
    description: "Developed a user analytics platform enabling data-driven insights into user behavior and engagement patterns. Built scalable full-stack modules and reporting dashboards to support product optimization and business decision-making.",
    image: "/analytics.png",
    metrics: ["Analytics Platform", "Production Deployment"],
    stack: ["Next.js", "REST APIs", "Analytics", "Full-Stack Development"],
    links: { github: "https://github.com/AmitC04/GENOSPARK_USER-ACTIVITY_MVC_VERSION" }
  },
  {
    id: "007",
    name: "Admin Activity Monitoring Dashboard",
    status: "INTERNSHIP",
    tag: "GENOSPARK",
    description: "Built an internal administration dashboard for monitoring active users, engagement metrics, user issues, and behavioral insights. Integrated analytics and reporting mechanisms to improve operational visibility and support product improvement initiatives.",
    image: "/admin_dashboard.png",
    stack: ["Next.js", "Microsoft Clarity", "Analytics", "Data Visualization"],
    links: { github: "https://github.com/AmitC04/EMS_-USER-ANALYTICS" }
  },
  {
    id: "008",
    name: "Employment Burnout Analysis",
    status: "INTERNSHIP",
    tag: "IBM AICTE",
    description: "Designed a complete Machine Learning workflow from data ingestion and preprocessing to predictive modeling and business insights generation. Developed analytical pipelines supporting data-driven decision making.",
    image: "/burnout.png",
    stack: ["Python", "SQL", "Machine Learning", "Predictive Analytics"],
    links: { github: "https://github.com/AmitC04/EMPLOYMENT-BURNOUT-" }
  }
];

export function ProjectsModule() {
  return (
    <div className="max-w-4xl space-y-8 pb-12">
      <header className="space-y-2 flex justify-between items-end border-b border-hairline pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-mono uppercase">PROJECT REGISTRY</h1>
          <p className="text-text-muted font-mono text-sm">System completed projects and research.</p>
        </div>
        <span className="text-text-muted font-mono text-sm">{PROJECTS.length} Systems Built</span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative flex flex-col bg-surface border border-hairline rounded-lg overflow-hidden hover:-translate-y-1 hover:border-primary/50 transition-all duration-300"
          >
            {/* Project Image */}
            {project.image && (
              <div className="w-full h-40 border-b border-hairline overflow-hidden bg-base relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            )}
            
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors mt-1">
                  {project.id}
                </span>
                <div className="flex gap-2">
                  <StatusTag status={project.status} />
                  {project.tag && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border border-hairline text-text-muted bg-base">
                      {project.tag}
                    </span>
                  )}
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-2 text-text-primary group-hover:text-primary transition-colors">
                {project.name}
              </h3>
            
            <p className="text-sm text-text-muted mb-4 flex-1">
              {project.description}
            </p>

            {project.metrics && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold border border-accent/30 bg-accent/10 text-accent">
                    {metric}
                  </span>
                ))}
              </div>
            )}
            
            <div className="space-y-4 mt-auto">
              <div className="flex flex-wrap gap-2 font-mono text-[10px] text-text-muted">
                {project.stack.map(tech => (
                  <span key={tech} className="px-1.5 py-0.5 border border-hairline bg-base rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4 border-t border-hairline font-mono text-xs">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" onClick={() => track(project.name.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '_view')} className="flex items-center gap-1.5 px-2 py-1 rounded bg-primary/5 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/50 transition-all">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>[github]</span>
                  </a>
                )}
                {project.links.caseStudy && (
                  <a href={project.links.caseStudy} target="_blank" rel="noreferrer" onClick={() => track(project.name.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '_view')} className="flex items-center gap-1.5 px-2 py-1 rounded bg-primary/5 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/50 transition-all">
                    <FileText className="w-3.5 h-3.5" />
                    <span>[case study]</span>
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" onClick={() => track(project.name.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '_view')} className="flex items-center gap-1.5 px-2 py-1 rounded bg-primary/5 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/50 transition-all">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>[live demo]</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
