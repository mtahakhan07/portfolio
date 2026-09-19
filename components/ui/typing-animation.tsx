"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type TypeLine = {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p" | "span";
};

const Cursor = () => (
    <span
        aria-hidden
        className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] rounded-sm bg-purple align-middle animate-[blink-cursor_1.2s_step-end_infinite]"
    />
);

export function SequentialTypewriter({
    lines,
    start = false,
    typeSpeed = 50,
    delay = 180,
    linePause = 220,
    className,
}: {
    lines: TypeLine[];
    start?: boolean;
    typeSpeed?: number;
    delay?: number;
    linePause?: number;
    className?: string;
}) {
    const lineKey = lines.map((line) => line.text).join("|");
    const prepared = useMemo(
        () => lines.map((line) => ({ ...line, chars: Array.from(line.text) })),
        [lineKey]
    );

    const [lineIndex, setLineIndex] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [begun, setBegun] = useState(false);

    useEffect(() => {
        if (!start) {
            setLineIndex(0);
            setCharCount(0);
            setBegun(false);
            return;
        }

        const beginTimer = window.setTimeout(() => setBegun(true), delay);
        return () => window.clearTimeout(beginTimer);
    }, [start, delay]);

    useEffect(() => {
        if (!begun) return;

        const current = prepared[lineIndex];
        if (!current) return;

        if (charCount < current.chars.length) {
            const timer = window.setTimeout(() => {
                setCharCount((count) => count + 1);
            }, typeSpeed);
            return () => window.clearTimeout(timer);
        }

        if (lineIndex < prepared.length - 1) {
            const timer = window.setTimeout(() => {
                setLineIndex((index) => index + 1);
                setCharCount(0);
            }, linePause);
            return () => window.clearTimeout(timer);
        }
    }, [begun, charCount, lineIndex, prepared, typeSpeed, linePause]);

    return (
        <div className={cn("space-y-2 sm:space-y-3", className)}>
            {prepared.map((line, index) => {
                const Tag = line.as ?? "p";
                const visibleCount =
                    index < lineIndex
                        ? line.chars.length
                        : index === lineIndex
                          ? charCount
                          : 0;
                const showCursor = begun && index === lineIndex;

                return (
                    <Tag
                        key={`${line.text}-${index}`}
                        className={cn("font-extrabold tracking-tight", line.className)}
                    >
                        {line.chars.slice(0, visibleCount).join("")}
                        {showCursor && <Cursor />}
                        <span className="sr-only">{line.text}</span>
                    </Tag>
                );
            })}
        </div>
    );
}
