"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-12 border-t border-white/[0.05] bg-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold tracking-tight">Melih Dural</h2>
                    <p className="text-sm text-white/40 mt-1">{t.footer.subtitle}</p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/melihdural" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/melihdural/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/melihdural" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
