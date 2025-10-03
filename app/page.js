"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo, skills } from "@/data";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { name: "LinkedIn", url: personalInfo.socials.linkedin, icon: Linkedin },
    { name: "Email", url: personalInfo.socials.email, icon: Mail },
    { name: "Phone", url: personalInfo.socials.phone, icon: Phone }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF8F1]">
          {/* Animated Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 101, 109, 0.3), transparent 50%)`
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold">
                    <span className="block text-[#334443]">
                      Hi, I'm
                    </span>
                    <span className="block bg-gradient-to-r from-[#34656D] via-[#334443] to-[#34656D] bg-clip-text text-transparent animate-gradient">
                      {personalInfo.name}
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-[#34656D] font-medium">
                    {personalInfo.title}
                  </p>

                  <p className="text-lg text-[#334443]/70 max-w-xl">
                    {personalInfo.tagline}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 border border-[#FAEAB1]"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <Icon className="w-5 h-5 text-[#34656D]" />
                        <span className="text-[#334443] font-medium">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-[#34656D] to-[#334443] text-white rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/projects"
                    className="px-8 py-4 bg-white text-[#334443] rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl border-2 border-[#34656D]"
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Right Side - Financial Flow Animation */}
              <div className="relative h-[600px] flex items-center justify-center">
                <FinancialFlowAnimation />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#34656D] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#34656D] rounded-full mt-2 animate-scroll" />
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

function FinancialFlowAnimation() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.02);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Financial metrics that flow through the animation
  const metrics = [
    { label: "ROI", value: "+15%", color: "from-[#34656D] to-[#34656D]/80" },
    { label: "Cost", value: "-15%", color: "from-[#334443] to-[#334443]/80" },
    { label: "Profit", value: "+8%", color: "from-[#34656D] to-[#FAEAB1]" },
    { label: "Efficiency", value: "+20%", color: "from-[#334443] to-[#34656D]" },
    { label: "Accuracy", value: "+98%", color: "from-[#34656D] to-[#334443]" },
    { label: "Growth", value: "+40%", color: "from-[#FAEAB1] to-[#34656D]" }
  ];

  // Skills to display in circular orbit
  const skillSet = [
    ...skills.technical,
    ...skills.languages.slice(0, 3),
    ...skills.frameworks.slice(0, 3)
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Hub - Accounting Symbol */}
      <div className="absolute z-20 w-32 h-32 bg-gradient-to-br from-[#34656D] to-[#334443] rounded-full shadow-2xl flex items-center justify-center animate-pulse-slow">
        <div className="text-white text-6xl font-bold">₹</div>
      </div>

      {/* Orbiting Financial Metrics */}
      {metrics.map((metric, idx) => {
        const angle = (idx / metrics.length) * Math.PI * 2 + time;
        const radius = 200;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={idx}
            className="absolute transition-all duration-300 ease-out"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className={`bg-gradient-to-br ${metric.color} rounded-2xl p-4 shadow-xl hover:scale-110 transition-transform cursor-pointer`}>
              <div className="text-white text-center">
                <div className="text-xs font-semibold opacity-80">{metric.label}</div>
                <div className="text-xl font-bold">{metric.value}</div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Connecting Lines - Data Flow */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {metrics.map((_, idx) => {
          const angle = (idx / metrics.length) * Math.PI * 2 + time;
          const radius = 200;
          const x = Math.cos(angle) * radius + 300;
          const y = Math.sin(angle) * radius + 300;

          return (
            <line
              key={idx}
              x1="300"
              y1="300"
              x2={x}
              y2={y}
              stroke="url(#gradient)"
              strokeWidth="2"
              opacity="0.4"
              className="animate-pulse"
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34656D" />
            <stop offset="100%" stopColor="#334443" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Skills Icons */}
      {skillSet.slice(0, 8).map((skill, idx) => {
        const floatAngle = time * 0.5 + idx * 0.8;
        const floatRadius = 280 + Math.sin(time * 2 + idx) * 20;
        const x = Math.cos(floatAngle) * floatRadius;
        const y = Math.sin(floatAngle) * floatRadius;

        return (
          <div
            key={idx}
            className="absolute transition-all duration-500 ease-out"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-125 transition-all border-2 border-[#FAEAB1] group">
              <span className="text-2xl">💰</span>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#334443] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {skill.name}
              </div>
            </div>
          </div>
        );
      })}

      {/* Animated Background Particles */}
      {[...Array(12)].map((_, idx) => {
        const particleAngle = time * 0.3 + idx * 0.5;
        const particleRadius = 100 + (idx % 3) * 50;
        const x = Math.cos(particleAngle) * particleRadius;
        const y = Math.sin(particleAngle) * particleRadius;

        return (
          <div
            key={idx}
            className="absolute w-2 h-2 bg-[#34656D] rounded-full opacity-30"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}