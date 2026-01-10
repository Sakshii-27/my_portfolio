"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Trophy, Calendar } from "lucide-react";

export default function Achievements() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                        Honors & Achievements
                    </h2>
                    <p className="text-muted-foreground">Recognition of my work</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {resumeData.achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-card border border-white/5 hover:bg-white/5 transition-colors"
                        >
                            <div className="p-2 rounded-full bg-yellow-500/10 text-yellow-500 mt-1">
                                <Trophy size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg leading-tight mb-1">{item.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar size={14} /> {item.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Extracurriculars */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">Extracurricular Activities</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {resumeData.extracurricular.map((item, index) => (
                            <div key={index} className="p-6 rounded-xl bg-secondary/20 border border-white/5">
                                <h4 className="font-bold text-lg">{item.role}</h4>
                                <p className="text-primary">{item.organization}</p>
                                <p className="text-sm text-muted-foreground mt-2">{item.period}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
