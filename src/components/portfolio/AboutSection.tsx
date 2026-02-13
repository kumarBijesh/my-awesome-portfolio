import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, FolderGit2, Award, Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skills = {
  technical: [
    { name: "Cyber Security & Ethical Hacking", value: 92 },
    { name: "Web Application Development", value: 85 },
    { name: "Python, C++", value: 88 },
    { name: "Networking & Linux", value: 80 },
    { name: "React & TypeScript", value: 75 },
  ],
  professional: ["Problem Solving", "Team Leadership", "Communication", "Project Management"],
  tools: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "Git", "VS Code"],
  platforms: ["TryHackMe", "picoCTF", "LeetCode", "Kaggle", "HackTheBox"],
};

const stats = [
  { icon: Briefcase, number: "0-1", label: "Years Experience" },
  { icon: FolderGit2, number: "10+", label: "Projects Completed" },
  { icon: Award, number: "15+", label: "Certificates" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Bridging the gap between complex cybersecurity challenges and elegant web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Story Card - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="md:col-span-8 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-soft hover:border-accent/30 transition-all group"
            >
              <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                  <Briefcase className="w-5 h-5" />
                </span>
                My Journey
              </h3>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  I'm a cybersecurity enthusiast and developer currently pursuing my Master of
                  Computer Applications at <span className="text-foreground font-semibold">Lovely Professional University</span>. My fascination with digital defense began when I realized how technology deeply shapes our security and privacy.
                </p>
                <p>
                  With a <span className="text-accent font-bold">7.6 CGPA</span> and a relentless drive for excellence, I've spent the last few years mastering the art of identifying vulnerabilities while building robust, user-centric web platforms. I believe that security isn't just a layer—it's the foundation of every successful product.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-white/5">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">{stat.number}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills - Medium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-soft"
            >
              <h3 className="text-2xl font-display font-bold mb-8 text-accent">Technical Core</h3>
              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-accent">{skill.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.value}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-accent relative"
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools Bento - Small */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-card/60 transition-colors"
            >
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-bold">Toolkit</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/5 hover:bg-accent/20 border-white/10 transition-all py-1.5 px-3">
                    {tool}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Platforms Bento - Small */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="md:col-span-4 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-card/60 transition-colors"
            >
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-bold">Battlegrounds</h4>
              <div className="flex flex-wrap gap-2">
                {skills.platforms.map((platform, index) => (
                  <Badge key={index} variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 transition-all py-1.5 px-3">
                    {platform}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Professional Skills Bento - Small */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="md:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                <h4 className="text-sm uppercase tracking-widest opacity-70 mb-6 font-bold">Soft Power</h4>
                <div className="space-y-2">
                  {skills.professional.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 font-bold text-lg">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                <Award className="w-40 h-40" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;