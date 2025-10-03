"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, communityEngagement } from "@/data";

export default function Projects() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-cyan-900">
                {/* Professional Projects Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16 animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    Key Projects & Achievements
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>

                        {/* Community Engagement Section */}
                        <div className="mt-24">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                        Community Engagement
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                    Strategic initiatives and social impact programs
                                </p>
                            </div>

                            <div className="space-y-8">
                                {communityEngagement.map((initiative, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg">
                                                    {idx === 0 ? "🏥" : idx === 1 ? "🎉" : "🌱"}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                        {initiative.title}
                                                    </h3>
                                                    <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                                                        {initiative.period}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                                    {initiative.description}
                                                </p>
                                                <div className="flex items-start gap-2 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                                    <span className="text-green-600 dark:text-green-400 text-xl">💡</span>
                                                    <p className="text-green-700 dark:text-green-300 font-medium">
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

function ProjectCard({ project }) {
    const projectIcons = {
        "AI-Based Fraud Detection System": "🔐",
        "Financial Forecasting Models": "📊",
        "Cost Optimization Initiative": "💰"
    };

    return (
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full flex flex-col">
            {/* Project Icon Header */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-7xl">
                    {projectIcons[project.title] || "📈"}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">
                        Key Impact
                    </p>
                    <p className="text-green-900 dark:text-green-100 font-bold">
                        {project.impact}
                    </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">
                        Tools & Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">
                        Key Achievements:
                    </p>
                    <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                            >
                                <span className="text-blue-500 mt-0.5">✓</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}