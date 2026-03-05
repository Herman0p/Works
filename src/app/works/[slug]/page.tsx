import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Dummy data structure matching the homepage projects
const projectsData: Record<string, any> = {
    "invisible": {
        title: "Invisible",
        client: "Invisible Tech",
        services: "Digital Experience, Product Design",
        year: "2026",
        liveSite: "https://invisible.co",
        heroImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop",
        overview: "Invisible represents a paradigm shift in how users interact with digital workspaces. The challenge was to create an interface that felt completely non-intrusive yet incredibly powerful when summoned. We stripped away every unnecessary element, leaving only what matters. The result is a brutalist, high-performance web experience that prioritizes speed and clarity above all else.",
        gallery: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2670&auto=format&fit=crop",
        ],
        nextSlug: "vosk"
    },
    "vosk": {
        title: "Vosk",
        client: "Vosk Studios",
        services: "E-commerce, Art Direction",
        year: "2025",
        liveSite: "https://vosk.studio",
        heroImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
        overview: "For Vosk, we built an e-commerce platform that challenges traditional purchasing flows. Driven by bold art direction and a minimalist UI, the site feels more like a digital exhibition than a retail store. The high-contrast aesthetic and seamless interactions keep users engaged, turning shopping into a curated experience.",
        gallery: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2675&auto=format&fit=crop",
        ],
        nextSlug: "havencraft"
    },
    "havencraft": {
        title: "Havencraft",
        client: "Havencraft Real Estate",
        services: "Brand System, Web Development",
        year: "2025",
        liveSite: "https://havencraft.com",
        heroImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop",
        overview: "Havencraft required a brand system and digital presence that matched the exclusivity of their architectural properties. We designed a web experience focused on massive typography, sweeping photography, and a monochromatic palette to let the properties speak for themselves.",
        gallery: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2600&auto=format&fit=crop",
        ],
        nextSlug: "west-operators"
    },
    "west-operators": {
        title: "West Operators",
        client: "West Operators Group",
        services: "Brand Identity, Web Design",
        year: "2026",
        liveSite: "https://westoperators.com",
        heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        overview: "A sharp, uncompromising brand identity for an industrial logistics group. West Operators needed to look established but cutting-edge. We employed a brutalist design system utilizing harsh angles, industrial monospaced fonts, and a stark black-and-white visual language.",
        gallery: [
            "https://images.unsplash.com/photo-1586528116311-ad8ed7c81a29?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587293852726-6947b59fa71f?q=80&w=2670&auto=format&fit=crop",
        ],
        nextSlug: "invisible"
    }
};

// Next.js 15+ compatible Page props type
export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const project = projectsData[slug];

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
            {/* 1. Project Header */}
            <section className="px-6 md:px-16 lg:px-24 pt-40 pb-24">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase mb-20 leading-none">
                    {project.title}
                </h1>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-zinc-800 pt-12">
                    <div>
                        <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 shrink-0">Client</h4>
                        <p className="text-lg md:text-xl font-medium">{project.client}</p>
                    </div>
                    <div>
                        <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 shrink-0">Services</h4>
                        <p className="text-lg md:text-xl font-medium">{project.services}</p>
                    </div>
                    <div>
                        <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 shrink-0">Year</h4>
                        <p className="text-lg md:text-xl font-medium">{project.year}</p>
                    </div>
                    <div>
                        <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 shrink-0">Live Site</h4>
                        <a
                            href={project.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg md:text-xl font-medium hover:text-zinc-400 transition-colors inline-flex items-center gap-2"
                        >
                            Visit Website
                            <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Hero Image */}
            <section className="w-full">
                <div className="relative w-full h-[60vh] md:h-[80vh] bg-zinc-900 overflow-hidden">
                    <Image
                        src={project.heroImage}
                        alt={`${project.title} Hero Image`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* 3. Project Overview / The Challenge */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">
                    <div className="md:w-1/4">
                        <div className="md:sticky md:top-32 text-sm tracking-widest text-zinc-500 font-mono uppercase">
                            (01) THE BRIEF
                        </div>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug md:leading-tight text-white/90">
                            {project.overview}
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Showcase Gallery */}
            <section className="px-6 md:px-16 lg:px-24 pb-24 md:pb-32 flex flex-col gap-8 md:gap-16">
                {project.gallery[0] && (
                    <div className="relative w-full aspect-[16/9] bg-zinc-900 overflow-hidden">
                        <Image
                            src={project.gallery[0]}
                            alt={`${project.title} Showcase 1`}
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {project.gallery[1] && (
                        <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden">
                            <Image
                                src={project.gallery[1]}
                                alt={`${project.title} Showcase 2`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    )}
                    {project.gallery[2] && (
                        <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden md:mt-24">
                            <Image
                                src={project.gallery[2]}
                                alt={`${project.title} Showcase 3`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* 5. Next Project Navigation */}
            <section className="border-t border-zinc-800">
                <Link
                    href="/works"
                    className="group block w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 hover:bg-white hover:text-black transition-colors duration-500 text-center md:text-left"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
                        <div className="w-full">
                            <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none inline-flex items-center gap-4">
                                Next Project
                                <span className="transform transition-transform duration-500 group-hover:translate-x-8">→</span>
                            </h2>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
