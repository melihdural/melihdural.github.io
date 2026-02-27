"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "tr" : "en");
    };

    const navLinks = [
        { name: t.nav.about, href: "#about" },
        { name: t.nav.fullstack, href: "#tech-stack" },
        { name: t.nav.enterprise, href: "#corporate-projects" },
        { name: t.nav.games, href: "#games" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "py-4 bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-lg supports-[backdrop-filter]:bg-black/50"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10 font-medium tracking-tight text-xl text-white">
                    <span className="font-bold">Melih</span> Dural
                </Link>

                {/* Desktop Nav */}
                <nav
                    className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-500 ${isScrolled ? "bg-white/5 border border-white/10" : "bg-transparent"
                        }`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-sm font-bold text-white/50 hover:text-white transition-colors ml-4 border-l border-white/20 pl-4"
                    >
                        <Globe size={14} />
                        {language.toUpperCase()}
                    </button>
                </nav>

                {/* Desktop Resume CTA */}
                <div className="hidden md:block">
                    <Link
                        href="mailto:duralmelih@gmail.com"
                        className="text-sm font-medium text-black bg-white hover:bg-white/90 px-5 py-2.5 rounded-full transition-all tracking-tight"
                    >
                        {t.nav.contact}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4 relative z-50">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-sm font-bold text-white"
                    >
                        <Globe size={16} />
                        {language.toUpperCase()}
                    </button>
                    <button
                        className="text-white p-2 -mr-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 right-0 h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-2xl font-semibold text-white/80 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="mailto:duralmelih@gmail.com"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 text-lg font-medium text-black bg-white px-8 py-3 rounded-full"
                            >
                                {t.nav.contact}
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
