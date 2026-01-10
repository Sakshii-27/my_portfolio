"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Code2, Globe, Database, Cpu, Terminal, Wrench } from "lucide-react";

export default function Skills() {
    const categories = [
        { name: "Languages", icon: Code2, skills: resumeData.skills.languages },
        { name: "Web Development", icon: Globe, skills: resumeData.skills.webDev },
        { name: "Databases", icon: Database, skills: resumeData.skills.databases },
        { name: "CS Concepts", icon: Cpu, skills: resumeData.skills.concepts },
        { name: "DevOps", icon: Terminal, skills: resumeData.skills.devOps },
        { name: "Tools", icon: Wrench, skills: resumeData.skills.tools },
    ];

    return (
        <section id="skills" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Technical Skills
                    </h2>
                    <p className="text-muted-foreground">The stack I love working with</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-white/5 rounded-xl p-6 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                    <category.icon size={20} />
                                </div>
                                <h3 className="font-semibold text-lg">{category.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-white/5 hover:bg-secondary/80 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
