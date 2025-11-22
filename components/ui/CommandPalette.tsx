"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, User, Briefcase, Code, Mail, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4">
      <Command className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center border-b border-white/10 px-4">
          <Search className="text-gray-500 mr-2" size={20} />
          <Command.Input 
            placeholder="Type a command or search..." 
            className="w-full bg-transparent py-4 text-white placeholder-gray-500 focus:outline-none text-sm font-mono"
          />
        </div>
        
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-gray-500 text-sm">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="text-xs font-bold text-gray-500 mb-2 px-2">
            <Command.Item 
              onSelect={() => runCommand(() => window.location.href = "#about")}
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors"
            >
              <User size={16} /> About Me
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.location.href = "#projects")}
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors"
            >
              <Briefcase size={16} /> Projects
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.location.href = "#skills")}
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors"
            >
              <Code size={16} /> Skills
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.location.href = "#contact")}
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors"
            >
              <Mail size={16} /> Contact
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="text-xs font-bold text-gray-500 mt-4 mb-2 px-2">
             <Command.Item 
              onSelect={() => runCommand(() => window.open("/resume.pdf", "_blank"))}
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors"
            >
              <FileText size={16} /> View Resume
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
