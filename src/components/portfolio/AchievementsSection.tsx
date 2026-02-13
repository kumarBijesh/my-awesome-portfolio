import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      className="py-32 bg-muted/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Core <span className="gradient-text">Milestones</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid gap-10">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <Card className="group relative overflow-hidden bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-accent/40 transition-all duration-500">
                  {/* Background decoration */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors" />

                  <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 relative z-10">
                    <div className="w-20 h-20 rounded-3xl bg-accent text-black flex items-center justify-center shadow-glow-sm shrink-0 group-hover:rotate-6 transition-transform duration-500">
                      <achievement.icon className="w-10 h-10" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-accent border-accent/30 bg-accent/5 text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                          {achievement.title.includes("Journal") ? "Academic" : "Competition"}
                        </Badge>
                        {achievement.teamSize && (
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                            {achievement.teamSize}
                          </div>
                        )}
                      </div>

                      <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 group-hover:text-accent transition-colors leading-tight">
                        {achievement.title}
                      </h3>

                      <p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-3xl">
                        {achievement.description}
                      </p>

                      {achievement.link && (
                        <Button
                          variant="gradient"
                          size="lg"
                          className="rounded-xl px-8"
                          asChild
                        >
                          <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                            <span className="font-bold">Review Publication</span>
                            <ExternalLink className="w-5 h-5 ml-2" />
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