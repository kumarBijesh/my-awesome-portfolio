import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const certificates = [
  {
    title: "Google Cybersecurity",
    issuer: "Coursera",
    description:
      "Completed Google's Cybersecurity Certificates, where I learned how to spot threats, reduce risks, and follow best practices to keep data secure.",
    link: "https://drive.google.com/file/d/1b0jW0VERAMHHT6TuwVFdsrkmwTRKVGiT/view?usp=drive_link",
    logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-v2-57x57.png",
  },
  {
    title: "Cyber Security 101",
    issuer: "TryHackMe",
    description:
      "Took TryHackMe's Cyber Security 101 course, which let me explore real-world security scenarios. I practiced finding vulnerabilities and learned about encryption.",
    link: "https://drive.google.com/file/d/1VPs2-f_q439GhNBOdM3NPT7X0lqAWD7T/view?usp=drive_link",
  },
  {
    title: "Pre Security",
    issuer: "TryHackMe",
    description:
      "I completed the Pre Security path on TryHackMe, which was a great hands-on way to learn the basics of cybersecurity. It helped me understand how networks work.",
    link: "https://drive.google.com/file/d/1QRh61DPJOlBLD-nvAqtcSHkKYG0VNFxp/view?usp=drive_link",
  },
  {
    title: "React Basics",
    issuer: "Coursera",
    description:
      "Completed the React Basics course on Coursera, where I learned how to build interactive user interfaces using React. I gained hands-on experience with components, state management, and hooks.",
    link: "https://drive.google.com/file/d/12mktMIbaWbiYxYx1YZpvT5mwUR9MgtlB/view?usp=sharing",
    logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-v2-57x57.png",
  },
  {
    title: "Data Warehouse",
    issuer: "Coursera",
    description:
      "Completed the Data Warehouse course on Coursera, where I learned how to design and implement data warehouses. I gained skills in data modeling, ETL processes, and data visualization.",
    link: "https://drive.google.com/file/d/1cWvHI5KMCQdW8zDSc5yHVVRAOi8p1Ts0/view?usp=sharing",
    logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-v2-57x57.png",
  },
  {
    title: "IBM Full Stack Software Developer",
    issuer: "Coursera",
    description:
      "Completed IBM's Full Stack Software Developer program, where I learned how to build web applications from end to end. I worked with front-end and back-end technologies.",
    link: "#",
    logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-v2-57x57.png",
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" ref={ref} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden hover:shadow-glow transition-all duration-300 border-border/50 hover:border-accent/50 bg-gradient-to-br from-card to-card/50">
                  <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="h-16 w-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <Award className="w-20 h-20 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                    <p className="text-foreground/80 mb-6 line-clamp-4">{cert.description}</p>

                    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Certificate
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

export default CertificatesSection;