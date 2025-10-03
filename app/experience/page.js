"use client";
import { useState } from "react";
import { MapPin, Calendar, Briefcase, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { experiences } from "@/data";

export default function Experience() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-[#FAF8F1]">
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16 animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                                    Work Experience
                                </span>
                            </h1>
                            <p className="text-xl text-[#334443]/70 max-w-3xl mx-auto">
                                My professional journey and the impact I've made
                            </p>
                        </div>

                        {/* Timeline Layout for Desktop */}
                        <div className="hidden lg:block">
                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#34656D] via-[#FAEAB1] to-[#334443]"></div>

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
                                            <div className="w-8 h-8 bg-gradient-to-r from-[#34656D] to-[#334443] rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
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
        "from-[#34656D] to-[#334443]",
        "from-[#34656D] to-[#FAEAB1]",
        "from-[#334443] to-[#34656D]"
    ];

    const gradient = gradients[index % gradients.length];

    return (
        <div className="group relative">
            {/* Gradient Background Blur Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

            <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[#FAEAB1]/50">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-[#334443]">
                                {exp.title}
                            </h3>
                            <span className={`px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-semibold rounded-full`}>
                                {exp.type}
                            </span>
                        </div>
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
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-[#334443] font-semibold mb-4 hover:text-[#34656D] transition-colors"
                    >
                        <span>Key Responsibilities</span>
                        <ChevronDown
                            className={`w-5 h-5 transform transition-transform ${isExpanded ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    <div
                        className={`space-y-3 overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        {exp.responsibilities.map((resp, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 text-[#334443]/80"
                            >
                                <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${gradient} flex-shrink-0`}></span>
                                <span>{resp}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                <div>
                    <p className="text-sm text-[#334443]/60 mb-3 font-semibold">
                        Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-[#FAEAB1]/30 text-[#334443] rounded-full text-sm font-medium hover:bg-[#FAEAB1]/50 transition-colors"
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