"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
    const { t } = useLanguage();

    const stack = [
        { title: t.tech.stack.dotnet.title, desc: t.tech.stack.dotnet.desc },
        { title: t.tech.stack.react.title, desc: t.tech.stack.react.desc },
        { title: t.tech.stack.vue.title, desc: t.tech.stack.vue.desc },
        { title: t.tech.stack.message.title, desc: t.tech.stack.message.desc },
        { title: t.tech.stack.ts.title, desc: t.tech.stack.ts.desc },
        { title: t.tech.stack.micro.title, desc: t.tech.stack.micro.desc },
    ];

    return (
        <section id="tech-stack" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.02] -skew-y-3 transform origin-top-left -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">{t.tech.sectionTitle}</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{t.tech.heading}</h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stack.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xl font-semibold">{item.title}</h4>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
