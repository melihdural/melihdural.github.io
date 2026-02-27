"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Games() {
    const { t } = useLanguage();

    const games = [
        { title: "Hair Braider", image: "/games/hairBraider.jpg", link: "#" },
        { title: "Statue Builder", image: "/games/statueBuilder.jpg", link: "#" },
        { title: "Hook Master", image: "/games/hookMaster.png", link: "#" },
        { title: "Be The Legend", image: "/games/beTheLegend.jpg", link: "#" },
        { title: "Juicy Matcher", image: "/games/juicyMatch.jpg", link: "#" },
        { title: "Weapon Up", image: "/games/weaponUp.jpg", link: "#" },
        { title: "Color Wheel", image: "/games/colorWheel.jpg", link: "#" },
        { title: "Pirate Merge", image: "/games/pirateMerge.png", link: "#" },
    ];

    return (
        <section id="games" className="py-24 relative overflow-hidden bg-black">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Gamepad2 size={16} /> {t.games.sectionTitle}
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{t.games.heading}</h3>
                    </div>

                </motion.div>

                {/* Horizontal scroller / Compact Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {games.map((game, i) => (
                        <motion.a
                            key={game.title}
                            href={game.link !== "#" ? game.link : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass border-white/5"
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={game.image}
                                alt={game.title}
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
                                <h4 className="font-semibold text-lg text-white group-hover:-translate-y-1 transition-transform">{game.title}</h4>
                                <p className="text-xs text-white/60">{t.games.tech}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
