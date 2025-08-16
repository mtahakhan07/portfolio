"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundBeams } from "./ui/background-beams";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 pointer-events-none">
                <BackgroundBeams />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <h1 className="heading">
                    Ready to take <span className="heading-accent">your digital presence</span> to the next level?
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white-100 md:text-lg text-center mt-6 max-w-2xl mx-auto"
                >
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mt-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative p-8 rounded-3xl border border-white/10 bg-black-100/50 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white-200 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black-200 border border-white/10 text-white placeholder-white-200/50 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent transition-all duration-300"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white-200 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black-200 border border-white/10 text-white placeholder-white-200/50 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white-200 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg bg-black-200 border border-white/10 text-white placeholder-white-200/50 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <div className="w-full">
                                    <MagicButton
                                        title={isSubmitting ? "Sending..." : "Send Message"}
                                        icon={<FaLocationArrow />}
                                        position="right"
                                        otherClasses="w-full !px-8 !py-4"
                                        handleClick={handleSubmit}
                                    />
                                </div>

                                {submitStatus === "success" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-400 text-center text-sm"
                                    >
                                        Message sent successfully! I&apos;ll get back to you soon.
                                    </motion.p>
                                )}

                                {submitStatus === "error" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-center text-sm"
                                    >
                                        Failed to send message. Please try again.
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="relative p-6 rounded-2xl border border-white/10 bg-black-100/30 backdrop-blur-sm">
                            <h4 className="text-lg font-semibold text-white mb-3">Direct Contact</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center">
                                        <span className="text-purple text-sm">📧</span>
                                    </div>
                                    <span className="text-white-200">mtaha.khan2004@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <span className="text-blue-400 text-sm">📱</span>
                                    </div>
                                    <span className="text-white-200">+923015177988</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative p-6 rounded-2xl border border-white/10 bg-black-100/30 backdrop-blur-sm">
                            <h4 className="text-lg font-semibold text-white mb-3">Let&apos;s Connect</h4>
                            <p className="text-white-200 text-sm leading-relaxed">
                                I&apos;m always excited to work on new projects and collaborate with amazing people.
                                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                            </p>
                        </div>

                        <div className="relative p-6 rounded-2xl border border-white/10 bg-black-100/30 backdrop-blur-sm">
                            <h4 className="text-lg font-semibold text-white mb-3">Response Time</h4>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-white-200 text-sm">Usually responds within 24 hours</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
