"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { Linkedin, Mail, Phone, ArrowRight, TrendingUp, PieChart, BarChart3, Target, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
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
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-96 h-96 bg-[#34656D]/5 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * 2,
                y: mousePosition.y * 2,
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-[#FAEAB1]/20 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * -1.5,
                y: mousePosition.y * -1.5,
                scale: [1.2, 1, 1.2],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <h1 className="text-5xl md:text-7xl font-bold">
                      <span className="block text-[#334443]">Hi, I'm</span>
                      <span className="block bg-gradient-to-r from-[#34656D] via-[#334443] to-[#34656D] bg-clip-text text-transparent">
                        {personalInfo.name}
                      </span>
                    </h1>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl md:text-2xl text-[#34656D] font-medium"
                  >
                    {personalInfo.title}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-lg text-[#334443]/70 max-w-xl"
                  >
                    {personalInfo.tagline}
                  </motion.p>
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white/70 backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3 border border-white/40"
                      >
                        <Icon className="w-5 h-5 text-[#34656D]" />
                        <span className="text-[#334443] font-medium">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#34656D] to-[#334443] text-white rounded-full font-semibold shadow-lg hover:shadow-2xl flex items-center gap-2 cursor-pointer"
                    >
                      Get In Touch
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                  <Link href="/projects">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/70 backdrop-blur-lg text-[#334443] rounded-full font-semibold shadow-lg hover:shadow-2xl border-2 border-[#34656D] cursor-pointer"
                    >
                      View Projects
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - Modern Financial Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[600px] flex items-center justify-center"
              >
                <ModernFinancialVisualization mousePosition={mousePosition} />
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-[#34656D] rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-[#34656D] rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ModernFinancialVisualization({ mousePosition }) {
  const cards = [
    { icon: TrendingUp, label: "Financial Growth", value: "+40%", color: "from-[#34656D] to-[#34656D]/80", delay: 0 },
    { icon: PieChart, label: "Cost Efficiency", value: "15%", color: "from-[#334443] to-[#334443]/80", delay: 0.2 },
    { icon: BarChart3, label: "ROI Increase", value: "+98%", color: "from-[#34656D] to-[#FAEAB1]", delay: 0.4 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Glass Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          className="w-64 h-64 bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl flex items-center justify-center"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
          }}
        >
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#34656D] to-[#334443] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-4xl text-white font-bold">₹</span>
            </div>
            <h3 className="text-2xl font-bold text-[#334443]">Financial</h3>
            <p className="text-[#34656D] font-semibold">Excellence</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Metric Cards */}
      {cards.map((card, idx) => {
        const Icon = card.icon;
        const angle = (idx / cards.length) * Math.PI * 2;
        const radius = 220;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: x,
              y: y,
            }}
            transition={{
              delay: card.delay,
              duration: 0.6,
            }}
            whileHover={{ scale: 1.1, zIndex: 20 }}
            className="absolute"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: idx * 0.5,
                ease: "easeInOut"
              }}
              className={`bg-gradient-to-br ${card.color} backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 w-40`}
            >
              <Icon className="w-8 h-8 text-white mb-2" />
              <p className="text-xs text-white/80 font-semibold mb-1">{card.label}</p>
              <p className="text-2xl text-white font-bold">{card.value}</p>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {cards.map((_, idx) => {
          const angle = (idx / cards.length) * Math.PI * 2;
          const radius = 220;
          const x = Math.cos(angle) * radius + 300;
          const y = Math.sin(angle) * radius + 300;

          return (
            <motion.line
              key={idx}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: idx * 0.2 }}
              x1="300"
              y1="300"
              x2={x}
              y2={y}
              stroke="url(#gradient)"
              strokeWidth="2"
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34656D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#334443" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(8)].map((_, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 4 + idx,
            repeat: Infinity,
            delay: idx * 0.5,
          }}
          className="absolute w-2 h-2 bg-[#34656D] rounded-full"
          style={{
            left: `${20 + (idx * 10)}%`,
            top: `${30 + (idx * 5)}%`,
          }}
        />
      ))}

      {/* Orbiting Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-96 h-96 border-2 border-[#34656D]/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[450px] h-[450px] border-2 border-[#FAEAB1]/20 rounded-full"
      />
    </div>
  );
}