import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Laptop, Keyboard, Newspaper } from "lucide-react";

const projects = [
  {
    title: "Threat X-Ray Dual Layer Scanning and Malware Tool",
    description:
      "Threat X-Ray helps spot hidden threats and privacy risks early on, making it easier to check files, links, and images without going through tons of manual work. It cuts down the number of files you have to review and makes security checks faster and simpler.",
    date: "Feb-May 2025",
    tags: ["Security", "Python", "SQL", "API"],
    icon: Shield,
    link: "https://github.com/kumarBijesh/ThreatXrayApp",
  },
  {
    title: "File-Recovery System App",
    description:
      "This tool is a forensic utility designed to help recover lost or deleted files. It not only restores your data but also gives you a clear view of your file system — showing the total number of files, their sizes, and file types.",
    date: "Mar-Apr 2025",
    tags: ["Python", "GUI"],
    icon: Laptop,
    link: "https://github.com/kumarBijesh/Recovery-System-Tool",
  },
  {
    title: "Key-Logger",
    description:
      "This is a keylogger tool that records all keystrokes typed on a computer. It comes with a simple graphical user interface (GUI), making it easy to use. I'm currently working on an advanced version that can start automatically.",
    date: "Nov-Dec 2024",
    tags: ["Python", "Flask", "API"],
    icon: Keyboard,
    link: "https://github.com/kumarBijesh/KEYLOGGER-GUI",
  },
  {
    title: "Fake News Detection",
    description:
      "This project is a Fake News Detection system that can predict whether a piece of news is true or fake. I built and trained a machine learning model that analyzes news content and tells us how likely it is to be real or misleading.",
    date: "Mar-May 2024",
    tags: ["Python", "Streamlit", "Machine Learning"],
    icon: Newspaper,
    link: "https://github.com/kumarBijesh/python---Projct",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden hover:shadow-glow transition-all duration-300 border-border/50 hover:border-accent/50 bg-gradient-to-br from-card to-card/50">
                  <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
                    <project.icon className="w-20 h-20 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.date}</p>
                    <p className="text-foreground/80 mb-6 line-clamp-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
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

export default ProjectsSection;