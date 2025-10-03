"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { personalInfo } from "@/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const [isHoveringLogo, setIsHoveringLogo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
        { href: "/resume", label: "Resume" },
        { href: "/contact", label: "Contact" }
    ];

    const firstName = personalInfo.name.split(" ")[0];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/40"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Animated Logo */}
                    <Link href="/">
                        <motion.h1
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-2xl font-bold bg-gradient-to-r from-[#34656D] to-[#334443] bg-clip-text text-transparent"
                        >
                            {firstName}
                        </motion.h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                            >
                                <Link href={link.href}>
                                    <motion.div
                                        className={`relative px-4 py-2 font-medium transition-colors ${activeLink === link.href
                                                ? "text-[#34656D]"
                                                : "text-[#334443]"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveLink(link.href)}
                                    >
                                        {link.label}

                                        {/* Hover underline effect */}
                                        <motion.span
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#34656D] to-[#334443]"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Active indicator */}
                                        {activeLink === link.href && (
                                            <motion.span
                                                layoutId="activeLink"
                                                className="absolute inset-0 bg-[#FAEAB1]/20 rounded-lg -z-10"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors"
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6 text-[#334443]" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6 text-[#334443]" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden"
                    >
                        <motion.div
                            className="px-4 py-4 space-y-2 bg-white/90 backdrop-blur-xl border-b border-white/40"
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                >
                                    <Link href={link.href}>
                                        <motion.div
                                            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${activeLink === link.href
                                                    ? "bg-gradient-to-r from-[#34656D]/10 to-[#334443]/10 text-[#34656D]"
                                                    : "text-[#334443] hover:bg-[#FAEAB1]/30"
                                                }`}
                                            whileHover={{ x: 5, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                setActiveLink(link.href);
                                                setIsMobileMenuOpen(false);
                                            }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{link.label}</span>
                                                {activeLink === link.href && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="w-2 h-2 rounded-full bg-[#34656D]"
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}   