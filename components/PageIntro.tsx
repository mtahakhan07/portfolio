"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageIntro = ({ onComplete }: { onComplete?: () => void }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setVisible(false);
            onComplete?.();
        }, 1100);
        return () => window.clearTimeout(timeout);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[6000] flex items-center justify-center bg-[#000319]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.86 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.06 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-purple to-cyan-400 shadow-[0_0_40px_rgba(203,172,249,0.35)]">
                            <span className="flex h-[calc(100%-3px)] w-[calc(100%-3px)] items-center justify-center rounded-full bg-[#04071d] text-2xl font-bold text-white">
                                T
                            </span>
                        </span>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.45 }}
                            className="text-sm tracking-[0.28em] uppercase text-white/60"
                        >
                            Muhammad Taha Khan
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageIntro;
