"use client";
import { Linkedin, Mail, Phone, Instagram } from "lucide-react";
import { personalInfo } from "@/data";

export default function Footer() {
    const socialLinks = [
        {
            name: "LinkedIn",
            url: personalInfo.socials.linkedin,
            icon: Linkedin
        },
        {
            name: "Email",
            url: personalInfo.socials.email,
            icon: Mail
        },
        {
            name: "Phone",
            url: personalInfo.socials.phone,
            icon: Phone
        },
        {
            name: "Instagram",
            url: personalInfo.socials.instagram,
            icon: Instagram
        }
    ];

    return (
        <footer className="bg-white border-t border-[#FAEAB1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent">
                            {personalInfo.name}
                        </h3>
                        <p className="text-[#334443]/70">
                            {personalInfo.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#334443]">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {["Home", "About", "Experience", "Projects", "Resume", "Contact"].map((link) => (
                                <li key={link}>
                                    <a
                                        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                        className="text-[#334443]/70 hover:text-[#34656D] transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#334443]">
                            Connect
                        </h4>
                        <div className="space-y-2 mb-4">
                            <p className="text-[#334443]/70">{personalInfo.email}</p>
                            <p className="text-[#334443]/70">{personalInfo.location}</p>
                        </div>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#334443]/70 hover:text-[#34656D] transition-colors hover:scale-110 transform"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#FAEAB1] text-center text-[#334443]/70">
                    <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}