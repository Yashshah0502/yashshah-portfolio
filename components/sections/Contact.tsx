"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const interest = formData.get("interest") as string;
    const message = formData.get("message") as string;
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${interest}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoLink = `mailto:yshah43@asu.edu?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setFormState("success");
    form.reset();
  };
  return (
    <section id="contact" className="py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something</h2>
          <p className="text-gray-400 text-lg mb-8">
            Open to AI Engineer, Full-Stack, and Data roles. 
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:yshah43@asu.edu"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
              <span>yshah43@asu.edu</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yash0502/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Yashshah0502"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <motion.div
            animate={formState === "success" ? { scale: 0.8, opacity: 0, height: 0 } : { scale: 1, opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-white/10 overflow-hidden"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors appearance-none"
                >
                  <option>Recruiting for a role</option>
                  <option>Freelance project</option>
                  <option>Just saying hi</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          </motion.div>

          {formState === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                <Send size={32} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-300">
                Thanks for reaching out! I'll get back to you shortly.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
