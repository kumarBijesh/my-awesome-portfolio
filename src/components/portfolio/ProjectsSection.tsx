import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  ShieldAlert, 
  Activity, 
  Globe, 
  FolderGit2, 
  CheckCircle,
  FileSearch,
  BookOpen,
  Play,
  X,
  Volume2,
  VolumeX,
  Sparkles,
  Maximize2
} from "lucide-react";

interface ProjectCaseStudy {
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  features: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  icon: React.ComponentType<any>;
  githubLink: string;
  liveLink?: string;
  liveText?: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

const projects: ProjectCaseStudy[] = [
  {
    title: "ThreatXray Malware Scanner",
    tagline: "Published Academic Cyber Security Suite",
    category: "Cybersecurity",
    problem: "Traditional threat scanners overlook steganographic embeds and metadata exploits, leaving networks vulnerable to stealth payload delivery.",
    solution: "Engineered a dual-layer threat engine extracting steganographic payloads and scrubbing risky file metadata in real-time.",
    features: [
      "Steganographic payload extraction & analysis",
      "Metadata cleaning & stripping algorithms",
      "Malware heuristic scanning & custom YARA definitions",
      "Published research paper detailing vector detection methods"
    ],
    metrics: [
      { label: "Vector Detection", value: "99.2%" },
      { label: "Analysis Overhead", value: "-40%" },
      { label: "Publication", value: "Peer Approved" }
    ],
    tags: ["Python", "SQL", "YARA Rules", "Metadata Parsing", "API"],
    icon: ShieldAlert,
    githubLink: "https://github.com/kumarBijesh/ThreatXrayApp",
    liveLink: "https://ijsrem.com/download/threatxray-a-dual-layered-approach-for-advanced-steganographic-and-metadata-based-threat-detection/",
    liveText: "Read Publication",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/409224424.sd.mp4?s=d0ea46bc289d0b67bf91e2b535d4f3b7d159a68c&profile_id=165&oauth2_token_id=57447761",
    duration: "0:45"
  },
  {
    title: "MusB Research Platform Hardening",
    tagline: "Clinical Onboarding & Management Suite",
    category: "Full Stack & Security",
    problem: "Clinical study recruitment pipelines suffer from severe cross-origin security threats, multi-tenant state leaks, and duplicate participant sign-ups.",
    solution: "Strengthened system security via Content Security Policy (CSP) headers, resolved async registration lockups, and minimized bundle weights.",
    features: [
      "Rigid CSP header implementation & middleware audits",
      "Asynchronous lock resolution for concurrent OTP registrations",
      "Dynamic caching layers for 3x faster page transitions",
      "Granular participant contact form deduplication rules"
    ],
    metrics: [
      { label: "Security Leaks", value: "0 Incidents" },
      { label: "Dashboard Load", value: "3x Faster" },
      { label: "Deduplication", value: "100% Guard" }
    ],
    tags: ["React", "TypeScript", "Next.js", "PostgreSQL", "TailwindCSS"],
    icon: Activity,
    githubLink: "https://github.com/kumarBijesh/my-awesome-portfolio",
    liveLink: "https://musbresearch.com",
    liveText: "Live Platform",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/384745222.sd.mp4?s=503d5e23730e2f5db2c50e7b789178229bbfd2c3&profile_id=165&oauth2_token_id=57447761",
    duration: "0:50"
  },
  {
    title: "Fake News Detection Engine",
    tagline: "NLP-Powered Media Verification Dashboard",
    category: "Machine Learning / NLP",
    problem: "Misinformation spreads at scale, bypassing traditional truth verification systems due to high parsing overhead.",
    solution: "Trained and deployed a machine learning text-classification model with natural language processing heuristics to check article reliability.",
    features: [
      "TF-IDF Vectorization & vocabulary cross-matching",
      "Real-time Streamlit data ingestion and inference",
      "Semantic bias & headline clickbait evaluation",
      "Interactive data charts and confidence metrics display"
    ],
    metrics: [
      { label: "Model Accuracy", value: "98.4%" },
      { label: "Latency", value: "<500ms" },
      { label: "Analyzed Sets", value: "10k+" }
    ],
    tags: ["Python", "Streamlit", "Scikit-Learn", "NLP", "Pandas"],
    icon: Globe,
    githubLink: "https://github.com/kumarBijesh/python---Projct",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054ba2d5e857820a0684f8bb65793e2&profile_id=165&oauth2_token_id=57447761",
    duration: "0:40"
  },
  {
    title: "Forensic File Recovery & Utility Tool",
    tagline: "Low-level Filesystem Carver",
    category: "System Forensics",
    problem: "Relational sector drift and file table corruption lead to lost records, while complex recovery suites overwhelm average users.",
    solution: "Built a forensic script to parse raw directories, scan for deleted record signatures, and map cluster maps dynamically.",
    features: [
      "File header signature scanning and carving",
      "Multi-type file structure mapping & listing",
      "Interactive visual size categories dashboard",
      "Outcomes verification and partition check safety"
    ],
    metrics: [
      { label: "Sector Recovery", value: "95%" },
      { label: "Execution Time", value: "<15s" },
      { label: "System Overhead", value: "Minimal" }
    ],
    tags: ["Python", "GUI (Tkinter)", "OS Internals", "Storage Parsing"],
    icon: FileSearch,
    githubLink: "https://github.com/kumarBijesh/Recovery-System-Tool",
    thumbnail: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7b1ca75661d9a2444de9d64a02c98031d279e8c3&profile_id=165&oauth2_token_id=57447761",
    duration: "0:35"
  }
];

// Single card video hover helper component
const ProjectCardHeader = ({ project, onPlayClick }: { project: ProjectCaseStudy; onPlayClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div 
      className="relative h-64 w-full bg-black/80 overflow-hidden group/header cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPlayClick}
    >
      {/* Chrome Window Mockup header */}
      <div className="absolute top-0 inset-x-0 h-8 bg-black/60 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 z-20">
        <div className="flex gap-1.5 items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[9px] text-muted-foreground/60 font-sans tracking-wide truncate max-w-[150px] font-bold">
          {project.title.toLowerCase().replace(/ /g, "-")}.sh
        </div>
        <div className="w-8" />
      </div>

      {/* Static image thumbnail */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className={`w-full h-full object-cover pt-8 transition-all duration-700 select-none ${
          isHovered ? "scale-105 opacity-0" : "scale-100 opacity-70"
        }`}
      />

      {/* Hover autoplay video player */}
      <video
        ref={videoRef}
        src={project.videoUrl}
        loop
        muted
        playsInline
        className={`absolute inset-0 pt-8 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
          isHovered ? "opacity-90" : "opacity-0"
        }`}
      />

      {/* Glowing play overlay */}
      <div className="absolute inset-0 pt-8 flex items-center justify-center bg-black/40 group-hover/header:bg-black/20 transition-all duration-300 z-10">
        <motion.div 
          whileHover={{ scale: 1.15 }}
          className="w-14 h-14 rounded-full bg-accent text-black flex items-center justify-center shadow-[0_0_20px_hsl(263,90%,64%,0.4)] opacity-80 group-hover/header:opacity-100 group-hover/header:scale-105 transition-all duration-300"
        >
          <Play className="w-6 h-6 fill-current ml-1" />
        </motion.div>
      </div>

      {/* Duration Badge */}
      <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded bg-black/70 border border-white/10 text-[9px] font-black text-accent tracking-widest z-15">
        {project.duration} MIN
      </div>

      {/* Category Tag */}
      <div className="absolute bottom-4 left-4 px-2.5 py-0.5 rounded-full bg-black/75 border border-white/10 text-[8px] font-black tracking-widest uppercase text-white z-15">
        {project.category}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isModalMuted, setIsModalMuted] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Focus locking for accessibility when modal opens
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-32 relative overflow-hidden bg-muted/20 border-t border-white/5"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Large visual grid overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/3 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-[10px] font-black uppercase tracking-wider mb-4"
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                Featured Case Studies
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-display font-black leading-tight tracking-tight">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mt-4 leading-relaxed font-sans font-medium">
                A showcase of production-ready systems, published cyber research, and low-level software platforms.
              </p>
            </div>
            
            <div className="pb-1 hidden md:block">
              <Badge variant="outline" className="border-accent/30 text-accent uppercase tracking-widest text-[9px] font-black px-4.5 py-2 bg-accent/5 rounded-full">
                {projects.length} Case Studies Published
              </Badge>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="h-full"
                >
                  <Card className="group relative h-full flex flex-col justify-between overflow-hidden bg-card/45 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-0 shadow-soft hover:shadow-strong hover:border-accent/30 transition-all duration-500">
                    
                    {/* Upper Interactive Browser Frame Mockup */}
                    <ProjectCardHeader 
                      project={project} 
                      onPlayClick={() => setSelectedProject(project)} 
                    />

                    {/* Content Details */}
                    <div className="p-8 md:p-10 flex-1 flex flex-col justify-between space-y-8">
                      <div className="space-y-6">
                        
                        {/* Title Block */}
                        <div className="space-y-1.5 text-left">
                          <h3 className="text-2xl font-display font-black leading-tight group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-accent/90 text-xs font-bold uppercase tracking-wider font-sans">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Problem / Solution Block */}
                        <div className="space-y-4 font-sans text-left">
                          <div className="space-y-1">
                            <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-black">Problem Definition</p>
                            <p className="text-sm font-medium text-foreground/75 leading-relaxed">{project.problem}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[9px] uppercase tracking-widest text-accent/80 font-black">Engineering Solution</p>
                            <p className="text-sm font-semibold text-foreground/90 leading-relaxed">{project.solution}</p>
                          </div>
                        </div>

                        {/* Bullet Highlights */}
                        <div className="space-y-2.5 text-left">
                          <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-black">Core Features</p>
                          <div className="space-y-1.5">
                            {project.features.slice(0,3).map((feat, featIdx) => (
                              <div key={featIdx} className="flex items-start gap-2 text-xs font-semibold text-foreground/70 leading-normal font-sans">
                                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tags.map((tag, tagIdx) => (
                            <Badge 
                              key={tagIdx} 
                              variant="secondary" 
                              className="bg-white/5 border border-white/10 hover:border-accent/20 text-white font-bold text-[9px] tracking-wider px-2 py-0.5 transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Lower Metrics & Impact Strip */}
                      <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-2 py-3.5 px-4 rounded-2xl bg-white/[0.02] border border-white/5">
                          {project.metrics.map((metric, metricIdx) => (
                            <div key={metricIdx} className="text-center space-y-0.5">
                              <div className="text-base font-display font-black text-accent">{metric.value}</div>
                              <div className="text-[8px] uppercase tracking-wider text-muted-foreground font-bold leading-tight">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center gap-3">
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="flex-1 rounded-xl bg-white/5 border-white/10 hover:border-accent text-xs uppercase tracking-wider font-bold"
                            asChild
                          >
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub Code
                            </a>
                          </Button>
                          
                          {project.liveLink ? (
                            <Button 
                              variant="gradient" 
                              size="lg"
                              className="flex-1 rounded-xl font-bold text-xs uppercase tracking-wider"
                              asChild
                            >
                              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <BookOpen className="w-4 h-4 mr-2" />
                                {project.liveText || "Live Demo"}
                              </a>
                            </Button>
                          ) : (
                            <Button 
                              variant="ghost" 
                              size="lg"
                              disabled
                              className="flex-1 rounded-xl text-[10px] text-muted-foreground bg-white/[0.01] uppercase font-bold"
                            >
                              Local Exec Only
                            </Button>
                          )}
                        </div>
                      </div>

                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Cinematic Walkthrough Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-card/95 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-colors z-30 shadow-md"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Box (7 cols) */}
              <div className="relative md:col-span-8 aspect-video md:h-full bg-black flex items-center justify-center">
                <video
                  ref={modalVideoRef}
                  src={selectedProject.videoUrl}
                  autoPlay
                  loop
                  muted={isModalMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Volume Controller overlay */}
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <button 
                    className="p-2.5 rounded-xl bg-black/75 border border-white/10 text-accent hover:bg-white hover:text-black transition-colors"
                    onClick={() => setIsModalMuted(!isModalMuted)}
                  >
                    {isModalMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5" />}
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 z-20 px-3 py-1 bg-black/75 rounded text-[8px] tracking-[0.2em] font-black uppercase border border-white/10 text-white">
                  Autoplay Enabled
                </div>
              </div>

              {/* Meta Detail Panels (4 cols) */}
              <div className="p-8 md:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4 text-left">
                  <div className="space-y-1">
                    <Badge variant="outline" className="border-accent/40 text-accent uppercase text-[8px] font-black px-2 py-0.5 tracking-widest bg-accent/5 rounded-full">
                      {selectedProject.category}
                    </Badge>
                    <h3 className="text-xl font-display font-black leading-tight tracking-tight mt-1">{selectedProject.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground font-sans font-medium text-xs leading-relaxed">
                    {selectedProject.tagline}. This walkthrough reviews data processing schemas, API handshakes, and platform optimizations.
                  </p>

                  <div className="space-y-1 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl">
                    <p className="text-[8px] uppercase tracking-widest text-accent font-black">Impact Metric</p>
                    <p className="text-lg font-display font-black text-white">{selectedProject.metrics[0].value}</p>
                    <p className="text-[9px] text-muted-foreground font-semibold leading-tight mt-0.5 uppercase tracking-wider">{selectedProject.metrics[0].label}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button 
                    variant="gradient"
                    className="w-full rounded-xl py-6.5 font-bold text-xs uppercase tracking-wider shadow-soft"
                    asChild
                  >
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Inspect GitHub
                    </a>
                  </Button>
                  
                  {selectedProject.liveLink && (
                    <Button 
                      variant="outline"
                      className="w-full rounded-xl py-6.5 font-bold text-xs uppercase tracking-wider border-white/10 hover:border-accent hover:text-accent bg-transparent"
                      asChild
                    >
                      <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {selectedProject.liveText || "Live Demo"}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;