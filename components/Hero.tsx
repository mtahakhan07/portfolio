"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { SequentialTypewriter } from "./ui/typing-animation";
import MagicButton from "./MagicButton";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import {
    HiOutlineAcademicCap,
    HiOutlineSparkles,
    HiOutlineCodeBracket,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

const HeroActions = ({ className }: { className?: string }) => {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className={cn("flex flex-col items-center lg:items-start gap-8", className)}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
                <MagicButton
                    title="View Projects"
                    icon={<FaLocationArrow />}
                    position="right"
                    otherClasses="!px-6 sm:!px-8 !py-3"
                    containerClassName="md:!mt-0"
                    handleClick={scrollToProjects}
                />
                <MagicButton
                    title="Download Resume"
                    icon={<MdOutlineFileDownload />}
                    position="right"
                    otherClasses="!px-6 sm:!px-8 !py-3"
                    containerClassName="md:!mt-0"
                    href="/RESUME_TAHA.pdf"
                    download="Muhammad_Taha_Khan_Resume.pdf"
                />
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-white-200/80 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                    <HiOutlineAcademicCap className="text-purple" />
                    NUST &apos;25
                </span>
                <span className="hidden sm:inline text-white/20">·</span>
                <span className="inline-flex items-center gap-1.5">
                    <HiOutlineSparkles className="text-blue-400" />
                    Automates Businesses with AI
                </span>
                <span className="hidden sm:inline text-white/20">·</span>
                <span className="inline-flex items-center gap-1.5">
                    <HiOutlineCodeBracket className="text-cyan-400" />
                    Web &amp; AI
                </span>
            </div>
        </div>
    );
};

const Hero = ({ startTyping = false }: { startTyping?: boolean }) => {
    return (
        <div className="relative min-h-screen flex flex-col pt-28 md:pt-32 lg:pt-36 xl:pt-40">
            <div className="relative flex-1 flex flex-col justify-center">
                <div className="pointer-events-none fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-black-100" />
                    <div
                        className={cn(
                            "absolute inset-0",
                            "[background-size:40px_40px]",
                            "[background-image:linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)]",
                        )}
                    />
                    <Spotlight />
                </div>

                <div className="relative z-10 w-full py-6 sm:py-10 lg:py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-12 sm:gap-14 lg:gap-20 xl:gap-28">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 w-full max-w-xl lg:max-w-none">
                            <motion.p
                                custom={0.1}
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-white-200/80 font-medium"
                            >
                                Software Engineer · Web · AI
                            </motion.p>

                            <SequentialTypewriter
                                start={startTyping}
                                typeSpeed={50}
                                className="mt-5 sm:mt-6 min-h-[5.5rem] sm:min-h-[7rem] lg:min-h-[8.5rem]"
                                lines={[
                                    {
                                        text: "Muhammad Taha Khan",
                                        as: "h1",
                                        className:
                                            "text-center lg:text-left text-[30px] leading-[1.15] sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[52px] text-white",
                                    },
                                    {
                                        text: "Full-Stack AI Engineer",
                                        as: "h2",
                                        className:
                                            "text-center lg:text-left text-[26px] leading-[1.15] sm:text-4xl md:text-[40px] lg:text-[46px] xl:text-[50px] heading-accent",
                                    },
                                ]}
                            />

                            <motion.p
                                custom={0.85}
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                className="mt-6 sm:mt-8 max-w-md text-sm sm:text-base md:text-lg text-white-100/85 leading-relaxed"
                            >
                                I build production-ready web applications and AI-powered products that solve real-world problems.
                            </motion.p>

                            <motion.div
                                custom={1.05}
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                className="mt-8 sm:mt-10 hidden lg:block w-full"
                            >
                                <HeroActions />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative order-2 justify-self-center lg:justify-self-end"
                        >
                            <div className="relative p-1 rounded-full bg-gradient-to-r from-purple via-blue-500 to-cyan-400">
                                <div className="relative p-2 bg-black-100 rounded-full">
                                    <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[24rem] xl:h-[24rem] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                        <Image
                                            src="/mypic.JPG"
                                            alt="Muhammad Taha Khan — Full-Stack AI Engineer"
                                            fill
                                            className="object-cover object-center"
                                            priority
                                            quality={100}
                                            sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
                                        />
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                }}
                                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-purple/30 rounded-full"
                            />
                            <motion.div
                                animate={{
                                    rotate: -360,
                                    scale: [1, 0.9, 1],
                                }}
                                transition={{
                                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                }}
                                className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-blue-500/30 rounded-full"
                            />
                        </motion.div>

                        <motion.div
                            custom={1.05}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="order-3 lg:hidden w-full"
                        >
                            <HeroActions />
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.button
                type="button"
                onClick={() =>
                    document.getElementById("about")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    })
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="relative z-10 mx-auto lg:mx-0 mb-8 lg:mb-10 flex flex-col items-center lg:items-start gap-1 text-white-200/60 hover:text-white-100 transition-colors"
                aria-label="Scroll to explore"
            >
                <span className="text-[11px] tracking-[0.2em] uppercase">Scroll to explore</span>
                <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="text-lg leading-none"
                >
                    ⌄
                </motion.span>
            </motion.button>
        </div>
    );
};

export default Hero;
