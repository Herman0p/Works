"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const appyEase = [0.76, 0, 0.24, 1] as const;

export default function About() {
    const heroHeadline = "WE ARE UNCLEMAN".split(" ");

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* 1. Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-[90vh] px-6 md:px-16 lg:px-24 pt-40 pb-20 text-center">
                <div className="flex flex-wrap justify-center gap-x-[1rem] md:gap-x-[1.5rem] lg:gap-x-[2rem] gap-y-4 mb-8 max-w-7xl">
                    {heroHeadline.map((word, i) => (
                        <div key={i} className="overflow-hidden pb-4">
                            <motion.h1
                                className="text-6xl md:text-8xl lg:text-[11rem] font-bold tracking-tighter leading-[0.9]"
                                initial={{ y: "120%" }}
                                animate={{ y: "0%" }}
                                transition={{ duration: 1.2, delay: i * 0.15, ease: appyEase }}
                            >
                                {word}
                            </motion.h1>
                        </div>
                    ))}
                </div>

                <div className="overflow-hidden mt-8 mb-16 pb-2">
                    <motion.h2
                        className="text-2xl md:text-4xl lg:text-5xl font-light text-zinc-400 tracking-tight"
                        initial={{ y: "120%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1.2, delay: 0.5, ease: appyEase }}
                    >
                        Shaped by experience, driven by design.
                    </motion.h2>
                </div>
            </section>

            {/* 2. Editorial Grid (The Story) */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
                    {/* Left Column: Portrait */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative aspect-[3/4] md:aspect-[4/5] w-full bg-zinc-900 overflow-hidden"
                        >
                            <Image
                                src="/hermansyah.jpg"
                                alt="Founder Portrait"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Editorial Text */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className="flex flex-col gap-8"
                        >
                            <h3 className="text-sm tracking-widest text-zinc-500 font-mono uppercase border-b border-zinc-800 pb-4 mb-4">
                                Our Origin
                            </h3>
                            <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                                UNCLEMAN was born from a singular frustration: the gap between creative vision and scalable execution. For too long, brands had to choose between highly conceptual agencies or rigid, soulless development shops. We exist to bridge that divide.
                            </p>
                            <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                                We believe in the power of the dark aesthetic—the brutalist clarity that forces content to speak for itself. We strip away the unnecessary, focusing entirely on speed, intuition, and undeniable visual impact. Every pixel we place and every system we build is meticulously engineered to ensure your brand doesn't just survive the digital landscape; it commands it.
                            </p>

                            {/* Stats/Facts List */}
                            <div className="mt-12 flex flex-col pt-8 border-t border-zinc-800">
                                <ul className="flex flex-col">
                                    <li className="flex justify-between items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-950 transition-colors">
                                        <span className="text-white font-medium text-lg md:text-xl">Headquarters</span>
                                        <span className="text-zinc-500 font-mono text-sm uppercase">Indonesia</span>
                                    </li>
                                    <li className="flex justify-between items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-950 transition-colors">
                                        <span className="text-white font-medium text-lg md:text-xl">Specialty</span>
                                        <span className="text-zinc-500 font-mono text-sm uppercase">End-to-End Product</span>
                                    </li>
                                    <li className="flex justify-between items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-950 transition-colors">
                                        <span className="text-white font-medium text-lg md:text-xl">Mission</span>
                                        <span className="text-zinc-500 font-mono text-sm uppercase">Building Bold Brands</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Massive Quote Section */}
            <section className="px-6 md:px-16 lg:px-24 py-32 md:py-48 border-t border-zinc-900 bg-zinc-950 flex justify-center text-center">
                <div className="max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light italic leading-tight text-white tracking-wide">
                            "WE ARE HERE TO MAKE YOUR BRAND UNFORGETTABLE BEFORE IT BLENDS IN."
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
