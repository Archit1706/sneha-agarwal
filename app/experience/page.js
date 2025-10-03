"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { experiences } from "@/data";

export default function Experience() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-[#FAF8F1]">
                {/* Grid pattern overlay only */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(#34656D 1px, transparent 1px), linear-gradient(90deg, #34656D 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                                    Work Experience
                                </span>
                            </h1>
                            <p className="text-xl text-[#334443]/70 max-w-3xl mx-auto">
                                My professional journey and the impact I've made
                            </p>
                        </motion.div>

                        {/* Timeline Layout for Desktop */}
                        <div className="hidden lg:block">
                            <div className="relative">
                                {/* Animated Vertical Line */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#34656D] via-[#FAEAB1] to-[#334443]"
                                />

                                {/* Experience Cards */}
                                {experiences.map((exp, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: idx * 0.2,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        className={`mb-16 flex items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                            }`}
                                    >
                                        {/* Card */}
                                        <div className="w-5/12">
                                            <ExperienceCard exp={exp} index={idx} />
                                        </div>

                                        {/* Center Circle */}
                                        <div className="w-2/12 flex justify-center">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: idx * 0.2 + 0.3,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                                viewport={{ once: true }}
                                                className="w-8 h-8 bg-gradient-to-r from-[#34656D] to-[#334443] rounded-full border-4 border-white shadow-lg z-10"
                                            >
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="w-full h-full rounded-full bg-gradient-to-r from-[#34656D] to-[#334443]"
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Empty Space */}
                                        <div className="w-5/12"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Card Layout for Mobile/Tablet */}
                        <div className="lg:hidden space-y-8">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: idx * 0.1,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <ExperienceCard exp={exp} index={idx} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

function ExperienceCard({ exp, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const gradients = [
        "from-[#34656D] to-[#334443]",
        "from-[#34656D] to-[#FAEAB1]",
        "from-[#334443] to-[#34656D]"
    ];

    const gradient = gradients[index % gradients.length];

    return (
        <motion.div
            className="group relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Gradient Background Blur Effect */}
            <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20`}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
            />

            <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-white/40">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-2 flex-wrap"
                        >
                            <h3 className="text-2xl font-bold text-[#334443]">
                                {exp.title}
                            </h3>
                            <span className={`px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-semibold rounded-full`}>
                                {exp.type}
                            </span>
                        </motion.div>
                        <p className="text-xl text-[#34656D] font-semibold mb-1">
                            {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-[#334443]/60 text-sm">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-[#334443]/80 mb-6 leading-relaxed">
                    {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 text-[#334443] font-semibold mb-4 hover:text-[#34656D] transition-colors"
                    >
                        <span>Key Responsibilities</span>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </motion.button>

                    <motion.div
                        initial={false}
                        animate={{
                            height: isExpanded ? "auto" : 0,
                            opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-3 pt-2">
                            {exp.responsibilities.map((resp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: isExpanded ? 1 : 0,
                                        x: isExpanded ? 0 : -20
                                    }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-3 text-[#334443]/80"
                                >
                                    <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${gradient} flex-shrink-0`}></span>
                                    <span>{resp}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Technologies */}
                <div>
                    <p className="text-sm text-[#334443]/60 mb-3 font-semibold">
                        Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 bg-[#FAEAB1]/30 text-[#334443] rounded-full text-sm font-medium hover:bg-[#FAEAB1]/50 transition-colors cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}