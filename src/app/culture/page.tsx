"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AnimatedServiceRow = ({
    defaultText,
    hoverText,
}: {
    defaultText: string;
    hoverText: React.ReactNode;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden border-b border-white/20 py-8 md:py-12 cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Default text */}
            <motion.div
                className="w-full block"
                animate={{ y: isHovered ? "-100%" : "0%", opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-sans uppercase tracking-tight">
                    {defaultText}
                </h2>
            </motion.div>

            {/* Hover Text */}
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: isHovered ? "0%" : "100%", opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-0 flex items-center w-full"
            >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-sans uppercase tracking-tight w-full">
                    {hoverText}
                </h2>
            </motion.div>
        </div>
    );
};

export default function Culture() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* 1. Culture Hero Section */}
            <section className="flex flex-col items-start justify-center min-h-[90vh] px-6 md:px-16 lg:px-24 pt-32 pb-20">
                <div className="flex gap-4 text-sm tracking-widest text-zinc-500 font-mono uppercase mb-12">
                    <span>Bright Matter</span>
                    <span>/</span>
                    <span>Culture</span>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl leading-[1.1] mb-12"
                >
                    Uncleman Delivers Sunshine Across Every Frequency
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-xl md:text-3xl font-light text-zinc-400 max-w-3xl leading-relaxed">
                        At Uncleman, we're redefining the traditional design agency model by seamlessly blending human-crafted creativity with intelligent systems. We don't just build brands; we engineer ecosystems designed for scalable growth and lasting impact.
                    </p>
                </motion.div>
            </section>

            {/* 2. Principles Grid */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {/* Principle 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="text-zinc-600 font-mono text-sm">(01)</div>
                        <h3 className="text-2xl font-bold">One Source. Infinite Creative.</h3>
                        <p className="text-zinc-400 font-light leading-relaxed">
                            We design so you don't have to. Our unified approach ensures consistency across every touchpoint, from strategy to execution.
                        </p>
                    </div>
                    {/* Principle 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="text-zinc-600 font-mono text-sm">(02)</div>
                        <h3 className="text-2xl font-bold">Design once, scale everywhere.</h3>
                        <p className="text-zinc-400 font-light leading-relaxed">
                            Uncleman delivers tailored, premium design systems that adapt and grow with your business, eliminating redundant work.
                        </p>
                    </div>
                    {/* Principle 3 */}
                    <div className="flex flex-col gap-6">
                        <div className="text-zinc-600 font-mono text-sm">(03)</div>
                        <h3 className="text-2xl font-bold">Strategic by design.</h3>
                        <p className="text-zinc-400 font-light leading-relaxed">
                            We challenge the status quo. Every visual decision is backed by strategic insight to drive measurable business outcomes.
                        </p>
                    </div>
                    {/* Principle 4 */}
                    <div className="flex flex-col gap-6">
                        <div className="text-zinc-600 font-mono text-sm">(04)</div>
                        <h3 className="text-2xl font-bold">The Creative Cortex.</h3>
                        <p className="text-zinc-400 font-light leading-relaxed">
                            The Source® is your built-in brand brain. We centralize your creative intelligence for faster, smarter execution.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Services / Capabilities List */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800">
                <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase mb-16 md:mb-24">
                    Capabilities
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col flex-wrap border-t border-zinc-800"
                >
                    <AnimatedServiceRow
                        defaultText="Craft Iconic Brands with Powerful Media Strategies*"
                        hoverText={
                            <>
                                ILLUMINATING BRANDS WITH <span className="font-serif italic font-light text-zinc-400 mx-2 tracking-wide">STRATEGY AND DESIGN</span>
                            </>
                        }
                    />
                    <AnimatedServiceRow
                        defaultText="Create meaningful sticky Experiences That last*"
                        hoverText={
                            <>
                                <span className="font-serif italic font-light text-zinc-400 mr-2 tracking-wide">STRATEGIES</span> THAT MAKE YOUR BRAND SHINE <span className="font-serif italic font-light text-zinc-400 ml-2 tracking-wide">BRIGHTER</span>
                            </>
                        }
                    />
                    <AnimatedServiceRow
                        defaultText="Power Your Growth with Smart Commerce Solutions*"
                        hoverText={
                            <>
                                <span className="font-serif italic font-light text-zinc-400 mr-2 tracking-wide">EVOLVING</span> ECOMMERCE TO <span className="font-serif italic font-light text-zinc-400 mx-2 tracking-wide">POWER</span> SALES
                            </>
                        }
                    />
                    <AnimatedServiceRow
                        defaultText="Future-Proof Your Business with Scalable Tech & Data*"
                        hoverText={
                            <>
                                <span className="font-serif italic font-light text-zinc-400 mr-2 tracking-wide">INTELLIGENT</span> SYSTEMS BUILT TO <span className="font-serif italic font-light text-zinc-400 mx-2 tracking-wide">SCALE</span> WITH YOU
                            </>
                        }
                    />
                    <AnimatedServiceRow
                        defaultText="Unlock the Power of AI to Transform Your Business*"
                        hoverText={
                            <>
                                AI <span className="font-serif italic font-light text-zinc-400 mx-2 tracking-wide">INNOVATION</span> TAILORED TO YOUR <span className="font-serif italic font-light text-zinc-400 ml-2 tracking-wide">GOALS</span>
                            </>
                        }
                    />
                </motion.div>
            </section>

            {/* 4. DNA / Team Section ('PIXELS + PEOPLE') */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800 bg-zinc-950">
                <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-16 md:mb-24">
                    <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase shrink-0 md:w-1/4">
                        DNA
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-3/4"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
                            Inspired by people. Powered by AI. Designed for impact.
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {/* Team Member 1 */}
                    <div className="group">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 mb-6 mt-0 filter grayscale transition-all duration-500 group-hover:grayscale-0">
                            <Image
                                src="/hermansyah.jpg"
                                alt="Hermansyah Adika Putra"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Hermansyah Adika Putra<span className="text-zinc-600 font-light ml-1">*</span></h3>
                        <p className="text-zinc-400">CEO & Founder</p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="group md:mt-16">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 mb-6 filter grayscale transition-all duration-500 group-hover:grayscale-0">
                            <Image
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop"
                                alt="Sibel Damar"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Sibel Damar<span className="text-zinc-600 font-light ml-1">*</span></h3>
                        <p className="text-zinc-400">Head of Marketing</p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="group md:mt-32">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 mb-6 filter grayscale transition-all duration-500 group-hover:grayscale-0">
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
                                alt="Dave Blakely"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Dave Blakely<span className="text-zinc-600 font-light ml-1">*</span></h3>
                        <p className="text-zinc-400">Advisor</p>
                    </div>
                </div>
            </section>

            {/* 5. Purpose / Core Values Grid ('UNDER the LIGHT') */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800">
                <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-16 md:mb-24">
                    <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase shrink-0 md:w-1/4">
                        Purpose
                    </div>
                    <div className="md:w-3/4">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl font-light text-zinc-400 max-w-2xl mb-12"
                        >
                            UNDER The LIGHT
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {/* Value 1 */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Memorable by Design<span className="text-zinc-600 font-light ml-1">*</span></h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    Work that sticks, not just ships.
                                </p>
                            </div>
                            {/* Value 2 */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">True Partners<span className="text-zinc-600 font-light ml-1">*</span></h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    By your side, from strategy to success.
                                </p>
                            </div>
                            {/* Value 3 */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Momentum Over Noise<span className="text-zinc-600 font-light ml-1">*</span></h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    One system. Every asset.
                                </p>
                            </div>
                            {/* Value 4 */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Systems, Not One-Offs<span className="text-zinc-600 font-light ml-1">*</span></h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    Built to scale.
                                </p>
                            </div>
                            {/* Value 5 */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Passion in Every Pixel<span className="text-zinc-600 font-light ml-1">*</span></h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    Detail-obsessed.
                                </p>
                            </div>
                            {/* Value 6 */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Built to Evolve<span className="text-zinc-600 font-light ml-1">*</span></h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    We design systems that adapt as you grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Backers & Clients Marquee/Grid */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800 overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-light text-zinc-500 mb-16 text-center">
                    Backed by Infinity. Select clients:
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                        <div key={num} className="aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                            <span className="text-zinc-700 font-mono text-xl">{num.toString().padStart(2, '0')}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Footer / CTA */}
            <Footer />
        </div>
    );
}
