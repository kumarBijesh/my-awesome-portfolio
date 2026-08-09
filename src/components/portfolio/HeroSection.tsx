import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDownRight, 
  Lock,
  Code2,
  Shield,
  Puzzle,
  Terminal,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { useState, useEffect } from "react";

const titles = [
  "Full Stack Developer",
  "Cybersecurity Enthusiast",
  "DevSecOps Architect"
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
          if (displayText === currentTitle) {
            setTimeout(() => setIsDeleting(true), 2500);
          }
        } else {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background"
    >
      {/* Cinematic grid background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 pointer-events-none -z-10" />
      
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "6s" }} />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center mt-6 lg:mt-0">
          
          {/* Left Column: Headline Copy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              {/* Dynamic Badge */}
              <div className="flex justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-wider shadow-sm backdrop-blur-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Ready to Build Safe & Fast Websites
                </motion.div>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black leading-[1.05] tracking-tighter">
                Hi, I'm <br className="hidden md:inline" />
                <span className="gradient-text font-black">Bijesh Kumar</span>
              </h1>

              {/* Typing Subtitle */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-bold text-foreground/80 font-sans tracking-wide">
                  {displayText}
                </span>
                <span className="w-1.5 h-6 bg-accent ml-1.5 animate-pulse inline-block" />
              </div>

              {/* Pitch Paragraph */}
              <p className="text-muted-foreground text-lg sm:text-xl font-sans font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I am a passionate <strong className="text-foreground">Full Stack Developer</strong> and <strong className="text-foreground">Cybersecurity Learner</strong>. I focus on building fast, secure websites and web applications with clean code and easy-to-use designs.
              </p>
            </div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Projects CTA */}
              <Button
                variant="gradient"
                size="xl"
                className="w-full sm:w-auto rounded-full px-8 py-7 font-bold text-sm uppercase tracking-wider shadow-strong group"
                onClick={() => scrollToSection("projects")}
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4.5 h-4.5 ml-2.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </Button>

              {/* Resume CTA */}
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto rounded-full px-8 py-7 font-bold text-sm uppercase tracking-wider border-white/10 hover:border-accent hover:text-accent bg-black/30 backdrop-blur-md transition-all group"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1ameIuaRKl6OxEFYLhUrdqHMoe_aGey35/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4.5 h-4.5 mr-2.5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>

              {/* Contact trigger */}
              <Button
                variant="ghost"
                size="xl"
                className="w-full sm:w-auto rounded-full px-8 py-7 font-bold text-sm uppercase tracking-wider hover:text-accent text-foreground/80 hover:bg-white/5 transition-all"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Grid block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-5"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                Connect Directly:
              </span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/kumarBijesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/bijesh-kumar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:b.k.lpuinsta@gmail.com"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Glowing Avatar + Floating Tech Badges (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Spinning cyber rings backdrop */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-accent/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-indigo-500/10 animate-[spin_60s_linear_infinite_reverse]" />
            
            {/* Decorative colored glow meshes */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-accent/20 to-indigo-500/10 blur-3xl pointer-events-none -z-10" />

            <div className="relative w-[300px] h-[300px] sm:w-[330px] sm:h-[330px] group">
              {/* Neon border circle container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-indigo-500 to-accent/40 p-[2px] shadow-glow transition-all duration-500 group-hover:scale-105">
                {/* Inside mask */}
                <div className="w-full h-full rounded-full bg-background overflow-hidden relative">
                  {/* Hexagon tech overlay grids */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none opacity-40 z-10" />
                  
                  {/* Developer Image */}
                  <img
                    src="/images/new image.jpg"
                    alt="Bijesh Kumar Portrait"
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 select-none"
                    onError={(e) => {
                      // Fallback if image isn't available
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80";
                    }}
                  />
                  
                  {/* Gradient bottom shadow for realism */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/40 to-transparent z-10 opacity-70" />
                </div>
              </div>

              {/* FLOATING BADGE 1: Top-Left (Full Stack Developer) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-8 bg-card/90 backdrop-blur-md border border-border/80 px-4 py-3 rounded-2xl shadow-soft flex items-center gap-3 hover:border-accent/40 transition-colors z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-left font-sans text-xs font-semibold leading-tight text-foreground">
                  Full Stack<br />Developer
                </div>
              </motion.div>

              {/* FLOATING BADGE 2: Top-Right (Cybersecurity Learner) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-12 bg-card/90 backdrop-blur-md border border-border/80 px-4 py-3 rounded-2xl shadow-soft flex items-center gap-3 hover:border-accent/40 transition-colors z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/25 text-accent flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left font-sans text-xs font-semibold leading-tight text-foreground">
                  Cybersecurity<br />Learner
                </div>
              </motion.div>

              {/* FLOATING BADGE 3: Bottom-Left (Problem Solver) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-12 bg-card/90 backdrop-blur-md border border-border/80 px-4 py-3 rounded-2xl shadow-soft flex items-center gap-3 hover:border-accent/40 transition-colors z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-500 flex items-center justify-center shrink-0">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div className="text-left font-sans text-xs font-semibold leading-tight text-foreground">
                  Problem<br />Solver
                </div>
              </motion.div>

              {/* FLOATING BADGE 4: Bottom-Right (Clean Code) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-2 -right-8 bg-card/90 backdrop-blur-md border border-border/80 px-4 py-3 rounded-2xl shadow-soft flex items-center gap-3 hover:border-accent/40 transition-colors z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="text-left font-sans text-xs font-semibold leading-tight text-foreground">
                  Clean<br />Code
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Discover more Scroll Trigger Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer hidden md:flex"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground font-black">Scroll Down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;