"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Github, ExternalLink, Video, ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 inline-block">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="p-8 flex flex-col h-full relative z-10">
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h3 className="font-bold text-2xl group-hover:text-primary transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <span className="shrink-0 text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground whitespace-nowrap">
                                        {project.period}
                                    </span>
                                </div>

                                <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                    {project.description}
                                </p>

                                <div className="mt-auto space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-white/5">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                                        {project.links.code && (
                                            <a
                                                href={project.links.code}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-secondary/50 text-sm font-medium hover:bg-secondary hover:text-white transition-all group/btn"
                                            >
                                                <Github size={16} className="group-hover/btn:scale-110 transition-transform" /> Code
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all group/btn"
                                            >
                                                <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" /> Demo
                                            </a>
                                        )}
                                        {project.links.video && !project.links.demo && (
                                            <a
                                                href={project.links.video}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-red-500/10 text-red-500 text-sm font-medium hover:bg-red-500/20 transition-all group/btn"
                                            >
                                                <Video size={16} className="group-hover/btn:scale-110 transition-transform" /> Video
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-16"
                >
                    <a
                        href="https://github.com/Sakshii-27"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <span>View more on GitHub</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
