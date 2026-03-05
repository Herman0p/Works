import Footer from "@/components/Footer";
import Link from "next/link";

export default function Insights() {
    // Generate simple slugs from the titles
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/(:|,|\.|®|\(|\)|’|')/g, '') // remove special chars
            .replace(/\s+/g, '-') // replace spaces with hyphens
            .replace(/-+/g, '-'); // remove double hyphens
    };

    const articles = [
        {
            title: "Digital Darwinism: The Myth of the Threat",
            date: "January 30, 2026",
            slug: "digital-darwinism-the-myth-of-the-threat"
        },
        {
            title: "2025: Built with Conviction",
            date: "December 24, 2025",
            slug: "2025-built-with-conviction"
        },
        {
            title: "The Three Most Common Branding Mistakes (And How to Avoid Them)",
            date: "December 22, 2025",
            slug: generateSlug("The Three Most Common Branding Mistakes (And How to Avoid Them)")
        },
        {
            title: "Beyond the Brief: Why the Best Client/Agency Relationships Are Partnerships",
            date: "October 6, 2025",
            slug: generateSlug("Beyond the Brief: Why the Best Client/Agency Relationships Are Partnerships")
        },
        {
            title: "The Source®: Why We Built a Creative OS That Will Change the Agency Model–Forever",
            date: "July 1, 2025",
            slug: generateSlug("The Source®: Why We Built a Creative OS That Will Change the Agency Model–Forever")
        },
        {
            title: "The AI Debate: Don't replace humans, enhance the creators.",
            date: "May 26, 2025",
            slug: generateSlug("The AI Debate: Don't replace humans, enhance the creators.")
        },
        {
            title: "1 Top Designer, 10x the Scale",
            date: "April 7, 2025",
            slug: generateSlug("1 Top Designer, 10x the Scale")
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* 1. Insights Hero Section */}
            <section className="px-6 md:px-16 lg:px-24 pt-48 pb-20 md:pb-32">
                <div className="flex gap-4 text-sm tracking-widest text-zinc-500 font-mono uppercase mb-16">
                    <span>Creative Currents</span>
                    <span>/</span>
                    <span>Insights</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] max-w-5xl">
                    Thinking out loud.
                </h1>
            </section>

            {/* 2. Article List / Feed */}
            <section className="px-6 md:px-16 lg:px-24 pb-32">
                <div className="flex flex-col border-t border-zinc-800">
                    {articles.map((article, index) => (
                        <article key={index} className="group">
                            <Link
                                href={`/insights/${article.slug}`}
                                className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-zinc-800 transition-colors duration-300 hover:bg-zinc-900/40 -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24"
                            >
                                <div className="md:w-3/4 pr-8 mb-4 md:mb-0">
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight group-hover:text-zinc-300 transition-colors duration-300 group-hover:translate-x-4 transition-transform duration-500 inline-block">
                                        {article.title}
                                    </h2>
                                </div>
                                <div className="md:w-1/4 flex items-center justify-start md:justify-end gap-6">
                                    <time className="text-zinc-500 font-mono text-sm tracking-widest uppercase mt-1 md:mt-0 whitespace-nowrap">
                                        {article.date}
                                    </time>
                                    <span className="text-2xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-zinc-500 hidden md:inline-block">&rarr;</span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* 3. Footer */}
            <Footer />
        </div>
    );
}
