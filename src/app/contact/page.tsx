"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* 1. Contact Hero Section */}
            <section className="px-6 md:px-16 lg:px-24 pt-48 pb-20 md:pb-32">
                <div className="flex gap-4 text-sm tracking-widest text-zinc-500 font-mono uppercase mb-16">
                    <span>Stay in the know</span>
                    <span>/</span>
                    <span>Contact Us</span>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] max-w-5xl"
                >
                    Big ideas. Bright minds. Reach out and let's shine together.
                </motion.h1>
            </section>

            {/* 2. The Contact Form */}
            <section className="px-6 md:px-16 lg:px-24 pb-32">
                <form className="max-w-4xl flex flex-col gap-12">
                    {/* Row 1: Name & Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        <div className="flex flex-col group">
                            <label htmlFor="name" className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 group-focus-within:text-white transition-colors">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="bg-transparent border-b border-zinc-800 pb-4 text-xl focus:outline-none focus:border-white transition-colors rounded-none"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex flex-col group">
                            <label htmlFor="email" className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 group-focus-within:text-white transition-colors">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="bg-transparent border-b border-zinc-800 pb-4 text-xl focus:outline-none focus:border-white transition-colors rounded-none"
                                placeholder="john@example.com"
                            />
                        </div>
                    </motion.div>

                    {/* Row 2: Company & Website */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        <div className="flex flex-col group">
                            <label htmlFor="company" className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 group-focus-within:text-white transition-colors">
                                Your Company Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                required
                                className="bg-transparent border-b border-zinc-800 pb-4 text-xl focus:outline-none focus:border-white transition-colors rounded-none"
                                placeholder="Acme Corp"
                            />
                        </div>
                        <div className="flex flex-col group">
                            <label htmlFor="website" className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 group-focus-within:text-white transition-colors">
                                Current Website
                            </label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                className="bg-transparent border-b border-zinc-800 pb-4 text-xl focus:outline-none focus:border-white transition-colors rounded-none"
                                placeholder="https://example.com"
                            />
                        </div>
                    </motion.div>

                    {/* Row 3: Role & Department Dropdowns */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        <div className="flex flex-col group">
                            <label htmlFor="role" className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 group-focus-within:text-white transition-colors">
                                Select Your Role <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="role"
                                name="role"
                                required
                                className="bg-transparent border-b border-zinc-800 pb-4 text-xl focus:outline-none focus:border-white transition-colors rounded-none text-white appearance-none cursor-pointer"
                            >
                                <option value="" disabled selected className="bg-zinc-900">Please select</option>
                                <option value="Executive" className="bg-zinc-900">Executive / C-Level</option>
                                <option value="Director" className="bg-zinc-900">Director / Head of Department</option>
                                <option value="Manager" className="bg-zinc-900">Manager / Lead</option>
                                <option value="Contributor" className="bg-zinc-900">Individual Contributor</option>
                                <option value="Student" className="bg-zinc-900">Student / Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col group">
                            <label htmlFor="department" className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 group-focus-within:text-white transition-colors">
                                Select Your Department <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="department"
                                name="department"
                                required
                                className="bg-transparent border-b border-zinc-800 pb-4 text-xl focus:outline-none focus:border-white transition-colors rounded-none text-white appearance-none cursor-pointer"
                            >
                                <option value="" disabled selected className="bg-zinc-900">Please select</option>
                                <option value="Marketing" className="bg-zinc-900">Marketing</option>
                                <option value="Creative" className="bg-zinc-900">Creative / Design</option>
                                <option value="Product" className="bg-zinc-900">Product / Tech</option>
                                <option value="Executive" className="bg-zinc-900">Executive / Leadership</option>
                                <option value="Operations" className="bg-zinc-900">Operations</option>
                                <option value="Other" className="bg-zinc-900">Other</option>
                            </select>
                        </div>
                    </motion.div>

                    {/* Row 4: Services Checkboxes */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                        className="flex flex-col mt-4"
                    >
                        <label className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-8">
                            What Services do you need?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {['Branding', 'Ecommerce', 'Social media', 'Web Design'].map((service, idx) => (
                                <label key={idx} className="group flex items-center gap-4 cursor-pointer">
                                    <div className="relative flex items-center justify-center w-6 h-6 border border-zinc-500 group-hover:border-white transition-colors">
                                        <input type="checkbox" name="services" value={service} className="peer opacity-0 absolute w-full h-full cursor-pointer" />
                                        <div className="w-3 h-3 bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">{service}</span>
                                </label>
                            ))}
                        </div>
                    </motion.div>

                    {/* Row 5: Budget Dropdown */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                        className="flex flex-col group mt-4"
                    >
                        <label htmlFor="budget" className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 group-focus-within:text-white transition-colors">
                            Select Your Budget ($) <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="budget"
                            name="budget"
                            required
                            className="bg-transparent border-b border-zinc-800 pb-4 text-xl focus:outline-none focus:border-white transition-colors rounded-none text-white appearance-none cursor-pointer md:w-1/2"
                        >
                            <option value="" disabled selected className="bg-zinc-900">Please select</option>
                            <option value="0-10k" className="bg-zinc-900">0 - 10k</option>
                            <option value="10k-20k" className="bg-zinc-900">10k - 20k</option>
                            <option value="20k+" className="bg-zinc-900">20k+</option>
                        </select>
                    </motion.div>

                    {/* Row 6: Message Textarea */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                        className="flex flex-col group mt-4"
                    >
                        <label htmlFor="message" className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 group-focus-within:text-white transition-colors">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="bg-transparent border-b border-zinc-800 pb-4 text-xl focus:outline-none focus:border-white transition-colors rounded-none resize-none"
                            placeholder="Tell us about your project..."
                        />
                    </motion.div>

                    {/* Row 7: Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                        className="mt-8"
                    >
                        <button
                            type="submit"
                            className="group flex flex-col items-center justify-center w-full md:w-auto px-12 py-6 bg-white text-black rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <span className="text-xl font-bold tracking-tight">Send Message</span>
                        </button>
                    </motion.div>
                </form>
            </section>

            {/* 3. Footer */}
            <Footer />
        </div>
    );
}
