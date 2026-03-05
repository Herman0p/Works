"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: customEase },
  },
};

export default function Home() {
  const heroWords = "BUILDING BOLD BRANDS.".split(" ");

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-start justify-center min-h-[90vh] px-6 md:px-16 lg:px-24 pt-40 pb-20">
        <div className="flex flex-wrap gap-x-[1rem] md:gap-x-[1.5rem] lg:gap-x-[2rem] gap-y-4 mb-8 max-w-6xl">
          {heroWords.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: i * 0.1, ease: customEase }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        <div className="overflow-hidden mb-16">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-light text-zinc-400 tracking-tight"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: customEase }}
          >
            Build Bold. Build Fast. Build Once.
          </motion.h2>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: customEase }}
          >
            <Link href="/works" className="bg-white text-black px-10 py-5 rounded-full text-lg md:text-xl font-semibold hover:bg-zinc-200 hover:scale-105 transition-all duration-300 inline-flex items-center gap-4">
              View all work
              <span className="text-2xl leading-none">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Section (01) THE REFRAME */}
      <motion.section
        className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <motion.div variants={itemVariants} className="md:w-1/4">
            <div className="md:sticky md:top-32 text-sm tracking-widest text-zinc-500 font-mono uppercase">
              (01) THE REFRAME
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-3/4">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-none">
              Smart design for smart brands.
            </h2>
            <h3 className="text-4xl md:text-6xl font-medium text-zinc-500 leading-tight">
              Your brand's built-in brain.
            </h3>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Section (02) WHAT WE DO */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-900">
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20 md:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="md:w-1/4">
            <div className="md:sticky md:top-32 text-sm tracking-widest text-zinc-500 font-mono uppercase">
              (02) WHAT WE DO
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-3/4">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white max-w-4xl">
              We build your brand's entire ecosystem.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-24 md:gap-x-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="group border-t border-zinc-800 pt-8">
            <div className="text-zinc-600 font-mono mb-8 text-sm">(001)</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-zinc-300 transition-colors duration-300">Be Memorable by design</h3>
          </motion.div>
          <motion.div variants={itemVariants} className="group border-t border-zinc-800 pt-8">
            <div className="text-zinc-600 font-mono mb-8 text-sm">(002)</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-zinc-300 transition-colors duration-300">Create Sticky Experiences</h3>
          </motion.div>
          <motion.div variants={itemVariants} className="group border-t border-zinc-800 pt-8">
            <div className="text-zinc-600 font-mono mb-8 text-sm">(003)</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-zinc-300 transition-colors duration-300">Fuel commerce growth</h3>
          </motion.div>
          <motion.div variants={itemVariants} className="group border-t border-zinc-800 pt-8">
            <div className="text-zinc-600 font-mono mb-8 text-sm">(004)</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-zinc-300 transition-colors duration-300">Unlock your future with AI</h3>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Section (03) OUR WORK */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-900">
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20 md:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="md:w-1/4">
            <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase">
              (03) OUR WORK
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-3/4">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white">
              We love what we do.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Link href="/works/west-operators" className="group block mb-12 md:mb-0">
              <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-zinc-900 mb-8 mt-0">
                <Image
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop"
                  alt="West Operators"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-zinc-300 transition-colors">West Operators</h3>
              <p className="text-zinc-400 text-lg">Brand Identity, Web Design</p>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/works/invisible" className="group block md:mt-32">
              <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-zinc-900 mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop"
                  alt="Invisible"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-zinc-300 transition-colors">Invisible</h3>
              <p className="text-zinc-400 text-lg">Digital Experience, Product Design</p>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/works/vosk" className="group block mb-12 md:mb-0">
              <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-zinc-900 mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2664&auto=format&fit=crop"
                  alt="Vosk"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-zinc-300 transition-colors">Vosk</h3>
              <p className="text-zinc-400 text-lg">E-commerce, Art Direction</p>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/works/havencraft" className="group block md:mt-32">
              <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-zinc-900 mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2664&auto=format&fit=crop"
                  alt="Havencraft"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-zinc-300 transition-colors">Havencraft</h3>
              <p className="text-zinc-400 text-lg">Brand System, Web Development</p>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <Link href="/works" className="px-10 py-5 rounded-full border border-zinc-600 text-xl font-medium hover:bg-white hover:text-black transition-colors duration-300 inline-block">
            View all work
          </Link>
        </motion.div>
      </section>

      {/* 5. Section (05) SELECTED CLIENTS */}
      <section className="py-24 md:py-32 border-t border-zinc-900 overflow-hidden">
        <div className="px-6 md:px-16 lg:px-24 mb-16 md:mb-24">
          <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase">
            (05) SELECTED CLIENTS
          </div>
        </div>
        <div className="flex whitespace-nowrap items-center py-12">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-zinc-300 pr-8">
              NIKE ✦ VERCEL ✦ STRIPE ✦ GOOGLE ✦ FRAMER ✦ FIGMA ✦
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-zinc-300 pr-8">
              NIKE ✦ VERCEL ✦ STRIPE ✦ GOOGLE ✦ FRAMER ✦ FIGMA ✦
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 6. Section (06) NOTEWORTHY */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-900">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="text-sm tracking-widest text-zinc-500 font-mono uppercase"
            >
              (06) NOTEWORTHY
            </motion.div>
          </div>
          <div className="md:w-3/4">
            <motion.div
              className="flex flex-col border-t border-zinc-800"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  title: "Digital Darwinism: The Myth of the Threat",
                  slug: "digital-darwinism-the-myth-of-the-threat",
                  date: "Jan 30, 2026",
                },
                {
                  title: "The Return of Maximalism",
                  slug: "the-return-of-maximalism",
                  date: "Jan 12, 2026",
                },
                {
                  title: "Why Branding is a Business Strategy",
                  slug: "why-branding-is-a-business-strategy",
                  date: "Dec 05, 2025",
                },
              ].map((insight, idx) => (
                <motion.div variants={itemVariants} key={idx}>
                  <Link href={`/insights/${insight.slug}`} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors duration-300">
                    <h3 className="text-3xl md:text-5xl font-medium mb-6 md:mb-0 group-hover:translate-x-4 transition-transform duration-500 tracking-tight">
                      {insight.title}
                    </h3>
                    <div className="flex items-center gap-6">
                      <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">{insight.date}</span>
                      <span className="text-2xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">&rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
