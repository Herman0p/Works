import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// Dummy data structure matching the Insights page
const blogData: Record<string, any> = {
    "digital-darwinism-the-myth-of-the-threat": {
        title: "Digital Darwinism: The Myth of the Threat",
        date: "January 30, 2026",
        author: "Sibel Damar",
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        tags: ["Strategy", "Technology"],
        content: `
            <h3>1. Introduction</h3>
            <p>We often hear that businesses must "adapt or die" in the face of rapid technological advancement. This concept, widely popularized as Digital Darwinism, suggests an impending extinction event for legacy companies. The narrative is dramatic, compelling, and—for the most part—fundamentally misunderstood.</p>
            
            <p>The threat is not technology itself. The threat is the paralyzing fear of it. When organizations view digital transformation as a survival mechanism rather than an evolutionary opportunity, they make reactive, short-sighted decisions.</p>

            <h3>2. The Real Problem with "Adapt or Die"</h3>
            <p>The issue with the Darwinian metaphor is that evolution in nature is blind and random. Business evolution is not. It requires intentionality, vision, and strategic patience. By framing digital transformation purely as a race against extinction, companies often invest in disconnected tools rather than cohesive systems.</p>
            
            <p>They buy software but don't change culture. They implement AI but ignore data quality. They launch apps but forget the customer experience.</p>
            
            <blockquote>
            "True digital transformation is invisible. It’s not the flashy frontend; it’s the structural integrity of the backend."
            </blockquote>

            <h3>3. A Sustainable Approach</h3>
            <p>To move past the myth, businesses need to stop treating digital maturity as an endpoint. It is a continuous practice. Here is how we reframe the narrative:</p>
            <ul>
                <li><strong>Start with empathy, not engineering.</strong> Technology should serve human needs.</li>
                <li><strong>Embrace iterative growth.</strong> You do not need to rewrite your entire tech stack overnight.</li>
                <li><strong>Invest in adaptability.</strong> Rigid foundations break. Flexible architectures bend and evolve.</li>
            </ul>

            <p>Ultimately, the companies that thrive aren't the ones who adopt technology the fastest. They are the ones who integrate it the smartest.</p>
            
            <h3>Conclusion</h3>
            <p>Let go of the extinction panic. Digital Darwinism isn't about the strongest surviving; it's about the most adaptable thriving. Focus on building resilient, flexible systems and the rest will follow.</p>
        `
    }
};

const fallbackArticle = {
    title: "Insight Not Found",
    date: "Unknown Date",
    author: "Radiance Editorial",
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2670&auto=format&fit=crop",
    tags: ["Unknown"],
    content: "<p>The article you are looking for does not exist or has been removed. Please return to the insights page to browse our latest thoughts.</p>"
};

export default function InsightDetail({
    params
}: {
    params: { slug: string }
}) {
    const { slug } = params;

    // Dynamic loading with fallback
    const article = blogData[slug] || {
        ...fallbackArticle,
        title: slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Insight"
    };

    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
            {/* 1. Header Section */}
            <section className="px-6 md:px-16 lg:px-24 pt-48 pb-12 md:max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
                        {article.date}
                    </span>
                    <span className="w-12 h-px bg-zinc-800"></span>
                    <div className="flex gap-2">
                        {article.tags.map((tag: string) => (
                            <span key={tag} className="text-zinc-500 font-mono text-sm uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8">
                    {article.title}
                </h1>

                <div className="text-xl md:text-2xl font-light text-zinc-400">
                    By {article.author}
                </div>
            </section>

            {/* 2. Hero Image */}
            <section className="px-6 md:px-16 lg:px-24 w-full">
                <div className="relative w-full h-[50vh] md:h-[70vh] bg-zinc-900 overflow-hidden">
                    <Image
                        src={article.heroImage}
                        alt={article.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* 3. Article Body & Sidebar */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

                    {/* Left Column (Sticky TOC) */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 bg-zinc-950 p-8 border border-zinc-800">
                            <h3 className="text-sm font-mono tracking-widest text-zinc-500 uppercase mb-6">
                                On this page
                            </h3>
                            <ul className="flex flex-col gap-4 text-zinc-400">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-300">1. Introduction</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-300">2. The Problem with "Adapt or Die"</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-300">3. A Sustainable Approach</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-300">Conclusion</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="lg:col-span-8">
                        {/* We use a custom prose-like CSS implementation since typography plugin configuration was skipped */}
                        <div
                            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-zinc-300 space-y-8 prose-custom"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Social Share */}
                        <div className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
                                Share this article
                            </span>
                            <div className="flex gap-6">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-zinc-400 transition-colors">Twitter (X)</a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-zinc-400 transition-colors">LinkedIn</a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-zinc-400 transition-colors">Facebook</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Custom Styles for injecting HTML formatting */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .prose-custom h3 {
                    font-size: 2rem;
                    line-height: 1.2;
                    font-weight: 700;
                    color: white;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    letter-spacing: -0.02em;
                }
                .prose-custom p {
                    margin-bottom: 1.5rem;
                }
                .prose-custom blockquote {
                    border-left: 2px solid white;
                    padding-left: 1.5rem;
                    margin: 3rem 0;
                    font-size: 1.5rem;
                    font-style: italic;
                    color: white;
                }
                .prose-custom ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .prose-custom li {
                    margin-bottom: 0.5rem;
                }
                .prose-custom strong {
                    color: white;
                    font-weight: 600;
                }
            `}} />

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
