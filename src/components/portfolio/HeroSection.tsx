import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const titles = ["Cyber Security", "Web Developer"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Snowfall is now rendered globally by a dedicated `Snowfall` component.
  

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-lg md:text-xl font-semibold mb-4"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              <span className="gradient-text">Bijesh Kumar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-6 min-h-[3rem] flex items-center justify-center lg:justify-start"
            >
              <span>{displayText}</span>
              <span className="w-0.5 h-8 bg-accent ml-1 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-foreground/80 mb-6 max-w-2xl"
            >
              I specialize in developing secure and scalable solutions for modern applications. 
              With expertise in cybersecurity, cloud infrastructure, and software development, 
              I create robust systems that protect data while delivering exceptional performance.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="border-l-4 border-accent pl-4 py-2 mb-4 italic text-muted-foreground"
            >
              "With great power comes great responsibility."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-sm text-accent mb-8"
            >
              Cybersecurity | C++ | Python | SQL | Network Security | MCA Graduate
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="gradient"
                size="lg"
                className="group"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1ameIuaRKl6OxEFYLhUrdqHMoe_aGey35/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/kumarBijesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative w-56 sm:w-64 md:w-80 lg:w-96 max-w-full">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-soft transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/new%20image.jpg"
                  alt="Bijesh Kumar"
                  className="w-full h-auto object-contain max-h-[420px]"
                  loading="lazy"
                  decoding="async"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;