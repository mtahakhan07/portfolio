import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/moving-border";

const Experience = () => {
    return (
        <div className="py-20 w-full">
            <h1 className="heading">
                My <span className="heading-accent">work experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        //   random duration will be fun , I think , may be not
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            //   add these two
                            //   you can generate the color from here https://cssgradient.io/
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        // remove bg-white dark:bg-slate-900
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-start p-4 py-6 md:p-6 lg:p-8 gap-4">
                            <div className="flex-shrink-0">
                                <img
                                    src={card.thumbnail}
                                    alt={card.thumbnail}
                                    className="lg:w-24 md:w-20 w-16 rounded-lg"
                                />
                            </div>
                            <div className="flex-1 lg:ms-4">
                                <div className="mb-3">
                                    <h2 className="text-start text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">
                                        {card.title}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 mb-2 text-start">
                                        <span className="text-purple font-semibold text-sm md:text-base text-start">
                                            {card.company}
                                        </span>
                                        <span className="hidden sm:block text-white-200 self-start">•</span>
                                        <span className="text-white-200 text-xs md:text-sm font-medium text-start">
                                            {card.duration}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-start text-white-100 text-sm md:text-base leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;