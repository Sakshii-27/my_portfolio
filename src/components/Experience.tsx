"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        Professional Experience
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative pl-8 border-l border-white/10 md:pl-0 md:border-none">
                    {resumeData.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-12 md:flex md:justify-between md:gap-8 group"
                        >
                            <div className="hidden md:block w-5/12 text-right pr-8 relative">
                                <span className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-sm font-mono mb-2">
                                    {job.period}
                                </span>
                                <h3 className="font-bold text-xl">{job.company}</h3>
                                <div className="flex items-center justify-end gap-1 text-sm text-muted-foreground mt-1">
                                    <MapPin size={14} /> {job.location}
                                </div>
                            </div>

                            {/* Timeline Center Dot */}
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-background md:left-1/2 md:-translate-x-[5px] md:top-2 shadow-[0_0_10px_theme(colors.purple.500)]" />

                            <div className="md:w-5/12 pl-8 opacity-90 hover:opacity-100 transition-opacity">
                                {/* Mobile Header */}
                                <div className="md:hidden mb-4">
                                    <span className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-sm font-mono mb-2">
                                        {job.period}
                                    </span>
                                    <h3 className="font-bold text-xl">{job.company}</h3>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                        <MapPin size={14} /> {job.location}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-primary mb-4">{job.role}</h4>
                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground mb-6">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="text-base">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {job.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-purple-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
