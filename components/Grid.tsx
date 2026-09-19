import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import SectionHeading from "./SectionHeading";

const Grid = () => {
    return (
        <section id="about" className="relative z-10 w-full py-20 scroll-mt-32">
            <SectionHeading
                kicker="About"
                description="A quick look at how I work, what I build with, and the problems I like to solve."
            >
                About <span className="heading-accent">Me</span>
            </SectionHeading>
            <BentoGrid className="w-full mt-12">
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        id={item.id}
                        key={i}
                        title={item.title}
                        description={item.description}
                        // remove icon prop
                        // remove original classname condition
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;