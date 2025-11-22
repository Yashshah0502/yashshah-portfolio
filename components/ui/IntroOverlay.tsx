"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const fullText = "> INITIALIZING SYSTEM...\n> LOADING MODULES...\n> ACCESS GRANTED.";

  useEffect(() => {
    // Immediate scroll reset
    window.scrollTo(0, 0);
    
    // Also reset after a tiny delay to catch browser scroll restoration
    setTimeout(() => window.scrollTo(0, 0), 0);
    setTimeout(() => window.scrollTo(0, 0), 10);
    setTimeout(() => window.scrollTo(0, 0), 50);
    
    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          // Unlock scroll smoothly
          document.body.style.overflow = "unset";
        }, 800);
      }
    }, 30);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center font-mono text-green-500"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <pre className="text-sm md:text-base whitespace-pre-wrap">
            {text}
            <span className="animate-pulse">_</span>
          </pre>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
