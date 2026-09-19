import React from "react";

const SectionHeading = ({
    kicker,
    description,
    children,
}: {
    kicker: string;
    description: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="relative z-10 mx-auto max-w-4xl px-2 text-center">
            <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-white-200/70 font-medium">
                {kicker}
            </p>
            <h2 className="heading mt-3 sm:mt-4">{children}</h2>
            <p className="text-white-100 text-sm md:text-lg text-center mt-5 md:mt-6 max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default SectionHeading;
