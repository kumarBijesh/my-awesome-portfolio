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
    <section id="certificates" ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Verified <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications and specialized training from world-class institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Decorative Stack behind card */}
                <div className="absolute inset-0 bg-accent/20 rounded-[2.5rem] translate-y-3 translate-x-3 group-hover:translate-y-5 group-hover:translate-x-5 transition-transform duration-500 opacity-20" />

                <Card className="relative z-10 h-full overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] transition-all duration-500 group-hover:border-accent/40 group-hover:-translate-y-2 group-hover:-translate-x-2">
                  <div className="p-8 pb-4 h-full flex flex-col">
                    <div className="relative mb-10">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/5">
                        {cert.logo ? (
                          <img
                            src={cert.logo}
                            alt={cert.issuer}
                            className="w-12 h-12 object-contain brightness-110"
                          />
                        ) : (
                          <Award className="w-10 h-10 text-accent" />
                        )}
                      </div>
                      <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-accent text-black text-[10px] font-bold tracking-widest uppercase">
                        Verified
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-accent text-sm font-semibold mb-6 tracking-wide">
                        {cert.issuer}
                      </p>
                      <p className="text-foreground/50 text-sm leading-relaxed mb-8">
                        {cert.description}
                      </p>
                    </div>

                    <Button variant="outline" className="w-full rounded-2xl border-white/10 bg-white/5 group-hover:border-accent transition-colors h-14" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <span className="font-bold">Credential Link</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
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