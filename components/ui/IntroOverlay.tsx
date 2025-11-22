"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const fullText = "> INITIALIZING SYSTEM...\n> LOADING MODULES...\n> ACCESS GRANTED.";

  useEffect(() => {
    // Lock scroll and force to top
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          // Unlock scroll and ensure we're at top
          document.body.style.overflow = "unset";
          window.scrollTo(0, 0);
        }, 800);
      }
    }, 30); // Faster typing speed

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
