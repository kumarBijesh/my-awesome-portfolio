import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden bg-muted/20">
      {/* Decorative background grid */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl px-1">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Featured <span className="gradient-text">Work</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A selection of my most challenging and impactful cybersecurity and development projects.
              </p>
            </div>
            <div className="hidden md:block pb-2">
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-bold tracking-widest uppercase">
                {projects.length} Total Projects
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-md border border-white/10 rounded-[2rem] transition-all duration-500 hover:shadow-glow hover:-translate-y-2 flex flex-col">
                  {/* Card Header/Icon Area */}
                  <div className="relative h-64 bg-muted/30 overflow-hidden flex items-center justify-center border-b border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent group-hover:scale-110 transition-transform duration-700" />

                    {/* Animated grid lines behind icon */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,hsl(var(--accent))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent))_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="relative z-10 w-24 h-24 rounded-3xl bg-background/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl group-hover:shadow-accent/40 transition-all duration-500"
                    >
                      <project.icon className="w-12 h-12 text-accent" />
                    </motion.div>

                    {/* Date Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                      {project.date}
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-accent/5 text-accent border-accent/20 text-[10px] font-bold tracking-wider px-3"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-1 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full rounded-2xl border-white/10 bg-white/5 group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-500 py-6"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span className="font-bold">Explore Project</span>
                        <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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