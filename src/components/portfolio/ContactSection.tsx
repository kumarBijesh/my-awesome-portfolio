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
    <section id="contact" ref={ref} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Contact & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-bold text-accent mb-6">Get In Touch</h3>
              <p className="text-lg text-foreground/80 mb-8">
                I'm currently available for freelance work and full-time positions. Feel free to
                reach out via email or phone for collaboration, project inquiries, or just to
                connect!
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-muted-foreground mb-4">Connect with me on</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:bg-accent/10 hover:border-accent"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Education Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-lg p-8 border-l-4 border-accent shadow-soft"
            >
              <h4 className="text-2xl font-display font-bold text-accent mb-6">
                Education Details
              </h4>
              <div className="space-y-4">
                {educationDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className={`pb-4 ${
                      index < educationDetails.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                    <p className="font-semibold">{detail.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-20 pt-8 border-t border-border text-center"
      >
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bijesh Kumar. All Rights Reserved.
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;