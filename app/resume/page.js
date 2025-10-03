"use client";
import { Download, Mail, Phone, MapPin } from "lucide-react";
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
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12 animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                                    Resume
                                </span>
                            </h1>
                            <button
                                onClick={handleDownload}
                                className="px-8 py-4 bg-gradient-to-r from-[#34656D] to-[#334443] text-white rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl flex items-center gap-2 mx-auto"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
                            </button>
                        </div>

                        {/* Resume Content */}
                        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-[#FAEAB1]/50">
                            {/* Personal Info */}
                            <div className="text-center mb-12 pb-8 border-b-2 border-[#FAEAB1]">
                                <h2 className="text-4xl font-bold text-[#334443] mb-2">
                                    {personalInfo.name}
                                </h2>
                                <p className="text-xl text-[#34656D] font-semibold mb-4">
                                    {personalInfo.title}
                                </p>
                                <div className="flex flex-wrap justify-center gap-6 text-[#334443]/70">
                                    <span className="flex items-center gap-2">
                                        <Mail className="w-5 h-5" />
                                        {personalInfo.email}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        {personalInfo.phone}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        {personalInfo.location}
                                    </span>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#334443] mb-4 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-[#34656D] to-[#334443] rounded"></span>
                                    Professional Summary
                                </h3>
                                <p className="text-[#334443]/80 leading-relaxed">
                                    {personalInfo.bio}
                                </p>
                            </div>

                            {/* Experience */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#334443] mb-6 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-[#34656D] to-[#334443] rounded"></span>
                                    Work Experience
                                </h3>
                                <div className="space-y-8">
                                    {experiences.map((exp, idx) => (
                                        <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#34656D] before:rounded-full">
                                            <div className="mb-2">
                                                <h4 className="text-xl font-bold text-[#334443]">
                                                    {exp.title}
                                                </h4>
                                                <p className="text-lg text-[#34656D] font-semibold">
                                                    {exp.company}
                                                </p>
                                                <p className="text-sm text-[#334443]/60">
                                                    {exp.period} | {exp.location}
                                                </p>
                                            </div>
                                            <ul className="space-y-2 mt-3">
                                                {exp.responsibilities.slice(0, 3).map((resp, i) => (
                                                    <li key={i} className="text-[#334443]/80 flex items-start gap-2">
                                                        <span className="text-[#34656D] mt-1">•</span>
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
                                <h3 className="text-2xl font-bold text-[#334443] mb-6 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-[#34656D] to-[#334443] rounded"></span>
                                    Education
                                </h3>
                                <div className="space-y-6">
                                    {education.map((edu, idx) => (
                                        <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#34656D] before:rounded-full">
                                            <h4 className="text-xl font-bold text-[#334443]">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-lg text-[#34656D] font-semibold">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-[#334443]/60">
                                                {edu.period} | GPA: {edu.gpa}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills */}
                            <div>
                                <h3 className="text-2xl font-bold text-[#334443] mb-6 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-[#34656D] to-[#334443] rounded"></span>
                                    Technical Skills
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="font-bold text-[#334443] mb-3">Standards</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.languages.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-[#34656D]/10 text-[#34656D] rounded-full text-sm">
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#334443] mb-3">Frameworks</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.frameworks.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-[#334443]/10 text-[#334443] rounded-full text-sm">
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#334443] mb-3">Tools</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.tools.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-[#FAEAB1]/50 text-[#334443] rounded-full text-sm">
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