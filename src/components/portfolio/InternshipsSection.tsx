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
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid gap-12">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-0 shadow-soft hover:shadow-strong transition-all duration-500">
                  <div className="grid md:grid-cols-[280px_1fr] h-full">
                    {/* Role Sidebar */}
                    <div className="bg-muted/30 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between group-hover:bg-accent/5 transition-colors">
                      <div>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                          <Building2 className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                          {internship.company}
                        </h3>
                        <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-bold tracking-[0.1em] uppercase inline-block">
                          Cybersecurity
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Timeline</p>
                        <p className="text-sm font-semibold">{internship.date}</p>
                      </div>
                    </div>

                    {/* Description Area */}
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div className="mb-10">
                        <h4 className="text-3xl font-display font-bold mb-6 leading-tight">
                          {internship.title}
                        </h4>
                        <p className="text-foreground/70 text-lg leading-relaxed italic">
                          "{internship.description}"
                        </p>
                      </div>

                      <Button
                        variant="gradient"
                        size="xl"
                        className="w-full md:w-fit rounded-2xl px-10 group/btn"
                        asChild
                      >
                        <a href={internship.certificateLink} target="_blank" rel="noopener noreferrer">
                          <span className="font-bold">Credential Details</span>
                          <ExternalLink className="w-5 h-5 ml-2 group-hover/btn:rotate-12 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
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