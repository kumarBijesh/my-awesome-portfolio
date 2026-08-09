import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle,
  FileCheck,
  Zap
} from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  id?: string;
  verifyLink: string;
  category: "cybersecurity" | "development" | "data";
  skills: string[];
  logo: React.ComponentType<any> | string; // SVG renderer or component
}

// Custom Google Logo SVG
const GoogleLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

// Custom Meta Logo SVG
const MetaLogo = () => (
  <svg className="w-8 h-8 text-[#0064E0] filter drop-shadow-[0_0_8px_rgba(0,100,224,0.4)]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.944 5.344c-1.396 0-2.72.63-3.606 1.704a5.16 5.16 0 00-3.606-1.704C6.88 5.344 4.5 7.781 4.5 10.783c0 3.003 2.38 5.439 5.232 5.439 1.396 0 2.72-.63 3.606-1.704.887 1.074 2.21 1.704 3.606 1.704 2.851 0 5.232-2.436 5.232-5.439 0-3.002-2.381-5.439-5.232-5.439zm0 8.783c-1.776 0-3.232-1.503-3.232-3.344 0-1.841 1.456-3.344 3.232-3.344 1.777 0 3.232 1.503 3.232 3.344 0 1.841-1.455 3.344-3.232 3.344zm-7.212 0c-1.776 0-3.232-1.503-3.232-3.344 0-1.841 1.456-3.344 3.232-3.344 1.776 0 3.232 1.503 3.232 3.344 0 1.841-1.456 3.344-3.232 3.344z" />
  </svg>
);

// Custom TryHackMe Logo SVG
const TryHackMeLogo = () => (
  <svg className="w-8 h-8 text-[#FF1E27] filter drop-shadow-[0_0_8px_rgba(255,30,39,0.4)]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
  </svg>
);

const primaryCertificates: Certificate[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "2024",
    id: "J3H9Z4G8Q2W5",
    verifyLink: "https://coursera.org/verify/professional-cert/J3H9Z4G8Q2W5",
    category: "cybersecurity",
    skills: ["SIEM Systems", "Intrusion Detection", "Linux Commands", "Python Scripting", "Packet Decodes"],
    logo: GoogleLogo
  },
  {
    title: "Meta React Basics Certificate",
    issuer: "Meta",
    date: "2023",
    id: "REACT49F8Q12",
    verifyLink: "https://coursera.org/verify/REACT49F8Q12",
    category: "development",
    skills: ["React Core Components", "Virtual DOM Props", "State Hooks", "CSS Modules", "JSX Semantics"],
    logo: MetaLogo
  },
  {
    title: "Cybersecurity 101 Certificate",
    issuer: "TryHackMe",
    date: "2023",
    id: "THM-101-SECURE",
    verifyLink: "https://tryhackme.com/p/kumarBijesh",
    category: "cybersecurity",
    skills: ["Vulnerability Assessment", "Web Penetration Basics", "Network Scanning", "Cryptography Decryptions"],
    logo: TryHackMeLogo
  }
];

const secondaryCertificates = [
  { title: "Pre Security Path", issuer: "TryHackMe", year: "2023" },
  { title: "IBM Full Stack Software Developer", issuer: "IBM / Coursera", year: "2024" },
  { title: "Data Warehouse Specialist", issuer: "IBM", year: "2024" }
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certificates"
      ref={ref}
      className="py-32 bg-background relative overflow-hidden border-t border-white/5"
    >
      {/* Dynamic neon grids */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-accent/4 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-indigo-500/4 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "7s" }} />

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
              <Award className="w-3.5 h-3.5" />
              Academic & Security Credentials
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 tracking-tight">
              Certifications & <span className="gradient-text">Badges</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-sans font-medium">
              Industry-validated security training, full-stack software paths, and low-level competencies.
            </p>
          </div>

          {/* Primary Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {primaryCertificates.map((cert, index) => {
              const Logo = cert.logo as React.ComponentType;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <Card className="group relative h-full flex flex-col justify-between overflow-hidden bg-card/45 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 hover:border-accent/40 hover:scale-[1.02] transition-all duration-500 shadow-soft">
                    {/* Glowing card aura */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                    
                    <div className="space-y-6 text-left">
                      {/* Logo and meta */}
                      <div className="flex justify-between items-start">
                        <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <Logo />
                        </div>
                        <Badge variant="outline" className="border-white/10 text-[9px] uppercase tracking-wider text-muted-foreground font-black px-2 py-0.5 rounded-full">
                          {cert.issuer} • {cert.date}
                        </Badge>
                      </div>

                      {/* Title block */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-display font-black leading-tight group-hover:text-accent transition-colors">
                          {cert.title}
                        </h3>
                        {cert.id && (
                          <p className="text-[9px] text-muted-foreground/60 tracking-widest font-mono font-black uppercase">
                            Verify ID: {cert.id}
                          </p>
                        )}
                      </div>

                      {/* Divider */}
                      <div className="h-[1px] w-full bg-white/5" />

                      {/* Verified Skills list */}
                      <div className="space-y-2">
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-black flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-accent" /> Verified Skills
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill, skillIdx) => (
                            <Badge 
                              key={skillIdx} 
                              variant="secondary" 
                              className="bg-white/5 border border-transparent hover:border-white/10 text-[8.5px] text-foreground/80 font-bold px-2 py-0.5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Verify CTA */}
                    <div className="pt-8">
                      <Button
                        variant="outline"
                        size="md"
                        className="w-full rounded-xl py-5.5 border-white/10 hover:border-accent hover:text-accent bg-transparent text-xs font-bold uppercase tracking-wider group/btn"
                        asChild
                      >
                        <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                          <span>Secure Handshake</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover/btn:rotate-12 transition-transform" />
                        </a>
                      </Button>
                    </div>

                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Secondary Badges Timeline Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3.5 text-left shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-foreground uppercase tracking-wider font-sans leading-none">Additional Certifications</h4>
                <p className="text-[10px] text-muted-foreground font-sans mt-0.5 leading-none">Secondary validated study paths</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {secondaryCertificates.map((sec, secIdx) => (
                <div 
                  key={secIdx}
                  className="px-4.5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-colors flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  <div className="text-left font-sans text-xs">
                    <span className="font-bold text-foreground/90">{sec.title}</span>
                    <span className="text-muted-foreground font-medium text-[10px] uppercase ml-1.5">({sec.issuer}, {sec.year})</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;