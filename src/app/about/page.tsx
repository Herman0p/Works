"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* 1. Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 md:px-16 lg:px-24 pt-40 pb-20 text-center">
                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                    ABOUT UNCLEMAN
                </motion.h1>
                <motion.h2
                    className="text-2xl md:text-4xl font-light text-zinc-400 tracking-tight max-w-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                >
                    Shaped by experience, driven by design.
                </motion.h2>
            </section>

            {/* 2. Editorial Grid */}
            <section className="px-6 md:px-16 lg:px-24 pb-24 md:pb-32">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 mt-24 items-start"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Left: Portrait Image */}
                    <div className="relative w-full aspect-[3/4] bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop"
                            alt="About Us Placeholder"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Right: Editorial Paragraphs */}
                    <div className="flex flex-col gap-8 md:pt-12">
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                            UNCLEMAN is a premium digital agency built on a foundation of brutalist aesthetics and high-performance engineering. We believe in design that demands attention, cutting through the noise of an overcrowded digital landscape.
                        </p>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                            Our team functions as a centralized creative cortex—a unified brain trust where strategy, design, and technology converge. We do not just build websites; we engineer comprehensive brand ecosystems that are designed to evolve and scale.
                        </p>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                            We exist to elevate brands that refuse to blend in. By stripping away the unnecessary and focusing heavily on performance, smooth animations, and striking typography, we craft digital experiences that leave a lasting imprint.
                        </p>

                        {/* 3. Stats List */}
                        <div className="mt-12 flex flex-col md:mt-16">
                            <ul className="flex flex-col">
                                <li className="flex justify-between items-center py-6 border-t border-white/20">
                                    <span className="text-white font-medium text-lg md:text-xl">Headquarters</span>
                                    <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Based in Indonesia</span>
                                </li>
                                <li className="flex justify-between items-center py-6 border-t border-white/20">
                                    <span className="text-white font-medium text-lg md:text-xl">Approach</span>
                                    <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">End-to-End Product Team</span>
                                </li>
                                <li className="flex justify-between items-center py-6 border-t border-white/20 border-b">
                                    <span className="text-white font-medium text-lg md:text-xl">Mission</span>
                                    <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Building Bold Brands</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 4. Massive Quote Section */}
            <motion.section
                className="px-6 md:px-16 lg:px-24 py-32 md:py-48 border-t border-zinc-900 bg-zinc-950 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light italic leading-tight text-white">
                        We are here to make your brand unforgettable before it blends in.
                    </h2>
                </div>
            </motion.section>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
