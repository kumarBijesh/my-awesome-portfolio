import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  ShieldAlert, 
  Wrench, 
  Lock, 
  CheckCircle2 
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity",
    icon: ShieldAlert,
    description: "Network security, web security checks, and testing system safety.",
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Network Security",
      "OWASP Top 10",
      "Cryptography",
      "Nmap & Wireshark",
      "Burp Suite & Metasploit",
      "Linux Forensics"
    ],
    color: "from-red-500/20 to-orange-500/20 border-red-500/30 text-red-400"
  },
  {
    title: "Frontend Engineering",
    icon: Code2,
    description: "Building fast, responsive, and easy-to-use user interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "HTML5 / Semantic CSS",
      "State Management",
      "Responsive Layouts"
    ],
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400"
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Building fast, safe, and reliable server APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "RESTful APIs",
      "Auth Pipelines (JWT/OTP)",
      "Middleware Audits",
      "Secure Input Validation"
    ],
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400"
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description: "Managing databases, writing queries, and storing data efficiently.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Query Optimization",
      "Schema Design",
      "Data Normalization",
      "Redis Caching"
    ],
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Publishing web apps to cloud platforms with automated tools.",
    skills: [
      "AWS Services",
      "Docker Containers",
      "Git & GitHub",
      "CI / CD Actions",
      "Vercel & Netlify",
      "Render Cloud",
      "Linux Administration",
      "SSL/TLS Config"
    ],
    color: "from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-400"
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    description: "Software tools and utilities I use every day to write code.",
    skills: [
      "VS Code & Vim",
      "Postman API client",
      "Figma",
      "Git Bash / Zsh",
      "ESLint & Prettier",
      "Yarn / NPM / Bun",
      "Jira / Agile Boards",
      "Chrome DevTools"
    ],
    color: "from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400"
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-32 relative overflow-hidden bg-background"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-4"
            >
              <Lock className="w-3.5 h-3.5" />
              My Skills
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-black mb-6 tracking-tight"
            >
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              A clear breakdown of programming languages, frameworks, databases, and tools I work with.
            </motion.p>
          </div>

          {/* Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  {/* Subtle outer neon glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 rounded-[2rem] blur-xl transition-all duration-500 -z-10" />

                  <div className="h-full bg-card/60 backdrop-blur-xl border border-border/80 group-hover:border-accent/40 rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-500 shadow-soft text-left">
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color.split(" ").slice(0,2).join(" ")} border ${category.color.split(" ")[2]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                          Tech Stack
                        </div>
                      </div>

                      <h3 className="text-2xl font-display font-black mb-3 group-hover:text-accent transition-colors text-foreground">
                        {category.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-sans">
                        {category.description}
                      </p>
                    </div>

                    {/* Skill List */}
                    <div className="space-y-2 mt-auto">
                      <div className="h-[1px] w-full bg-border/60 mb-4" />
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIdx) => (
                          <div 
                            key={skillIdx}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/5 border border-border text-xs font-semibold text-foreground hover:text-accent hover:border-accent/40 transition-all duration-300"
                          >
                            <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
