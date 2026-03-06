"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Hermansyah Adika Putra",
        role: "CEO & Founder / Lead Architect",
        slug: "hermansyah-adika-putra",
        image: "/hermansyah.jpg",
        headline: "LEAD ARCHITECT FOR DIGITAL EXPERIENCES, SHAPED BY RELENTLESS INNOVATION",
        bio: [
            "Latar belakang Hermansyah mencakup rekayasa perangkat lunak modern, pengembangan web bertenaga tinggi, dan pemahaman mendalam tentang estetika desain brutalist. Kombinasi tersebut memberikannya perspektif yang tak tertandingi: dia tidak hanya mengerti cara menulis kode, tapi dia tahu mengapa sebuah antarmuka gagal berinteraksi dengan pengguna, dan apa yang berantakan saat sistem diuji di bawah tekanan lalu lintas tinggi.",
            "Banyak yang hanya tahu cara membuat website. Hermansyah mengamati ratusan produk digital dan tahu persis di mana letak titik kelemahannya. Pengetahuan inilah yang menyatu ketika ia mendirikan UNCLEMAN.",
            "Akumulasi pengalaman ini adalah hal yang membedakan UNCLEMAN. Kami tidak sekadar merancang antarmuka yang indah, tapi kami membereskan 5% sentuhan akhir di mana banyak brand sering tersandung dan gagal. Kami membangun arsitektur digital yang tahan banting berdasarkan skenario kegagalan nyata di industri nyata.",
            "Hermansyah tidak terafiliasi dengan satu tumpukan teknologi usang. Pemahamannya yang mendalam terhadap ekosistem modern memastikan bahwa tujuan utamanya bukan sekadar merilis website, melainkan membuat dominasi digital klien menjadi absolut."
        ],
        stats: [
            "Based in Bogor, Indonesia",
            "Modern Stack Engineering",
            "End-to-End Product Architecture"
        ],
        quote: "KAMI DI SINI UNTUK MEMBONGKAR KELEMAHAN DIGITAL ANDA SEBELUM HAL ITU MENGHANCURKAN BISNIS ANDA DI PASAR."
    },
    {
        name: "Sibel Damar",
        role: "Head of Marketing",
        slug: "sibel-damar",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
        headline: "DRIVING STRATEGIC NARRATIVES AND GROWTH INITIATIVES",
        bio: [
            "Sibel Damar drives the strategic narrative and growth initiatives at UNCLEMAN.",
            "With a sharp eye for market trends and consumer behavior, she translates complex data into compelling brand stories.",
            "Sibel's campaigns are known for their unapologetic boldness, perfectly aligned with the agency's core brutalist philosophy."
        ],
        stats: [
            "Based in Istanbul, Turkey",
            "Strategic Narrative",
            "Growth Initiatives"
        ],
        quote: "We don't just tell stories. We build movements."
    },
    {
        name: "Dave Blakely",
        role: "Advisor",
        slug: "dave-blakely",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
        headline: "STRATEGIC INSIGHT FOR ORGANIZATIONAL SCALING",
        bio: [
            "Dave Blakely brings unparalleled strategic insight to the UNCLEMAN advisory board.",
            "His deep understanding of organizational scaling and operational excellence helps guide the agency's long-term trajectory.",
            "An industry veteran, Dave mentors the leadership team, ensuring that creative ambition is always matched by structural rigor."
        ],
        stats: [
            "Based in San Francisco, CA",
            "Strategic Insight",
            "Organizational Scaling"
        ],
        quote: "True innovation happens at the intersection of discipline and creativity."
    }
];

export default function TeamMember({ params }: { params: { slug: string } }) {
    const member = teamMembers.find((m) => m.slug === params.slug);

    if (!member) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* Editorial Grid */}
            <section className="px-6 md:px-16 lg:px-24 pb-24 md:pb-32 pt-32 md:pt-40">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 mt-12 md:mt-24 px-4 md:px-12 items-start"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Left Column: Portrait */}
                    <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top"
                        />
                    </div>

                    {/* Right Column: Profile Info */}
                    <div className="flex flex-col gap-8 md:pt-12">
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        >
                            {member.name}
                        </motion.h1>
                        <motion.h2
                            className="text-2xl md:text-3xl font-light text-zinc-500 tracking-tight mb-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            {member.headline}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            className="flex flex-col gap-2"
                        >
                            {member.bio.map((paragraph, index) => (
                                <p key={index} className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6 font-light">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>

                        {/* Stats List */}
                        <motion.div
                            className="mt-6 flex flex-col md:mt-8"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            <ul className="flex flex-col">
                                {member.stats.map((stat, i) => (
                                    <li key={i} className={`flex justify-between items-center py-6 border-t border-white/20 ${i === member.stats.length - 1 ? 'border-b' : ''}`}>
                                        <span className="text-white font-medium text-lg md:text-xl">{stat}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Bottom Section: Massive Quote */}
            <motion.section
                className="px-6 md:px-16 lg:px-24 py-32 md:py-48 border-t border-zinc-900 bg-zinc-950 flex justify-center text-center w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-6xl w-full">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light italic leading-tight text-white tracking-wide uppercase">
                        "{member.quote}"
                    </h2>
                </div>
            </motion.section>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
