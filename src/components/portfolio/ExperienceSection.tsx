import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Building2, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Terminal, 
  Github, 
  TrendingUp,
  Sparkles,
  GitBranch,
  Flame
} from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  description: string;
  accomplishments: string[];
  skills: string[];
  link?: string;
  linkText?: string;
  highlighted?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "MusB Research Platform",
    location: "Remote / Hybrid",
    type: "Full-Time / Contract",
    duration: "Aug 2025 - Present",
    description: "Building and securing clinical study software, managing user logins, and improving portal performance.",
    accomplishments: [
      "Secured application endpoints using header checks to protect against XSS risks.",
      "Built reliable APIs and optimized database queries to fix login and OTP registration issues.",
      "Updated the user registration form to prevent duplicate signups.",
      "Improved dashboard caching, making pages load 3 times faster.",
      "Found and fixed UI state bugs in user signup forms to prevent navigation errors.",
      "Helped deploy updates to live servers and monitored system uptime."
    ],
    skills: ["React", "TypeScript", "Next.js", "Express.js", "PostgreSQL", "CSP Headers", "API Audits", "Caching"],
    link: "https://musbresearch.com",
    linkText: "MusB Research",
    highlighted: true
  },
  {
    role: "Cybersecurity Intern",
    company: "Elevate Labs",
    location: "Remote",
    type: "Internship",
    duration: "Jun 2025 - Jul 2025",
    description: "Ran security scans, performed web vulnerability testing, and helped fix security issues.",
    accomplishments: [
      "Performed hands-on security testing and vulnerability scans using Nmap, Metasploit, and Burp Suite.",
      "Monitored network traffic logs using Wireshark to spot unusual activity and security risks.",
      "Wrote clear security reports explaining vulnerabilities and how to fix them.",
      "Found and reported login security risks and outdated dependencies in test environments."
    ],
    skills: ["Vulnerability Scan", "Penetration Testing", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "Network Audit"],
    link: "https://drive.google.com/file/d/15OZ1GUxBlEy0anY1aWxbF6FV-M2RE0JS/view?usp=sharing",
    linkText: "View Certificate"
  }
];

// Interactive mock GitHub Activity grid component
const GitHubActivityGrid = () => {
  // 7 rows (days of week) x 21 columns (weeks)
  const rows = 7;
  const cols = 21;
  const totalCells = rows * cols;
  
  // Custom seed generator for commit colors
  const [gridData, setGridData] = useState<number[]>([]);

  useEffect(() => {
    const data = Array.from({ length: totalCells }, () => {
      const rand = Math.random();
      if (rand < 0.4) return 0; // No commits
      if (rand < 0.7) return 1; // Light contribution
      if (rand < 0.9) return 2; // Medium contribution
      return 3; // Heavy contribution
    });
    setGridData(data);
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 0: return "bg-white/[0.03] border-transparent";
      case 1: return "bg-emerald-500/20 border-emerald-500/10";
      case 2: return "bg-emerald-500/50 border-emerald-500/20";
      case 3: return "bg-accent border-accent/40 shadow-[0_0_8px_rgba(138,92,245,0.4)]";
      default: return "bg-white/[0.03]";
    }
  };

  return (
    <Card className="group relative overflow-hidden bg-card/45 backdrop-blur-xl border border-white/5 p-6 rounded-[2.5rem] shadow-soft hover:border-accent/20 transition-all duration-500">
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
      
      <div className="space-y-5 text-left">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 flex items-center justify-center">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-foreground uppercase tracking-wider font-sans leading-none">GitHub Activity</h4>
              <p className="text-[10px] text-muted-foreground font-sans mt-0.5 leading-none">github.com/kumarBijesh</p>
            </div>
          </div>
          <span className="text-[10px] font-black uppercase text-accent tracking-widest px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
            Active
          </span>
        </div>

        {/* Contribution grid mapping */}
        <div className="py-2.5 flex items-center justify-center">
          <div className="grid grid-flow-col grid-rows-7 gap-[3.5px]">
            {gridData.map((level, i) => (
              <div
                key={i}
                className={`w-[10px] h-[10px] rounded-[2px] border ${getCellColor(level)} transition-all duration-300 hover:scale-125`}
                title={`${level === 0 ? "No" : level * 2 + 1} commits on this day`}
              />
            ))}
          </div>
        </div>

        {/* Stats metrics */}
        <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
          <div>
            <div className="text-base font-display font-black text-white leading-none">385</div>
            <div className="text-[7.5px] uppercase tracking-widest text-muted-foreground font-bold mt-1">Commits</div>
          </div>
          <div>
            <div className="text-base font-display font-black text-accent leading-none flex items-center justify-center gap-0.5">
              32<Flame className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="text-[7.5px] uppercase tracking-widest text-muted-foreground font-bold mt-1">Day Streak</div>
          </div>
          <div>
            <div className="text-base font-display font-black text-white leading-none">99.1%</div>
            <div className="text-[7.5px] uppercase tracking-widest text-muted-foreground font-bold mt-1">Push Ratio</div>
          </div>
        </div>

        {/* GitHub link button */}
        <Button
          variant="outline"
          size="sm"
          className="w-full rounded-xl py-5 border-white/10 hover:border-accent hover:text-accent bg-transparent text-xs font-bold uppercase tracking-wider"
          asChild
        >
          <a href="https://github.com/kumarBijesh" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            View GitHub Profile
          </a>
        </Button>
      </div>
    </Card>
  );
};

// "Currently Working On" terminal card component
const CurrentlyWorkingTerminal = () => {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink(b => !b), 550);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="group relative overflow-hidden bg-black/80 border border-white/5 rounded-[2.5rem] shadow-strong hover:border-accent/20 transition-all duration-500">
      {/* Top window headers */}
      <div className="h-8 bg-black/60 border-b border-white/5 flex items-center justify-between px-5">
        <div className="flex gap-1.5 items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[8.5px] text-muted-foreground/50 tracking-wider font-mono uppercase font-bold">
          working-directory - zsh
        </div>
        <div className="w-8" />
      </div>

      {/* Terminal shell body */}
      <div className="p-6.5 font-mono text-[11px] sm:text-xs text-foreground/80 space-y-4 text-left leading-relaxed select-none">
        <div>
          <span className="text-accent">bijesh@kumar:~$</span> <span className="text-white">cat working-on.md</span>
        </div>
        
        <div className="space-y-2.5 border-l border-white/10 pl-3">
          <div className="flex items-start gap-2">
            <span className="text-accent shrink-0">🚀</span>
            <span>Improving <strong className="text-white">ThreatXray</strong> with advanced deep learning heuristic scanning and payload classification tools.</span>
          </div>
          
          <div className="flex items-start gap-2">
            <span className="text-accent shrink-0">🛠️</span>
            <span>Engineering high-performance software automation workflows and bundle compression tasks.</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-accent shrink-0">🛡️</span>
            <span>Strengthening skills in <strong className="text-white">Cloud Security & DevSecOps</strong> pipelines, auditing Docker environments, and automated lint filters.</span>
          </div>
        </div>

        <div className="pt-2 flex items-center">
          <span className="text-accent mr-1.5">bijesh@kumar:~$</span>
          <span className="text-white">git status</span>
          <span className={`ml-1.5 w-1.5 h-3.5 bg-accent ${blink ? "opacity-100" : "opacity-0"}`} />
        </div>
      </div>
    </Card>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="experience" 
      ref={ref} 
      className="py-32 relative overflow-hidden bg-muted/15 border-t border-white/5"
    >
      {/* Visual glowing point */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-accent/4 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-[10px] font-black uppercase tracking-wider mb-4"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Work Experience
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 tracking-tight">
              Work & <span className="gradient-text">Experience</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-sans font-medium">
              My professional work history, coding projects, and daily development tasks.
            </p>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Experience Timeline (7/12 Cols) */}
            <div className="lg:col-span-7 space-y-12">
              <h3 className="text-3xl font-display font-black text-left flex items-center gap-3">
                <span className="w-1.5 h-7 bg-accent rounded-full shadow-glow-sm" />
                Work History
              </h3>

              <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-14 text-left">
                {experiences.map((exp, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: index * 0.2 }}
                      className="relative group"
                    >
                      {/* Interactive glowing vertical dots */}
                      <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-[11px] h-[11px] rounded-full bg-black border border-white/20 z-10 group-hover:scale-125 transition-transform">
                        <span className="absolute inset-0 rounded-full bg-accent scale-50 group-hover:scale-100 transition-all duration-300" />
                      </span>

                      <div className="space-y-4">
                        {/* Meta header strip */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                          <div>
                            <h4 className="text-2xl font-display font-black text-foreground group-hover:text-accent transition-colors leading-tight">
                              {exp.role}
                            </h4>
                            <p className="text-sm font-black text-foreground/80 font-sans tracking-wide leading-tight mt-0.5">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 items-center">
                            <Badge variant="outline" className="border-white/10 bg-white/5 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full text-foreground/80 font-bold shrink-0">
                              {exp.duration}
                            </Badge>
                            <span className="text-[9px] uppercase tracking-widest text-muted-foreground/60 font-bold shrink-0">{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground font-sans text-sm leading-relaxed font-medium">
                          {exp.description}
                        </p>

                        {/* Bullet achievements list */}
                        <div className="space-y-2 border-l border-white/5 pl-4 mt-4">
                          {exp.accomplishments.map((bullet, bulletIdx) => (
                            <div key={bulletIdx} className="flex items-start gap-2.5 text-xs font-semibold text-foreground/75 leading-relaxed font-sans">
                              <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>

                        {/* Skill pills */}
                        <div className="flex flex-wrap gap-1.5 pt-3">
                          {exp.skills.map((skill, skillIdx) => (
                            <Badge 
                              key={skillIdx} 
                              variant="secondary" 
                              className="bg-white/5 border border-white/10 text-white font-bold text-[9px] tracking-wider px-2 py-0.5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {/* Credentials Link */}
                        {exp.link && (
                          <div className="pt-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-xs text-accent hover:text-white p-0 hover:bg-transparent font-bold flex items-center gap-1.5"
                              asChild
                            >
                              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                <span>{exp.linkText || "Verify Experience"}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Stacked activity cards (5/12 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8 w-full mt-10 lg:mt-0">
              <h3 className="text-3xl font-display font-black text-left flex items-center gap-3">
                <span className="w-1.5 h-7 bg-accent rounded-full shadow-glow-sm" />
                Current Activity
              </h3>

              {/* GitHub contribution matrix card */}
              <GitHubActivityGrid />

              {/* Currently Working On terminal UI card */}
              <CurrentlyWorkingTerminal />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
