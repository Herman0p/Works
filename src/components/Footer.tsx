import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-8 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
            <div className="flex flex-col w-full">
                {/* 1. Massive Brand Text */}
                <div className="w-full mb-20 text-center md:text-left">
                    <h2 className="text-[15vw] leading-none font-bold tracking-tighter w-full block">
                        RADIANCE
                    </h2>
                </div>

                {/* 2. Links Layout (4-Column Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    {/* Column 1: Socials & Copyright */}
                    <div className="flex flex-col justify-between h-full">
                        <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase flex flex-col gap-4 mt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                INSTAGRAM
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                LINKEDIN
                            </a>
                        </div>
                        <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase mt-12 md:mt-auto">
                            ©2026 RADIANCE
                        </div>
                    </div>

                    {/* Column 2: Internal Links (Culture, Works) */}
                    <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase flex flex-col gap-4">
                        <Link href="/culture" className="hover:text-white transition-colors">
                            CULTURE
                        </Link>
                        <Link href="/works" className="hover:text-white transition-colors">
                            WORKS
                        </Link>
                    </div>

                    {/* Column 3: Internal Links (Insights) */}
                    <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase flex flex-col gap-4">
                        <Link href="/insights" className="hover:text-white transition-colors">
                            INSIGHTS
                        </Link>
                    </div>

                    {/* Column 4: Internal Links (Contact, Privacy Policy) */}
                    <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase flex flex-col gap-4">
                        <Link href="/contact" className="hover:text-white transition-colors">
                            CONTACT
                        </Link>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            PRIVACY POLICY
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}
