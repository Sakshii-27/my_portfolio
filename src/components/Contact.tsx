"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-muted-foreground text-lg mb-12">
                        I'm currently looking for full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                        <a
                            href={`mailto:${resumeData.personalInfo.email}`}
                            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group"
                        >
                            <div className="p-3 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground">Email Me</p>
                                <p className="font-medium">{resumeData.personalInfo.email}</p>
                            </div>
                        </a>

                        <div
                            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-white/5"
                        >
                            <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground">Call Me</p>
                                <p className="font-medium">{resumeData.personalInfo.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href={resumeData.personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-white hover:scale-110 transition-all"
                        >
                            <Github size={30} />
                        </a>
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-white hover:scale-110 transition-all"
                        >
                            <Linkedin size={30} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-20 py-6 text-center text-sm text-muted-foreground border-t border-white/5">
                <p>© {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.</p>
            </footer>
        </section>
    );
}
