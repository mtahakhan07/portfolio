"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
    const socialLinks = [
        {
            icon: <FaGithub />,
            href: "https://github.com/mtahakhan07",
            label: "GitHub"
        },
        {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/muhammad-taha-khan-734a0b236/",
            label: "LinkedIn"
        },
        {
            icon: <FaTwitter />,
            href: "https://twitter.com/mtkhan",
            label: "Twitter"
        }
    ];

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="w-full pt-20 pb-10 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/90 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Muhammad Taha Khan
                        </h3>
                        <p className="text-white-200 mb-6 max-w-md leading-relaxed">
                            Full Stack Developer and GenAI Engineer passionate about creating
                            innovative solutions that drive business growth and user satisfaction.
                        </p>
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position="right"
                            handleClick={() => {
                                document.getElementById('contact')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        />
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white-200 hover:text-purple transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
                        <div className="flex flex-col space-y-4">
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full border border-white/10 bg-black-200/50 backdrop-blur-sm flex items-center justify-center text-white-200 hover:text-purple hover:border-purple/50 transition-all duration-300"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="text-white-200 text-sm">
                                <p>mtaha.khan2004@gmail.com</p>
                                <p className="mt-1">+923015177988</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-white/10 my-12"
                />

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <div className="text-white-200 text-sm text-center md:text-left">
                        <p>&copy; 2024 Muhammad Taha Khan. All rights reserved.</p>
                    </div>

                    <div className="flex items-center gap-6 text-white-200 text-sm">
                        <motion.a
                            href="/privacy"
                            whileHover={{ color: "#CBACF9" }}
                            className="hover:text-purple transition-colors duration-300"
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a
                            href="/terms"
                            whileHover={{ color: "#CBACF9" }}
                            className="hover:text-purple transition-colors duration-300"
                        >
                            Terms of Service
                        </motion.a>
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-purple/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </footer>
    );
};

export default Footer;
