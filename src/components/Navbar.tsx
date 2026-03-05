"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Culture", href: "/culture" },
        { name: "Works", href: "/works" },
        { name: "Insights", href: "/insights" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left: Logo */}
                <Link href="/" className="text-2xl font-bold tracking-widest text-white">
                    UNCLEMAN
                </Link>

                {/* Center: Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-300 hover:text-white ${pathname === link.href ? "text-white" : "text-gray-400"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right: CTA & Mobile Toggle */}
                <div className="flex items-center space-x-4">
                    <Link
                        href="/contact"
                        className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300"
                    >
                        Get Started
                    </Link>

                    {/* Mobile Hamburger Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-lg border-t border-white/10 flex flex-col items-center pt-12 space-y-8 z-40">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-bold text-white hover:text-gray-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-bold text-black bg-white px-8 py-3 rounded-full hover:scale-105 transition-transform mt-8"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
