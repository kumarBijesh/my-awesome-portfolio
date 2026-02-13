import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, ArrowDown, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const titles = ["Cyber Security", "Web Developer"];

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
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--accent)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for New Opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight"
              >
                <span className="block text-foreground">Bijesh</span>
                <span className="gradient-text">Kumar</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground min-h-[3rem] flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-foreground">I am a</span>
              <span className="text-accent font-semibold">{displayText}</span>
              <span className="w-1.5 h-10 bg-accent animate-blink shrink-0" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-foreground/70 max-w-2xl leading-relaxed"
            >
              Architecting secure digital landscapes and building high-performance
              web experiences. Specializing in <span className="text-foreground font-medium underline decoration-accent/30 underline-offset-4">Cybersecurity</span> and <span className="text-foreground font-medium underline decoration-accent/30 underline-offset-4">Full-stack Development</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <Button
                variant="gradient"
                size="xl"
                className="group relative px-8 py-6 text-lg overflow-hidden"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1ameIuaRKl6OxEFYLhUrdqHMoe_aGey35/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Get Resume</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </Button>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="xl" className="rounded-full w-14 h-14 p-0 group" asChild>
                  <a href="https://github.com/kumarBijesh" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest hidden sm:block">
                  Social Presence
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square group">
              {/* Animated Rings around image */}
              <div className="absolute inset-0 border-2 border-accent/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-accent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 rounded-3xl -rotate-6 transition-transform group-hover:rotate-0 duration-500" />

              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm shadow-accent/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-accent/20">
                <img
                  src="/images/new%20image.jpg"
                  alt="Bijesh Kumar"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-110"
                  loading="lazy"
                />

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-medium text-center">
                    "Securing the future, one byte at a time"
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-glow animate-bounce">
                <Shield className="text-accent-foreground w-6 h-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Discover More</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;