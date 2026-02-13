import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "b.k.lpuinsta@gmail.com",
    href: "mailto:b.k.lpuinsta@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8789774242",
    href: "tel:+918789774242",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Patna, Bihar",
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bijesh-kumar/" },
  { icon: Github, label: "GitHub", href: "https://github.com/kumarBijesh" },
  { icon: Mail, label: "Email", href: "mailto:b.k.lpuinsta@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+918789774242" },
];

const educationDetails = [
  { label: "Name", value: "Bijesh Kumar" },
  { label: "Age", value: "24 Years" },
  { label: "College", value: "Lovely Professional University" },
  { label: "Degree", value: "Master of Computer Applications (MCA)" },
  { label: "CGPA", value: "7.6" },
  { label: "Graduation", value: "2023 - 2025" },
  {
    label: "College Address",
    value:
      "Lovely Professional University, Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India) - 144411",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden bg-muted/10">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Open for collaborations, interesting projects, or just a technical chat about cybersecurity.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-12 grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-glow-sm">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">{info.label}</p>
                    <p className="font-semibold text-lg group-hover:text-accent transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials & Education Bento */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="relative overflow-hidden group h-full flex flex-col justify-between rounded-[2.5rem] bg-[#030712] border border-white/5"
              >
                {/* Mesh Gradient Background */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-accent/20 rounded-full blur-[100px] animate-pulse" />
                  <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary/20 rounded-full blur-[100px] animate-pulse delay-700" />
                </div>

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="relative z-10 p-10">
                  <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-accent rounded-full hidden sm:block shadow-glow-sm" />
                    Digital Presence
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="w-14 h-14 rounded-2xl bg-white/[0.03] border-white/10 hover:bg-accent hover:text-black hover:border-accent transition-all duration-500 shadow-xl group/icon"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="w-6 h-6 transition-transform group-hover/icon:scale-110" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 p-10 mt-auto bg-gradient-to-t from-black/40 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80">
                      Currently based in <span className="text-accent font-bold hover:underline cursor-none">Patna, Bihar</span>
                    </p>
                  </div>
                </div>

                <div className="absolute -right-16 -bottom-16 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000">
                  <Github className="w-80 h-80" />
                </div>
              </motion.div>
            </div>

            {/* Detailed Education */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="bg-card/40 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-[2.5rem] h-full"
              >
                <h3 className="text-3xl font-display font-bold mb-10 flex items-center gap-4">
                  <div className="w-2 h-8 bg-accent rounded-full" />
                  Academic Profile
                </h3>
                <div className="grid sm:grid-cols-2 gap-y-8 gap-x-12">
                  {educationDetails.map((detail, index) => (
                    <div key={index} className={detail.label === "College Address" ? "sm:col-span-2" : ""}>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black mb-2">{detail.label}</p>
                      <p className="text-lg font-semibold leading-tight">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <div className="flex items-center gap-2 font-display font-bold tracking-tighter">
              <span className="gradient-text">BIJESH</span>
              <span>KUMAR</span>
            </div>
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} • Handcrafted with React & Framer Motion
            </p>
            <div className="flex gap-6 text-xs font-bold tracking-widest uppercase">
              <a href="#home" className="hover:text-accent transition-colors">Top</a>
              <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            </div>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;