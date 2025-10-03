"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: personalInfo.email,
            link: `mailto:${personalInfo.email}`
        },
        {
            icon: Phone,
            label: "Phone",
            value: personalInfo.phone,
            link: `tel:${personalInfo.phone}`
        },
        {
            icon: MapPin,
            label: "Location",
            value: personalInfo.location,
            link: null
        }
    ];

    const socialLinks = [
        { name: "LinkedIn", url: personalInfo.socials.linkedin, color: "bg-[#34656D]", icon: Linkedin }
    ];

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
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16 animate-fade-in">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                                    Get In Touch
                                </span>
                            </h1>
                            <p className="text-xl text-[#334443]/70 max-w-3xl mx-auto">
                                Have a project in mind or just want to chat? Feel free to reach out!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div className="space-y-8 animate-slide-left">
                                {/* Info Cards */}
                                <div className="space-y-6">
                                    {contactInfo.map((info, idx) => {
                                        const IconComponent = info.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#FAEAB1]/50"
                                            >
                                                {info.link ? (
                                                    <a href={info.link} className="flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-gradient-to-r from-[#34656D] to-[#334443] rounded-full flex items-center justify-center text-white">
                                                            <IconComponent className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-[#334443]/60">
                                                                {info.label}
                                                            </p>
                                                            <p className="text-lg font-semibold text-[#334443] hover:text-[#34656D] transition-colors">
                                                                {info.value}
                                                            </p>
                                                        </div>
                                                    </a>
                                                ) : (
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-gradient-to-r from-[#34656D] to-[#334443] rounded-full flex items-center justify-center text-white">
                                                            <IconComponent className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-[#334443]/60">
                                                                {info.label}
                                                            </p>
                                                            <p className="text-lg font-semibold text-[#334443]">
                                                                {info.value}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Social Links */}
                                <div className="bg-gradient-to-br from-[#34656D] to-[#334443] rounded-2xl p-8 text-white shadow-xl">
                                    <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
                                    <div className="space-y-4">
                                        {socialLinks.map((social, idx) => {
                                            const SocialIcon = social.icon;
                                            return (
                                                <a
                                                    key={idx}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all transform hover:scale-105"
                                                >
                                                    <div className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white`}>
                                                        <SocialIcon className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-semibold">{social.name}</span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="animate-slide-right">
                                <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#FAEAB1]/50">
                                    <h2 className="text-3xl font-bold text-[#334443] mb-6">
                                        Send a Message
                                    </h2>

                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-[#34656D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Send className="w-10 h-10 text-[#34656D]" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#334443] mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-[#334443]/70">
                                                Thank you for reaching out. I'll get back to you soon!
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-[#334443] mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#FAEAB1] bg-white text-[#334443] focus:border-[#34656D] focus:outline-none transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-[#334443] mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#FAEAB1] bg-white text-[#334443] focus:border-[#34656D] focus:outline-none transition-colors"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-[#334443] mb-2">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#FAEAB1] bg-white text-[#334443] focus:border-[#34656D] focus:outline-none transition-colors"
                                                    placeholder="What's this about?"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-[#334443] mb-2">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="5"
                                                    className="w-full px-4 py-3 rounded-lg border-2 border-[#FAEAB1] bg-white text-[#334443] focus:border-[#34656D] focus:outline-none transition-colors resize-none"
                                                    placeholder="Tell me about your project or inquiry..."
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full px-8 py-4 bg-gradient-to-r from-[#34656D] to-[#334443] text-white rounded-lg font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
                                            >
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </button>
                                        </form>
                                    )}
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

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.6s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.6s ease-out;
        }
      `}</style>
        </>
    );
} 