"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CorporateProjects() {
    const { t } = useLanguage();

    const projects = [
        {
            title: t.corporate.projects.seeco.title,
            role: t.corporate.roles.fullstack,
            desc: t.corporate.projects.seeco.desc,
            link: t.corporate.projects.seeco.link,
            tech: [".NET 6", "React", "TypeScript", "EF Core", "PostgreSQL"],
        },
        {
            title: t.corporate.projects.iqjvc.title,
            role: t.corporate.roles.fullstack,
            desc: t.corporate.projects.iqjvc.desc,
            link: t.corporate.projects.iqjvc.link,
            tech: [".NET 8", "Vue.js", "TypeScript", "EF Core", "Redis", "Oracle"],
        },
        {
            title: t.corporate.projects.ceb.title,
            role: t.corporate.roles.fullstack,
            desc: t.corporate.projects.ceb.desc,
            link: t.corporate.projects.ceb.link,
            tech: [".NET 6", "React", "TypeScript", "EF Core", "PostgreSQL"],
        },
        {
            title: t.corporate.projects.eltTool.title,
            role: t.corporate.roles.fullstack,
            desc: t.corporate.projects.eltTool.desc,
            link: t.corporate.projects.eltTool.link,
            tech: [".NET 9", "React", "TypeScript", "EF Core", "Redis", "RabbitMQ", "PostgreSQL"],
        },
        {
            title: t.corporate.projects.gradient.title,
            role: t.corporate.roles.fullstack,
            desc: t.corporate.projects.gradient.desc,
            link: t.corporate.projects.gradient.link,
            tech: [".NET 9", "React", "TypeScript", "EF Core", "Redis", "RabbitMQ", "PostgreSQL"],
        },
    ];

    return (
        <section id="corporate-projects" className="py-24 relative border-t border-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-2">{t.corporate.sectionTitle}</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{t.corporate.heading}</h3>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="flex flex-col md:flex-row gap-8 glass p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.08] transition-colors"
                        >
                            <div className="md:w-1/3">
                                <h4 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h4>
                                <p className="text-blue-400 font-medium mb-6">{project.role}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs tracking-wider bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/80">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="md:w-2/3 flex flex-col justify-center">
                                <p className="text-white/70 text-lg leading-relaxed mb-6">
                                    {project.desc}
                                </p>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors self-start"
                                    >
                                        {t.corporate.readCaseStudy} <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
