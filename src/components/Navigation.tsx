import { useState, useEffect } from "react";
import { Menu, X, Code, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[100] shadow-[0_0_10px_hsl(var(--accent)/0.6)]"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        className={`fixed top-6 left-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl ${scrolled ? "scale-95" : "scale-100"
          }`}
      >
        <div className="flex items-center justify-between bg-card/80 backdrop-blur-2xl border border-border/60 px-6 py-3 rounded-full shadow-soft">
          {/* Logo Section */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-primary/5 border border-border flex items-center justify-center transition-all group-hover:rotate-6 duration-300">
              <img 
                src="/images/logo.png" 
                alt="BK Logo" 
                className="w-full h-full object-cover scale-110" 
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-black tracking-tight text-base leading-none text-foreground group-hover:text-accent transition-colors">Bijesh Kumar</span>
              <span className="text-[8px] text-muted-foreground tracking-widest uppercase mt-0.5 font-bold hidden sm:block">Full Stack Developer</span>
            </div>
          </a>

          {/* Desktop Links Section */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-[10px] font-bold uppercase tracking-[0.1em] px-4 py-2.5 rounded-full transition-all duration-350 ${activeSection === link.href.substring(1)
                    ? "text-accent bg-accent/10 border border-accent/25 font-black"
                    : "text-foreground/60 border border-transparent hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions & Mobile Trigger Section */}
          <div className="flex items-center gap-3">
            <Button
              variant="gradient"
              size="sm"
              className="rounded-full font-bold text-[10px] uppercase tracking-wider px-5 py-2 hidden md:flex shadow-soft"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1ameIuaRKl6OxEFYLhUrdqHMoe_aGey35/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
            <div className="w-[1px] h-6 bg-border hidden md:block" />
            <ThemeToggle />
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full border border-border"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-4 h-4 text-accent" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-6 top-28 bottom-6 bg-background/80 backdrop-blur-2xl z-40 lg:hidden rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden"
          >
            <div className="flex flex-col h-full p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mb-8">Navigation</p>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`text-3xl font-display font-bold py-2 transition-all duration-300 ${activeSection === link.href.substring(1)
                      ? "text-accent translate-x-4"
                      : "text-foreground/40 hover:text-foreground/80 translate-x-0"
                      }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-white/5 space-y-4">
                <p className="text-xs text-muted-foreground">© 2026 BIJESH KUMAR</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;