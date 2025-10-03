"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { experiences } from "@/data";

export default function Experience() {
    const [selectedExp, setSelectedExp] = useState(0);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-black dark:to-purple-900">
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16 animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Work Experience
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                My professional journey and the impact I've made
                            </p>
                        </div>

                        {/* Timeline Layout for Desktop */}
                        <div className="hidden lg:block">
                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-pink-500 to-blue-600"></div>

                                {/* Experience Cards */}
                                {experiences.map((exp, idx) => (
                                    <div
                                        key={idx}
                                        className={`mb-16 flex items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                            } animate-slide-in`}
                                        style={{ animationDelay: `${idx * 0.2}s` }}
                                    >
                                        {/* Card */}
                                        <div className="w-5/12">
                                            <ExperienceCard exp={exp} index={idx} />
                                        </div>

                                        {/* Center Circle */}
                                        <div className="w-2/12 flex justify-center">
                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 animate-pulse"></div>
                                        </div>

                                        {/* Empty Space */}
                                        <div className="w-5/12"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card Layout for Mobile/Tablet */}
                        <div className="lg:hidden space-y-8">
                            {experiences.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className="animate-slide-in"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <ExperienceCard exp={exp} index={idx} />
                                </div>
                            ))}
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
            transform: translateX(-50px);
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
          animation: slide-in 0.6s ease-out;
        }
      `}</style>
        </>
    );
}

function ExperienceCard({ exp, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const gradients = [
        "from-purple-500 to-pink-500",
        "from-blue-500 to-cyan-500",
        "from-orange-500 to-red-500"
    ];

    const gradient = gradients[index % gradients.length];

    return (
        <div className="group relative">
            {/* Gradient Background Blur Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {exp.title}
                            </h3>
                            <span className={`px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-semibold rounded-full`}>
                                {exp.type}
                            </span>
                        </div>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-1">
                            {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                {exp.period}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <span>Key Responsibilities</span>
                        <svg
                            className={`w-5 h-5 transform transition-transform ${isExpanded ? "rotate-180" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div
                        className={`space-y-3 overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        {exp.responsibilities.map((resp, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                            >
                                <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${gradient} flex-shrink-0`}></span>
                                <span>{resp}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-semibold">
                        Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}