"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Import Lottie dynamically with no SSR
const Lottie = dynamic(() => import("react-lottie"), {
    ssr: false,
});

export default function LottieAnimation({
    options,
    height = 200,
    width = 400,
    ...props
}: {
    options: {
        loop: boolean;
        autoplay: boolean;
        animationData: any;
        rendererSettings?: {
            preserveAspectRatio: string;
        };
    };
    height?: number;
    width?: number;
    [key: string]: any;
}) {
    // Use state to track if we're on the client
    const [isMounted, setIsMounted] = useState(false);

    // Only run once the component mounts on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Render placeholder with same dimensions during SSR
    if (!isMounted) {
        return <div style={{ height, width }} aria-hidden="true" />;
    }

    // Only render Lottie on the client after component has mounted
    return <Lottie options={options} height={height} width={width} {...props} />;
} 