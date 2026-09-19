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

const LogoMark = () => (
    <Link
        href="#top"
        aria-label="Muhammad Taha Khan — Home"
        className="group flex items-center gap-2.5 pr-3 md:pr-5 md:mr-1 shrink-0"
    >
        <span className="relative flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-purple to-cyan-400 shadow-[0_0_18px_rgba(203,172,249,0.35)]">
            <span className="flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center rounded-full bg-[#04071d] text-[13px] md:text-sm font-bold text-white tracking-tight group-hover:text-purple transition-colors">
                T
            </span>
        </span>
        <span className="hidden sm:block text-sm font-semibold tracking-tight text-white whitespace-nowrap">
            Muhammad Taha Khan
        </span>
    </Link>
);

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
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const direction = current - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else if (direction < 0) {
                setVisible(true);
            } else {
                setVisible(false);
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
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                    "flex w-[min(94vw,880px)] lg:w-[min(92vw,920px)] fixed z-[5000] top-4 md:top-6 inset-x-0 mx-auto items-center justify-between gap-2 md:gap-4 px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full",
                    className
                )}
                style={{
                    backdropFilter: "blur(28px) saturate(180%)",
                    backgroundColor: "rgba(4, 7, 29, 0.72)",
                    border: "1px solid rgba(203, 172, 249, 0.22)",
                    boxShadow:
                        "0 18px 40px -16px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                }}
            >
                <LogoMark />

                <div className="flex items-center justify-end gap-0.5 sm:gap-1 md:gap-1.5 min-w-0">
                    {navItems.map((navItem, idx) => (
                        <Link
                            key={`link-${idx}`}
                            href={navItem.link}
                            className="relative text-white/70 hover:text-white items-center flex transition-all duration-300 px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-white/8 font-medium text-[11px] sm:text-xs md:text-sm"
                        >
                            {navItem.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
