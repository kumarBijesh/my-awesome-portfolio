import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building2 } from "lucide-react";

const internships = [
  {
    title: "Cybersecurity Intern",
    company: "Elevate Labs",
    date: "23 June 2025 - 28 July 2025",
    description:
      "During my internship at Elevate Labs, I worked on various cybersecurity tasks including vulnerability assessment, penetration testing, and security analysis. I gained hands-on experience with tools like Nmap, Wireshark, and Metasploit.",
    certificateLink:
      "https://drive.google.com/file/d/15OZ1GUxBlEy0anY1aWxbF6FV-M2RE0JS/view?usp=sharing",
  },
];

const InternshipsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="internships"
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            My <span className="gradient-text">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full p-8 hover:shadow-glow transition-all duration-300 border-border/50 hover:border-accent/50 bg-gradient-to-br from-card to-card/50">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-1 group-hover:text-accent transition-colors">
                        {internship.title}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground">
                        {internship.company}
                      </p>
                      <p className="text-sm text-accent">{internship.date}</p>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-6">{internship.description}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn"
                    asChild
                  >
                    <a
                      href={internship.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipsSection;