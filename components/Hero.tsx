import { cn } from "@/lib/utils";
import React from 'react'
import { Spotlight } from './ui/spotlight-new'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./MagicButton";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    return (
        <div className='relative min-h-screen pt-24 md:pt-28 lg:pt-32 pb-0'>
            <div className='-top-40 -left-10 md:-left-32 md:-top-20 h-full'>
                <Spotlight />

                <div className="flex h-full w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
                    <div
                        className={cn(
                            "absolute inset-0",
                            "[background-size:40px_40px]",
                            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                            "dark:[background-image:linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)]",
                        )}
                    />
                </div>
                <div className="flex justify-center relative py-8 md:py-12 lg:py-16 z-10">
                    <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-start gap-8 md:gap-10 lg:gap-16">
                        {/* Premium Profile Image Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative order-2 lg:order-1"
                        >
                            {/* Animated Gradient Border */}
                            <div className="relative p-1 rounded-full bg-gradient-to-r from-purple via-blue-500 to-cyan-500 animate-pulse">
                                <div className="relative p-2 bg-black-100 rounded-full">
                                    <div className="relative w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                        <Image
                                            src="/mypic.JPG"
                                            alt="Taha - Web Developer and GenAI Engineer"
                                            fill
                                            className="object-cover object-center"
                                            priority
                                            quality={100}
                                            sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 352px"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black-100/20 via-transparent to-transparent" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Animation Rings */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-purple/30 rounded-full"
                            />
                            <motion.div
                                animate={{
                                    rotate: -360,
                                    scale: [1, 0.9, 1]
                                }}
                                transition={{
                                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-blue-500/30 rounded-full"
                            />
                        </motion.div>

                        {/* Text Content Section */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
                            <TextGenerateEffect
                                className="text-center lg:text-left text-[26px] sm:text-4xl md:text-4xl lg:text-5xl max-w-[28ch]"
                                words="Muhammad Taha Khan — Full Stack Developer and Generative AI Engineer"
                            />
                            <div className="mt-4 self-center lg:self-start">
                                <MagicButton
                                    title="Download Resume"
                                    icon={<MdOutlineFileDownload />}
                                    position="right"
                                    otherClasses="!px-6 sm:!px-8 !py-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero