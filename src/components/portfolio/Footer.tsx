import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUp, 
  Download
} from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/kumarBijesh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bijesh-kumar/" },
  { icon: Mail, label: "Email", href: "mailto:b.k.lpuinsta@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+918789774242" }
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certificates" },
  { label: "Contact", href: "#contact" }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black/60 backdrop-blur-md border-t border-white/5 py-12">
      {/* Visual top border reflection */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center shadow-glow-sm transition-transform group-hover:rotate-6 duration-300">
                <img src="/images/logo.png" alt="BK Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <span className="gradient-text font-display font-black tracking-tighter text-xl">
                BIJESH KUMAR
              </span>
            </a>
            <p className="text-xs text-muted-foreground font-sans font-medium text-center md:text-left max-w-xs">
              Full Stack Developer & Cybersecurity Learner based in Patna, Bihar.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Social presence */}
            <div className="flex items-center gap-3">
              {socialLinks.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-primary/5 border border-border text-foreground/80 hover:text-accent hover:border-accent/40 transition-all duration-300"
                  aria-label={soc.label}
                >
                  <soc.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>

            {/* Back to top button */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full w-11 h-11 border-border bg-primary/5 hover:border-accent hover:text-accent transition-all duration-300 shadow-soft group"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4.5 h-4.5 transition-transform group-hover:-translate-y-0.5" />
            </Button>
          </div>

        </div>

        {/* Lower Meta Credits bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
          <p>© {new Date().getFullYear()} Bijesh Kumar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://drive.google.com/file/d/1ameIuaRKl6OxEFYLhUrdqHMoe_aGey35/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent flex items-center gap-1.5 transition-colors font-bold uppercase tracking-wider text-[10px]"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
