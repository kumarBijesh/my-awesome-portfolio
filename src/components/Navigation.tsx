import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#internships", label: "Internships" },
  { href: "#certificates", label: "Certificates" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        className={`fixed top-8 left-1/2 z-50 transition-all duration-500 ${scrolled ? "scale-95" : "scale-100"
          }`}
      >
        <div className="flex items-center gap-6 bg-background/40 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-white/20">
          {/* Logo Section */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-black shadow-glow-sm transition-transform group-hover:rotate-12">
              <Code className="w-4 h-4" />
            </div>
            <span className="gradient-text font-display font-black tracking-tighter text-lg hidden sm:block">Bijesh</span>
          </a>

          {/* Vertical Separator */}
          <div className="w-[1px] h-6 bg-white/10 hidden md:block" />

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
                className={`text-[10px] font-bold uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all duration-300 ${activeSection === link.href.substring(1)
                    ? "text-accent bg-accent/10"
                    : "text-foreground/50 hover:text-foreground"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions & Mobile Trigger Section */}
          <div className="flex items-center gap-3">
            <div className="w-[1px] h-6 bg-white/10" />
            <ThemeToggle />
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full border border-white/10"
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