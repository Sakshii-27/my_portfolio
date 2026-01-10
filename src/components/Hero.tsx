"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { resumeData } from "@/data/resume";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-b from-background via-background to-background/50">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.25, 0.15],
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.15, 0.3, 0.15],
                        x: [0, -80, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute -bottom-20 -right-20 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-400 to-purple-600 blur-[100px]"
                />
            </div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-sm font-medium mb-8 backdrop-blur-xl shadow-lg shadow-green-500/5">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-lg shadow-green-500/50"></span>
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 font-semibold">
                            Available for Opportunities
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 relative">
                        <span className="relative inline-block">
                            Hi, I'm{" "}
                            <br className="md:hidden" />
                            <span className="relative inline-block">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 relative z-10">
                                    {resumeData.personalInfo.name}
                                </span>
                                {/* Glowing text effect */}
                                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-xl opacity-50">
                                    {resumeData.personalInfo.name}
                                </span>
                            </span>

                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed"
                >
                    <span className="text-foreground font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        {resumeData.personalInfo.title}
                    </span>{" "}
                    specialized in building{" "}
                    <span className="text-primary font-semibold">modern</span>,{" "}
                    <span className="text-primary font-semibold">scalable</span>, and{" "}
                    <span className="text-primary font-semibold">user-centric</span> web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-5"
                >
                    <Link
                        href="#projects"
                        className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-105 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center gap-2">
                            View Projects{" "}
                            <ArrowRight
                                size={22}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </span>
                    </Link>

                    <Link
                        href="/SAKSHI.pdf"
                        target="_blank"
                        className="group px-10 py-5 rounded-full bg-white/5 backdrop-blur-xl text-foreground font-bold text-lg border-2 border-white/10 hover:border-white/20 hover:bg-white/10 shadow-xl transition-all hover:scale-105 flex items-center gap-2"
                    >
                        View Resume{" "}
                        <Eye size={22} className="group-hover:scale-110 transition-transform" />
                    </Link>
                </motion.div>

                {/* Decorative floating elements */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[8%] text-purple-400/30 hidden lg:block"
                >
                    <Star size={40} fill="currentColor" />
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -15, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[10%] text-blue-400/30 hidden lg:block"
                >
                    <Sparkles size={36} />
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] right-[15%] text-pink-400/25 hidden lg:block"
                >
                    <Star size={28} fill="currentColor" />
                </motion.div>
            </div>
        </section>
    );
}
