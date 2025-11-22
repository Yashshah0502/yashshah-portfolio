"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02, rotateX: 2, rotateY: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-blue-500/50 transition-colors duration-300 h-full flex flex-col"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow Effect - Optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-colors duration-500" />
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="text-gray-500 group-hover:text-blue-400 transition-colors" size={20} />
        </div>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
          {project.shortDescription}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-md border border-white/5">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-md border border-white/5">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          
          {/* Stack Count Bar */}
          <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden flex">
            {project.techStack.map((_, i) => (
              <div 
                key={i} 
                className="h-full bg-blue-500/50 border-r border-black/20 last:border-0"
                style={{ width: `${100 / project.techStack.length}%`, opacity: 0.5 + (i / project.techStack.length) * 0.5 }} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
