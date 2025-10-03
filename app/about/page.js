"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo, education, skills } from "@/data";

export default function About() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-900">
                {/* Hero Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    About Me
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Get to know more about my journey, skills, and what drives me
                            </p>
                        </div>

                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                                {["about", "education", "skills"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${activeTab === tab
                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="animate-slide-in">
                            {activeTab === "about" && <AboutSection />}
                            {activeTab === "education" && <EducationSection />}
                            {activeTab === "skills" && <SkillsSection />}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
        </>
    );
}

/* ---------- Subcomponents ---------- */

function AboutSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Bio */}
            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        My Story
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                        {personalInfo?.about?.description}
                    </p>
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 italic">
                            "{personalInfo?.bio}"
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Interests & Hobbies */}
            <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
                    <h3 className="text-2xl font-bold mb-6">Interests</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {personalInfo?.about?.interests?.map((interest, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all transform hover:scale-105"
                            >
                                <p className="font-semibold">{interest}</p>
                            </div>
                        )) ?? null}
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        When I'm Not Coding
                    </h3>
                    <div className="space-y-3">
                        {personalInfo?.about?.hobbies?.map((hobby, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <span className="text-2xl">🎯</span>
                                <p className="text-gray-700 dark:text-gray-300 font-medium">
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
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                                {edu.institution}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">
                                {edu.location}
                            </p>
                        </div>
                        <div className="text-left md:text-right">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold">
                                {edu.period}
                            </span>
                            <p className="text-gray-600 dark:text-gray-300 mt-2 font-semibold">
                                GPA: {edu.gpa}
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Achievements & Highlights
                        </h4>
                        <ul className="space-y-2">
                            {edu.achievements?.map((achievement, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                                >
                                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                                    <span>{achievement}</span>
                                </li>
                            )) ?? null}
                        </ul>
                    </div>
                </div>
            )) ?? <p className="text-center text-gray-500">No education data.</p>}
        </div>
    );
}

function SkillsSection() {
    const skillCategories = [
        { title: "Technical Skills", skills: skills?.technical ?? [], color: "from-blue-500 to-cyan-500" },
        { title: "Software & Tools", skills: skills?.software ?? [], color: "from-purple-500 to-pink-500" },
        { title: "Specialized Tools", skills: skills?.specialized ?? [], color: "from-orange-500 to-red-500" },
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {category.skills.map((skill, i) => (
                            <div
                                key={i}
                                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col items-center gap-4"
                            >
                                <div className="w-16 h-16 flex items-center justify-center">
                                    {skill.logo ? (
                                        <img
                                            src={skill.logo}
                                            alt={skill.name ?? "skill"}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                                        />
                                    ) : (
                                        <span className="text-4xl">{skill.icon ?? "•"}</span>
                                    )}
                                </div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                                    {skill.name}
                                </p>
                            </div>
                        )) ?? null}
                    </div>
                </div>
            ))}

            {/* Certifications Section */}
            <div className="mt-16">
                <h3 className="text-3xl font-bold mb-8 text-center">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                        Professional Certifications
                    </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills?.certifications?.map((cert, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-xl text-white"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                                    🏆
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
                                    <p className="text-white/80 text-sm">{cert.issuer}</p>
                                    <p className="text-white/60 text-sm">{cert.date}</p>
                                </div>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                                <strong>Focus:</strong> {cert.focus}
                            </p>
                        </div>
                    )) ?? <p className="text-center text-gray-100">No certifications listed.</p>}
                </div>
            </div>
        </div>
    );
}
