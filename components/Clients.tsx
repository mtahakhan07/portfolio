
"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
    return (
        <section id="testimonials" className="py-20">
            <h1 className="heading">
                Kind words from <span className="heading-accent">satisfied clients</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div
                    // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
                    className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-lg:mt-10">
                    {companies.map((company) => (
                        <React.Fragment key={company.id}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/20 bg-black-100/50 hover:bg-black-100/70 transition-all duration-300">
                                <img
                                    src={company.img}
                                    alt={company.name}
                                    className="w-8 h-8 md:w-10 md:h-10"
                                />
                                <span className="text-white text-xs md:text-sm font-medium text-center">
                                    {company.name}
                                </span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
