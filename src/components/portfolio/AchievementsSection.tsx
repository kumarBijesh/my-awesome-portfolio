import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Trophy, Bookmark } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  link?: string;
  tag: string;
  teamSize?: string;
  icon: React.ComponentType<any>;
  metric?: string;
}

const achievements: Achievement[] = [
  {
    title: "Threat Research Paper Publication",
    description: "Published a research paper titled 'ThreatXray: A Dual-Layered Approach for Advanced Steganographic and Metadata-Based Threat Detection' in the IJSREM journal, explaining security scanning methods.",
    link: "https://ijsrem.com/download/threatxray-a-dual-layered-approach-for-advanced-steganographic-and-metadata-based-threat-detection/",
    tag: "Research Paper",
    icon: Award,
    metric: "Approved"
  },
  {
    title: "Runner-up in Hackers Prey CTF Competition",
    description: "Won 2nd place in the Capture The Flag (CTF) cybersecurity competition by Hackers Prey, solving web application security and cryptography challenges.",
    tag: "Security Competition",
    teamSize: "Team of 3",
    icon: Trophy,
    metric: "2nd Place"
  }
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
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-accent/4 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-4"
            >
              <Bookmark className="w-3.5 h-3.5" />
              Achievements
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 tracking-tight animate-pulse" style={{ animationDuration: "4s" }}>
              Key <span className="gradient-text">Achievements</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A list of awards, research publications, and competition wins.
            </p>
          </div>

          {/* Timelines Cards */}
          <div className="space-y-10">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <Card className="group relative overflow-hidden bg-card/45 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 hover:border-accent/45 transition-all duration-500 shadow-soft hover:shadow-strong">
                    
                    {/* Glowing Accent Corner */}
                    <div className="absolute -right-16 -top-16 w-48 h-48 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/10 transition-colors duration-500 -z-10" />

                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-accent text-black flex items-center justify-center shadow-glow-sm shrink-0 group-hover:rotate-3 transition-transform duration-500">
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Content details */}
                      <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <Badge variant="outline" className="text-accent border-accent/30 bg-accent/5 text-[9px] uppercase tracking-widest px-3 py-1 font-black rounded-full">
                              {item.tag}
                            </Badge>
                            
                            {item.teamSize && (
                              <span className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                {item.teamSize}
                              </span>
                            )}
                            
                            {item.metric && (
                              <Badge className="bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                                {item.metric}
                              </Badge>
                            )}
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-display font-black leading-tight group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-foreground/75 font-sans text-base leading-relaxed font-medium">
                          {item.description}
                        </p>

                        {item.link && (
                          <div className="pt-2">
                            <Button
                              variant="gradient"
                              size="lg"
                              className="rounded-xl px-7 font-bold text-sm"
                              asChild
                            >
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <span>Read Research Paper</span>
                                <ExternalLink className="w-4.5 h-4.5 ml-2" />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;