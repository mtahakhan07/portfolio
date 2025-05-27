import { cn } from "@/lib/utils";
import React from 'react'
import { Spotlight } from './ui/spotlight-new'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./MagicButton";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
    return (
        <div className='pb-20 pt-36 h-screen'>
            <div className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'>
                <Spotlight />

                <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
                    <div
                        className={cn(
                            "absolute inset-0",
                            "[background-size:40px_40px]",
                            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                            "dark:[background-image:linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)]",
                        )}
                    />
                </div>
                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic web magic with next.js</h2>
                        <TextGenerateEffect
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            words="Transforming Concepts Into Seamless User Experiences"
                        />
                        <p className="text-center text-blue-100 md:tracking-wider my-4 text-sm md:text-lg">
                            Hi, I&apos;m Taha, a Web Developer and GenAI Engineer</p>
                        <MagicButton
                            title="Download Resume"
                            icon={<MdOutlineFileDownload />}
                            position="right"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero