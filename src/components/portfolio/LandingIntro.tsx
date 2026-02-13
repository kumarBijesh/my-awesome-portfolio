import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LandingIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 800);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col font-sans overflow-hidden bg-background">
      {/* Top Half */}
      <motion.div
        initial={{ y: 0 }}
        animate={isDone ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
        className="flex-1 bg-white flex items-end justify-center overflow-hidden"
      >
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 15, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-[-0.05em]"
        >
          <h1 className="text-[20vw] font-[900] leading-none text-black select-none tracking-tighter font-inter grayscale contrast-125">
            BIJESH
          </h1>
        </motion.div>
      </motion.div>

      {/* Bottom Half */}
      <motion.div
        initial={{ y: 0 }}
        animate={isDone ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
        className="flex-1 bg-[#0a0a0a] flex items-start justify-center overflow-hidden"
      >
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: -15, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-[-0.05em]"
        >
          <h1 className="text-[20vw] font-[900] leading-none text-white select-none tracking-tighter font-inter grayscale contrast-125">
            KUMAR
          </h1>
        </motion.div>
      </motion.div>

      {/* Center Line Decoration (Subtle) */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isDone ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 z-[101]"
      />
    </div>
  );
};

export default LandingIntro;
