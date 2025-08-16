"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    // set true for the initial state so that nav bar is visible in the hero section
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                // also set true for the initial state
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-6 md:top-6 inset-x-0 mx-auto px-3 md:px-8 py-2 md:py-4 rounded-xl md:rounded-2xl border border-white/10 shadow-2xl items-center justify-center space-x-2 md:space-x-6",
                    className
                )}
                style={{
                    backdropFilter: "blur(32px) saturate(200%)",
                    backgroundColor: "rgba(4, 7, 29, 0.8)",
                    border: "1px solid rgba(203, 172, 249, 0.2)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative text-white/80 hover:text-white items-center flex space-x-1 transition-all duration-300 px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl hover:bg-white/5 font-medium"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="text-xs md:text-sm !cursor-pointer">{navItem.name}</span>
                    </Link>
                ))}
                {/* remove this login btn */}
                {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
            </motion.div>
        </AnimatePresence>
    );
};