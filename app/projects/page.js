"use client";
import { ShieldCheck, TrendingUp, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, communityEngagement } from "@/data";

export default function Projects() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-gradient-to-br from-[#FAF8F1] via-[#FAEAB1]/30 to-[#34656D]/10">
                {/* Professional Projects Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16 animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                                    Key Projects & Achievements
                                </span>
                            </h1>
                            <p className="text-xl text-[#334443]/70 max-w-3xl mx-auto">
                                Showcasing impactful financial initiatives and strategic implementations
                            </p>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            {projects.map((project, idx) => (
                                <div
                                    key={idx}
                                    className="group animate-slide-up"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <ProjectCard project={project} index={idx} />
                                </div>
                            ))}
                        </div>

                        {/* Community Engagement Section */}
                        <div className="mt-24">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    <span className="bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                                        Community Engagement
                                    </span>
                                </h2>
                                <p className="text-xl text-[#334443]/70 max-w-3xl mx-auto">
                                    Strategic initiatives and social impact programs
                                </p>
                            </div>

                            <div className="space-y-8">
                                {communityEngagement.map((initiative, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-[#FAEAB1]/50"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-gradient-to-br from-[#34656D] to-[#334443] rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg">
                                                    {idx === 0 ? "🏥" : idx === 1 ? "🎉" : "🌱"}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                                    <h3 className="text-2xl font-bold text-[#334443] mb-2">
                                                        {initiative.title}
                                                    </h3>
                                                    <span className="inline-block px-4 py-2 bg-[#FAEAB1]/50 text-[#334443] rounded-full text-sm font-semibold">
                                                        {initiative.period}
                                                    </span>
                                                </div>
                                                <p className="text-[#334443]/80 mb-4 leading-relaxed">
                                                    {initiative.description}
                                                </p>
                                                <div className="flex items-start gap-2 p-4 bg-[#FAEAB1]/20 rounded-lg border border-[#FAEAB1]">
                                                    <span className="text-[#34656D] text-xl">💡</span>
                                                    <p className="text-[#334443] font-medium">
                                                        <strong>Impact:</strong> {initiative.impact}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
        </>
    );
}

function ProjectCard({ project, index }) {
    const projectIcons = {
        "AI-Based Fraud Detection System": ShieldCheck,
        "Financial Forecasting Models": TrendingUp,
        "Cost Optimization Initiative": DollarSign
    };

    const Icon = projectIcons[project.title] || TrendingUp;

    return (
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full flex flex-col border border-[#FAEAB1]/50">
            {/* Project Icon Header */}
            <div className="h-48 bg-gradient-to-br from-[#34656D] to-[#334443] flex items-center justify-center">
                <Icon className="w-24 h-24 text-white" />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#334443] mb-3">
                    {project.title}
                </h3>
                <p className="text-[#334443]/80 mb-4 flex-1">
                    {project.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-4 p-4 bg-gradient-to-r from-[#FAEAB1]/30 to-[#FAEAB1]/50 rounded-lg border-l-4 border-[#34656D]">
                    <p className="text-sm font-semibold text-[#334443]/70 mb-1">
                        Key Impact
                    </p>
                    <p className="text-[#334443] font-bold">
                        {project.impact}
                    </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                    <p className="text-sm text-[#334443]/60 mb-2 font-semibold">
                        Tools & Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-[#34656D]/10 text-[#34656D] rounded-full text-xs font-semibold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <p className="text-sm text-[#334443]/60 mb-2 font-semibold">
                        Key Achievements:
                    </p>
                    <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-[#334443]/80"
                            >
                                <span className="text-[#34656D] mt-0.5">✓</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}