import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Briefcase, 
  Terminal, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  GraduationCap
} from "lucide-react";

const stats = [
  {
    value: "2+",
    label: "Years Experience",
    description: "Full Stack & Security Audits",
    icon: Briefcase,
    color: "text-accent border-accent/20 bg-accent/5"
  },
  {
    value: "15+",
    label: "Projects Completed",
    description: "Deployed SaaS & AI Toolkits",
    icon: Terminal,
    color: "text-indigo-400 border-indigo-500/25 bg-indigo-500/5"
  },
  {
    value: "25+",
    label: "Technologies",
    description: "Languages, Libraries & Databases",
    icon: ShieldCheck,
    color: "text-emerald-400 border-emerald-500/25 bg-emerald-500/5"
  },
  {
    value: "6+",
    label: "Certifications",
    description: "Google, Meta & TryHackMe Certified",
    icon: Award,
    color: "text-amber-400 border-amber-500/25 bg-amber-500/5"
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleScrollToNext = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 bg-muted/10 relative overflow-hidden border-t border-white/5"
    >
      {/* Background glow points */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-[10px] font-black uppercase tracking-wider mb-4"
          >
            <User className="w-3.5 h-3.5" />
            Profile Summary
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Bridging the gap between robust frontend design, full-stack scalability, and industry-grade network defenses.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story Dossier (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-black flex items-center gap-3">
                <span className="w-1.5 h-7 bg-accent rounded-full shadow-glow-sm" />
                Professional Dossier
              </h3>
              
              <p className="text-foreground/80 font-sans text-base sm:text-lg leading-relaxed font-medium">
                I am a dedicated <strong className="text-white">Full Stack Software Developer</strong> with a specialized focus on <strong className="text-white">Cybersecurity & Resilient Systems</strong>. Pursuing my Master of Computer Applications (MCA) at <strong className="text-accent">Lovely Professional University</strong>, I have cultivated a robust foundation in computer science principles, database architectures, and engineering best practices.
              </p>
              
              <p className="text-foreground/80 font-sans text-base leading-relaxed font-medium">
                My professional experience is highlighted by my time at <strong className="text-white">MusB Research</strong>, where I spearheaded secure API integrations, optimized complex patient-screening logic (saving 20% database load), and hardened platform architectures against malicious input injections.
              </p>

              <p className="text-foreground/85 font-sans text-base leading-relaxed font-medium">
                I approach software development with a security-first methodology—fusing high-performance React frontend architectures with resilient Node/Express backends, and validating every deployment pipeline against potential vulnerability vectors.
              </p>
            </div>

            {/* Academic pill block */}
            <div className="p-6 bg-card/45 backdrop-blur-md border border-white/5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-black tracking-widest leading-none">Education</p>
                  <p className="text-sm font-black text-foreground mt-1">LPU • Master of Computer Applications</p>
                </div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase text-accent tracking-wider shadow-sm shrink-0">
                Grade: 7.6 CGPA
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <Button
                variant="gradient"
                size="lg"
                onClick={handleScrollToNext}
                className="rounded-full px-8 py-6.5 font-bold text-xs uppercase tracking-wider group shadow-soft"
              >
                <span>Know More About Me</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Bento Stats Cards (5 cols) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-5 w-full">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="group relative overflow-hidden bg-card/45 backdrop-blur-md border border-white/5 p-6 rounded-[2rem] hover:border-accent/30 hover:scale-[1.02] transition-all duration-500 shadow-soft">
                    {/* Glow backdrop inside cards */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />

                    <div className="flex flex-col h-full justify-between gap-6">
                      <div className="flex justify-between items-center">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${stat.color} shadow-sm group-hover:scale-105 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <h4 className="text-4xl sm:text-5xl font-display font-black tracking-tight group-hover:text-accent transition-colors leading-none">
                          {stat.value}
                        </h4>
                        <p className="text-sm font-black text-foreground/90 tracking-wide font-sans">{stat.label}</p>
                        <p className="text-xs text-muted-foreground font-sans leading-relaxed font-medium">{stat.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;