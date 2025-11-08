"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo, education, skills } from "@/data";

// Dynamic import for Lucide icons
const LucideIcon = ({ name, ...props }) => {
    const Icon = dynamic(() => import('lucide-react').then(mod => mod[name] || mod.X), {
        ssr: false,
        loading: () => <div className="w-16 h-16 bg-[#FAEAB1]/20 rounded-full animate-pulse"></div>
    });
    return <Icon {...props} />;
};

export default function About() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-[#FAF8F1] relative overflow-hidden">
                {/* Grid Background Overlay */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(#34656D 1px, transparent 1px), linear-gradient(90deg, #34656D 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                    {/* Animated Light Rays */}
                    <motion.div
                        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FAEAB1]/30 to-transparent"
                        animate={{
                            x: ['-100%', '100vw'],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 2
                        }}
                        style={{ filter: 'blur(20px)' }}
                    />
                    <motion.div
                        className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#34656D]/20 to-transparent"
                        animate={{
                            x: ['100vw', '-100%'],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 3,
                            delay: 1.5
                        }}
                        style={{ filter: 'blur(25px)' }}
                    />
                </div>
                {/* Hero Section */}
                <section className="py-20 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                                    About Me
                                </span>
                            </h1>
                            <p className="text-xl text-[#334443]/70 max-w-3xl mx-auto">
                                Get to know more about my journey, skills, and what drives me
                            </p>
                        </motion.div>

                        {/* Tab Navigation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex justify-center mb-12"
                        >
                            <div className="inline-flex bg-white/70 backdrop-blur-lg rounded-full p-1 shadow-lg border border-white/40">
                                {["about", "education", "skills"].map((tab) => (
                                    <motion.button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${activeTab === tab
                                            ? "bg-gradient-to-r from-[#34656D] to-[#334443] text-white shadow-lg"
                                            : "text-[#334443]/70 hover:text-[#334443]"
                                            }`}
                                    >
                                        {tab}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tab Content */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {activeTab === "about" && <AboutSection />}
                            {activeTab === "education" && <EducationSection />}
                            {activeTab === "skills" && <SkillsSection />}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

/* ---------- Subcomponents ---------- */

function AboutSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Bio */}
            <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all">
                    <h2 className="text-3xl font-bold mb-6 text-[#334443]">
                        My Story
                    </h2>
                    <p className="text-[#334443]/80 leading-relaxed text-lg mb-6">
                        {personalInfo?.about?.description}
                    </p>
                    <div className="pt-1 border-t text-md border-white/30">
                        <p className="text-[#34656D] italic">
                            "{personalInfo?.about?.background}"
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Interests & Hobbies */}
            <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#34656D]/90 to-[#334443]/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-white border border-white/20 hover:shadow-2xl transition-all">
                    <h3 className="text-2xl font-bold mb-6">Interests</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {personalInfo?.about?.interests?.map((interest, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/10"
                            >
                                <p className="font-semibold">{interest}</p>
                            </div>
                        )) ?? null}
                    </div>
                </div>

                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all">
                    <h3 className="text-2xl font-bold mb-6 text-[#334443]">
                        When I'm Not Working
                    </h3>
                    <div className="space-y-3">
                        {personalInfo?.about?.hobbies?.map((hobby, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors backdrop-blur-sm"
                            >
                                <Circle className="w-2 h-2 fill-[#34656D] text-[#34656D]" />
                                <p className="text-[#334443] font-medium">
                                    {hobby}
                                </p>
                            </div>
                        )) ?? null}
                    </div>
                </div>
            </div>
        </div>
    );
}

function EducationSection() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {education?.map((edu, idx) => (
                <div
                    key={idx}
                    className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 animate-fade-in border border-white/40"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-[#334443] mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-xl text-[#34656D] font-semibold">
                                {edu.institution}
                            </p>
                            <p className="text-[#334443]/60 mt-1">
                                {edu.location}
                            </p>
                        </div>
                        <div className="text-left md:text-right">
                            <span className="inline-block text-sm px-4 py-2 bg-gradient-to-r from-[#34656D] to-[#334443] text-white rounded-full font-semibold">
                                {edu.period}
                            </span>
                            {edu.gpa && (
                                <p className="text-[#334443] mt-2 font-semibold">
                                    GPA: {edu.gpa}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="border-t border-white/30 pt-6">
                        <h4 className="text-lg font-semibold text-[#334443] mb-3">
                            Achievements & Highlights
                        </h4>
                        <ul className="space-y-2">
                            {edu.achievements?.map((achievement, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-[#334443]/80"
                                >
                                    <span className="text-[#34656D] text-xl mt-0.5">✓</span>
                                    <span>{achievement}</span>
                                </li>
                            )) ?? null}
                        </ul>
                    </div>
                </div>
            )) ?? <p className="text-center text-[#334443]/60">No education data.</p>}
        </div>
    );
}

function SkillsSection() {
    const skillCategories = [
        { title: "Technical Skills", skills: skills?.technical ?? [], color: "from-[#34656D] to-[#334443]" },
        { title: "Reporting Standards", skills: skills?.languages ?? [], color: "from-[#34656D] to-[#34656D]/70" },
        { title: "Frameworks & Methods", skills: skills?.frameworks ?? [], color: "from-[#334443] to-[#34656D]" },
        { title: "Data & BI Tools", skills: skills?.tools ?? [], color: "from-[#FAEAB1] to-[#34656D]" },
        { title: "Software Proficiency", skills: skills?.software ?? [], color: "from-[#34656D] to-[#FAEAB1]" },
        { title: "Specialized Tools", skills: skills?.specialized ?? [], color: "from-[#334443] to-[#334443]/80" },
    ];

    return (
        <div className="space-y-12">
            {skillCategories.map((category, idx) => (
                <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {category.title}
                        </span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {category.skills.map((skill, i) => (
                            <div
                                key={i}
                                className="w-40 h-40 group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col items-center justify-center gap-4 border border-white/40"
                            >
                                <div className="w-16 h-16 flex items-center justify-center">
                                    {skill.logo ? (
                                        <LucideIcon
                                            name={skill.logo}
                                            className="w-10 h-10 text-[#34656D] group-hover:scale-110 transition-transform"
                                        />
                                    ) : (
                                        <span className="text-4xl text-[#34656D]">•</span>
                                    )}
                                </div>
                                <p className="text-base font-semibold text-[#334443] text-center">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Certifications Section */}
            <div className="mt-16">
                <h3 className="text-3xl font-bold mb-8 text-center">
                    <span className="bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                        Professional Certifications
                    </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills?.certifications?.map((cert, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-[#34656D]/90 to-[#334443]/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-white border border-white/20 hover:shadow-2xl transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                                    <LucideIcon name="Award" className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
                                    <p className="text-white/80 text-base">{cert.issuer}</p>
                                    <p className="text-white/60 text-base">{cert.date}</p>
                                </div>
                            </div>
                            <p className="text-white/90 text-base leading-relaxed">
                                <strong>Focus:</strong> {cert.focus}
                            </p>
                        </div>
                    )) ?? <p className="text-center text-[#334443]/60">No certifications listed.</p>}
                </div>
            </div>
        </div>
    );
}