import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageSquare,
  Lock,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";

// Form Schema validation using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email Address",
    value: "b.k.lpuinsta@gmail.com",
    href: "mailto:b.k.lpuinsta@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91 8789774242",
    href: "tel:+918789774242",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Patna, Bihar",
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bijesh-kumar/" },
  { icon: Github, label: "GitHub", href: "https://github.com/kumarBijesh" },
  { icon: Mail, label: "Email", href: "mailto:b.k.lpuinsta@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+918789774242" },
];

const educationDetails = [
  { label: "University", value: "Lovely Professional University" },
  { label: "Degree", value: "MCA (Master of Computer Applications)" },
  { label: "Grade", value: "7.6 CGPA" },
  { label: "Years", value: "2023 - 2025" },
  {
    label: "Address",
    value:
      "Lovely Professional University, Jalandhar - Delhi G.T. Road, Phagwara, Punjab, India - 144411",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
      const formData = new FormData();
      formData.append("access_key", apiKey);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("from_name", `${data.name} via Portfolio`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Success! Your message has been sent.", {
          description: "Thank you for reaching out! I will reply to your email soon.",
          icon: <ShieldCheck className="w-5 h-5 text-accent" />
        });
        reset();
      } else {
        toast.error(`Error: ${result.message || "Failed to send message"}`);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="py-32 relative overflow-hidden bg-muted/10 border-t border-white/5"
    >
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-accent/4 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-primary/4 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-[10px] font-black uppercase tracking-wider mb-4"
            >
              <Lock className="w-3.5 h-3.5" />
              Get In Touch
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Feel free to reach out if you have a job opportunity, project idea, or question.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Glassmorphic Email Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 bg-card/60 backdrop-blur-xl border border-border/80 rounded-[2.5rem] p-8 md:p-12 shadow-soft hover:border-accent/40 transition-all duration-500 flex flex-col justify-between text-left"
            >
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-black">Send a Message</span>
                  <h3 className="text-3xl font-display font-black leading-none text-foreground">
                    Open to Full-Time Opportunities
                  </h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <Input
                      {...register("name")}
                      placeholder="e.g. John Doe"
                      className={`bg-primary/5 border-border hover:border-accent/40 focus:border-accent focus:ring-accent text-foreground rounded-xl h-12 font-medium ${
                        errors.name ? "border-red-500/50 focus:border-red-500/60" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs font-bold text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email & Subject Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                      <Input
                        {...register("email")}
                        placeholder="john@example.com"
                        type="email"
                        className={`bg-primary/5 border-border hover:border-accent/40 focus:border-accent focus:ring-accent text-foreground rounded-xl h-12 font-medium ${
                          errors.email ? "border-red-500/50 focus:border-red-500/60" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs font-bold text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Subject</label>
                      <Input
                        {...register("subject")}
                        placeholder="e.g. Collaboration Offer"
                        className={`bg-primary/5 border-border hover:border-accent/40 focus:border-accent focus:ring-accent text-foreground rounded-xl h-12 font-medium ${
                          errors.subject ? "border-red-500/50 focus:border-red-500/60" : ""
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs font-bold text-red-500">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Your Message</label>
                    <Textarea
                      {...register("message")}
                      placeholder="Hi Bijesh, I would love to connect about an open software development opportunity..."
                      rows={5}
                      className={`bg-primary/5 border-border hover:border-accent/40 focus:border-accent focus:ring-accent text-foreground rounded-xl font-medium resize-none ${
                        errors.message ? "border-red-500/50 focus:border-red-500/60" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs font-bold text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="gradient"
                      className="w-full rounded-xl py-6 font-bold text-base group/btn relative overflow-hidden shadow-soft"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right Column: Contact info & Academics (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={idx}
                      href={info.href}
                      className="group flex items-center gap-5 p-5 bg-card/60 backdrop-blur-xl border border-border/80 hover:border-accent/40 rounded-2xl transition-all duration-300 shadow-soft text-left"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-soft">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-black leading-tight">{info.label}</p>
                        <p className="font-semibold text-base text-foreground group-hover:text-accent transition-colors mt-0.5">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </motion.div>

              {/* Detailed Academic Profile */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card/60 backdrop-blur-xl border border-border/80 p-8 rounded-[2.5rem] flex-1 flex flex-col justify-between shadow-soft hover:border-accent/40 transition-all duration-500 text-left"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-black flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-6 bg-accent rounded-full shadow-glow-sm" />
                    Education
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-y-5 gap-x-6">
                    {educationDetails.map((detail, idx) => (
                      <div key={idx} className={detail.label === "University Address" ? "sm:col-span-2" : ""}>
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-black leading-none">{detail.label}</p>
                        <p className="text-sm font-semibold text-foreground leading-tight mt-1">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-xs font-semibold text-foreground/60">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span>Ready for Relocation</span>
                  </div>
                  <div className="flex gap-3">
                    {socialLinks.slice(0,2).map((soc, socIdx) => {
                      const Icon = soc.icon;
                      return (
                        <a 
                          key={socIdx} 
                          href={soc.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;