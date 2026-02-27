"use client";

import { motion } from "framer-motion";
import {Code2, Cpu, Music, Coffee, CircuitBoard} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    const interests = [
        { icon: <Code2 size={24} />, title: t.about.interests.commerce.title, desc: t.about.interests.commerce.desc },
        { icon: <CircuitBoard size={24} />, title: t.about.interests.electronics.title, desc: t.about.interests.electronics.desc },
        { icon: <Coffee size={24} />, title: t.about.interests.coffee.title, desc: t.about.interests.coffee.desc },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-4">{t.about.sectionTitle}</h2>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                            {t.about.heading.line1} <br className="hidden lg:block" /> {t.about.heading.line2}
                        </h3>

                        <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
                            <p>{t.about.paragraphs.p1}</p>
                            <p>{t.about.paragraphs.p2}</p>
                            <p>{t.about.paragraphs.p3}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {interests.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass p-6 rounded-3xl hover:bg-white/10 transition-colors group cursor-default"
                            >
                                <div className="text-white/50 group-hover:text-white transition-colors mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                                <p className="text-sm text-white/50">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
