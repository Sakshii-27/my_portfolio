"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        About Me
                    </h2>

                    <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {resumeData.personalInfo.summary}
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <GraduationCap className="text-purple-400" /> Education
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {resumeData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-secondary/30 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-lg">{edu.institution}</h4>
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-muted-foreground whitespace-nowrap">
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="text-primary font-medium mb-2">{edu.degree}</p>
                                <p className="text-sm text-muted-foreground mb-3">{edu.grade}</p>
                                {edu.location && (
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <MapPin size={12} /> {edu.location}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
