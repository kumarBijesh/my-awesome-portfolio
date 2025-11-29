import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Trophy } from "lucide-react";

const achievements = [
  {
    title: "Publication in Cybersecurity Journal",
    description:
      "Published a research paper on advanced penetration testing techniques in a reputed cybersecurity journal, contributing to the academic community and sharing knowledge with peers.",
    link: "https://ijsrem.com/download/threatxray-a-dual-layered-approach-for-advanced-steganographic-and-metadata-based-threat-detection/",
    icon: Award,
  },
  {
    title: "Runner-up in Hackers Prey CTF 2024",
    description:
      "Secured the runner-up position in a Capture The Flag (CTF) competition organized by Hackers Prey at our college in 2024, where we developed a security solution tailored for financial institutions.",
    teamSize: "3 members",
    icon: Trophy,
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
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
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group p-8 hover:shadow-glow transition-all duration-300 border-border/50 hover:border-accent/50 bg-gradient-to-br from-card to-card/50">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-accent/10 rounded-lg flex-shrink-0">
                      <achievement.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-foreground/80 mb-4">{achievement.description}</p>
                      {achievement.teamSize && (
                        <p className="text-sm font-semibold text-accent mb-4">
                          Team Size: {achievement.teamSize}
                        </p>
                      )}
                      {achievement.link && (
                        <Button
                          variant="gradient"
                          size="sm"
                          className="group/btn"
                          asChild
                        >
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Check Out Achievement
                            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      )}
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

export default AchievementsSection;