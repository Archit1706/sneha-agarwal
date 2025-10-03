"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo, skills } from "@/data";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const allSkills = [
    ...skills.technical,
    ...skills.software,
    ...skills.specialized
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { name: "LinkedIn", url: personalInfo.socials.linkedin, icon: "💼" },
    { name: "Email", url: personalInfo.socials.email, icon: "📧" },
    { name: "Phone", url: personalInfo.socials.phone, icon: "📱" }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-purple-900">
          {/* Animated Background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold">
                    <span className="block text-gray-900 dark:text-white">
                      Hi, I'm
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      {personalInfo.name}
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                    {personalInfo.title}
                  </p>

                  <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
                    {personalInfo.tagline}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/projects"
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700"
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Right Side - DNA Strand Animation */}
              <div className="relative h-[600px] flex items-center justify-center">
                <DNAStrand skills={allSkills} />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scroll" />
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

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

function DNAStrand({ skills }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full perspective-1000">
      <div
        className="absolute inset-0 transform-gpu"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d"
        }}
      >
        {skills.map((skill, idx) => {
          const angle = (idx / skills.length) * Math.PI * 4;
          const radius = 150;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (idx / skills.length) * 500 - 250;

          return (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 group"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-xl flex items-center justify-center transform hover:scale-125 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}