"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo, education, experiences, skills } from "@/data";

export default function Resume() {
    const handleDownload = () => {
        alert("Resume download functionality - Connect to your actual resume file");
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-black dark:to-indigo-900">
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12 animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                                    Resume
                                </span>
                            </h1>
                            <button
                                onClick={handleDownload}
                                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl flex items-center gap-2 mx-auto"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download PDF
                            </button>
                        </div>

                        {/* Resume Content */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
                            {/* Personal Info */}
                            <div className="text-center mb-12 pb-8 border-b-2 border-gray-200 dark:border-gray-700">
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    {personalInfo.name}
                                </h2>
                                <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                                    {personalInfo.title}
                                </p>
                                <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        {personalInfo.email}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        {personalInfo.phone}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {personalInfo.location}
                                    </span>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-blue-600 rounded"></span>
                                    Professional Summary
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {personalInfo.bio}
                                </p>
                            </div>

                            {/* Experience */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-blue-600 rounded"></span>
                                    Work Experience
                                </h3>
                                <div className="space-y-8">
                                    {experiences.map((exp, idx) => (
                                        <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-600 before:rounded-full">
                                            <div className="mb-2">
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {exp.title}
                                                </h4>
                                                <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                                                    {exp.company}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {exp.period} | {exp.location}
                                                </p>
                                            </div>
                                            <ul className="space-y-2 mt-3">
                                                {exp.responsibilities.slice(0, 3).map((resp, i) => (
                                                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                                        <span className="text-indigo-600 mt-1">•</span>
                                                        <span>{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-blue-600 rounded"></span>
                                    Education
                                </h3>
                                <div className="space-y-6">
                                    {education.map((edu, idx) => (
                                        <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-600 before:rounded-full">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {edu.period} | GPA: {edu.gpa}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-blue-600 rounded"></span>
                                    Technical Skills
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">Languages</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.languages.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">Frameworks</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.frameworks.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">Tools</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.tools.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
        </>
    );
}