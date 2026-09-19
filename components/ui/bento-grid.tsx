import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPython,
    SiFastapi,
    SiOpenai,
    SiLangchain,
} from "react-icons/si";

import { cn } from "@/lib/utils";
import { techStack } from "@/data";

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import GridGlobe from "./grid-globe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import LottieAnimation from "./lottie-animation";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    //   remove unecessary things here
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const stackIcons: Record<string, React.ReactNode> = {
        "Next.js": <SiNextdotjs className="w-full h-full" />,
        React: <SiReact className="w-full h-full text-[#58C4DC]" />,
        TypeScript: <SiTypescript className="w-full h-full text-[#3178C6]" />,
        "Node.js": <SiNodedotjs className="w-full h-full text-[#5FA04E]" />,
        Express: <SiExpress className="w-full h-full" />,
        MongoDB: <SiMongodb className="w-full h-full text-[#47A248]" />,
        Python: <SiPython className="w-full h-full text-[#3776AB]" />,
        FastAPI: <SiFastapi className="w-full h-full text-[#009688]" />,
        OpenAI: <SiOpenai className="w-full h-full text-white" />,
        LangChain: <SiLangchain className="w-full h-full text-[#2DD4BF]" />,
    };

    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        const text = "mtaha.khan2004@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full relative overflow-hidden`}>
                {/* Background Image */}
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center opacity-60")}
                        />
                    )}
                    {/* Add default background for cards without images */}
                    {!img && id !== 2 && id !== 6 && (
                        <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-blue-500/5 to-cyan-500/10" />
                    )}
                </div>

                {/* Decorative Elements */}
                {id === 1 && (
                    <div className="absolute inset-0">
                        <div className="absolute top-10 right-10 w-20 h-20 border border-purple/20 rounded-full animate-pulse" />
                        <div className="absolute bottom-10 left-10 w-16 h-16 border border-blue-500/20 rounded-full animate-pulse delay-1000" />
                    </div>
                )}

                {id === 4 && (
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple/10 to-transparent rounded-full" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full" />
                    </div>
                )}

                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                        } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div className={cn(
                        "font-sans font-extralight md:text-xs lg:text-base text-sm text-white z-10",
                        id === 3 ? "max-w-none" : "md:max-w-32"
                    )}>
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={cn(
                            "font-sans text-lg lg:text-3xl font-bold text-white z-20 mb-6",
                            id === 3 ? "max-w-none" : "max-w-96",
                            id === 2 && "relative bg-[#04071D] bg-opacity-90 py-3 px-4 rounded-md shadow-lg"
                        )}
                    >
                        {title}
                    </div>

                    {/* for the github 3d globe */}
                    {id === 2 && (
                        <div className="absolute inset-0 z-10">
                            <GridGlobe />
                        </div>
                    )}

                    {/* Tech stack list div - updated with icons */}
                    {id === 3 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 z-10 mt-2 w-full">
                            {techStack.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black-100/70 px-3 py-4 hover:border-white/25 hover:bg-black-100 transition-colors"
                                    title={item.name}
                                >
                                    <div className="text-white h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9">
                                        {stackIcons[item.name]}
                                    </div>
                                    <span className="text-[11px] md:text-xs text-white-100 text-center leading-tight">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            {/* button border magic from tailwind css buttons  */}
                            {/* add rounded-md h-8 md:h-8, remove rounded-full */}
                            {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
                            {/* add handleCopy() for the copy the text */}
                            <div
                                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                                    }`}
                            >
                                {/* <img src="/confetti.gif" alt="confetti" /> */}
                                <LottieAnimation options={defaultOptions} height={200} width={400} />
                            </div>

                            <MagicButton
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};