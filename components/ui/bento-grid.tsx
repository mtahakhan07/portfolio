import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiGraphql, SiNextdotjs } from "react-icons/si";

import { cn } from "@/lib/utils";

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
    // Replace text lists with icon components
    const leftIcons = [
        { icon: <FaReact className="w-full h-full" />, name: "React" },
        { icon: <SiNextdotjs className="w-full h-full" />, name: "Next.js" },
        { icon: <SiTypescript className="w-full h-full" />, name: "TypeScript" }
    ];

    const rightIcons = [
        { icon: <SiGraphql className="w-full h-full" />, name: "GraphQL" },
        { icon: <FaNodeJs className="w-full h-full" />, name: "Node.js" },
        { icon: <div className="w-full h-full bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">M</div>, name: "MongoDB" }
    ];

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
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-white z-10">
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold text-white z-20 mb-6 ${id === 2 ? "relative bg-[#04071D] bg-opacity-90 py-3 px-4 rounded-md shadow-lg" : ""}`}
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
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 z-10 mt-4 mx-auto w-full">
                            {/* Left icons */}
                            {leftIcons.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center justify-center aspect-square rounded-xl bg-black-100/80 border border-white/10 p-3 hover:bg-black-100 transition-colors"
                                    title={item.name}
                                >
                                    <div className="text-white h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10">
                                        {item.icon}
                                    </div>
                                </div>
                            ))}

                            {/* Right icons */}
                            {rightIcons.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center justify-center aspect-square rounded-xl bg-black-100/80 border border-white/10 p-3 hover:bg-black-100 transition-colors"
                                    title={item.name}
                                >
                                    <div className="text-white h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10">
                                        {item.icon}
                                    </div>
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