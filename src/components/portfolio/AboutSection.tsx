import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, FolderGit2, Award, Check } from "lucide-react";

const skills = {
  technical: [
    "Cyber Security & Ethical Hacking",
    "Web Application Development",
    "Python, Java",
    "Software Testing",
  ],
  professional: ["Problem Solving", "Team Leadership", "Communication"],
  tools: ["Nmap", "Wireshark", "Selenium", "Jupyter Notebook"],
  platforms: ["TryHackMe", "picoCTF", "LeetCode", "Kaggle"],
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
      className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 text-lg text-foreground/80">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                I'm a cybersecurity enthusiast and developer currently pursuing my Master of
                Computer Applications at Lovely Professional University, where I've maintained a
                7.6 CGPA. My journey in technology began in 2023, driven by a keen interest in
                securing systems and understanding how technology shapes the world.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Over time, I've built expertise across cybersecurity and web development. I've
                worked on a variety of projects — from building data layers and scalable web
                platforms to exploring the intersection of AI and security. I love staying up to
                date with emerging technologies and continuously seek out opportunities to learn,
                experiment, and turn complex problems into secure, efficient solutions.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 text-center border border-border hover:border-accent transition-all hover:shadow-glow"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                    <div className="text-3xl font-display font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-lg p-6 border-l-4 border-accent shadow-soft"
              >
                <h4 className="text-xl font-display text-accent mb-4">Technical Skills</h4>
                <ul className="space-y-3">
                  {skills.technical.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-lg p-6 border-l-4 border-accent shadow-soft"
              >
                <h4 className="text-xl font-display text-accent mb-4">Professional Skills</h4>
                <ul className="space-y-3">
                  {skills.professional.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-card rounded-lg p-6 border-l-4 border-accent shadow-soft"
              >
                <h4 className="text-xl font-display text-accent mb-4">Tools</h4>
                <ul className="space-y-3">
                  {skills.tools.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="bg-card rounded-lg p-6 border-l-4 border-accent shadow-soft"
              >
                <h4 className="text-xl font-display text-accent mb-4">Practice Platforms</h4>
                <ul className="space-y-3">
                  {skills.platforms.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;