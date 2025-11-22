"use client";

import { motion } from "framer-motion";
import Puzzle from "@/components/ui/Puzzle";
import AgentWidget from "@/components/ui/AgentWidget";
import MatchingPuzzle from "@/components/ui/MatchingPuzzle";
import Skeleton from "@/components/ui/Skeleton";
import { useState, useEffect } from "react";

export default function Playground() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="playground" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Playground</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interactive demos to test my logic and your curiosity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {loading ? (
              <div className="h-[400px] bg-black/40 border border-white/10 rounded-xl p-6">
                <Skeleton className="w-1/3 h-8 mb-4" />
                <Skeleton className="w-full h-full rounded-lg" />
              </div>
            ) : (
              <Puzzle />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MatchingPuzzle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AgentWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
