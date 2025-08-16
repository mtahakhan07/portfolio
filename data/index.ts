export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Passionate innovator crafting next-generation digital experiences with cutting-edge technology.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building an AI Powered powerful CRM system",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "/ui.earth.com",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "/ui.yoom.com",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "/ui.apple.com",
    },
];

export const testimonials = [
    {
        quote:
            "Muhammad Taha Khan delivered an exceptional web application that exceeded our expectations. His expertise in full-stack development and AI integration transformed our business processes. The attention to detail and innovative solutions he provided were remarkable. I highly recommend Taha for any complex development project.",
        name: "James Wilson",
        title: "CEO of TechVision Ltd, London, UK",
    },
    {
        quote:
            "Working with Taha was a game-changer for our startup. His ability to understand our requirements and deliver a scalable solution using modern technologies like Next.js and MongoDB was impressive. The project was completed on time and within budget. Truly professional work!",
        name: "Ahmed Hassan",
        title: "Founder of InnovateHub, Karachi, Pakistan",
    },
    {
        quote:
            "Taha's expertise in generative AI and web development helped us build a cutting-edge CRM system. His technical skills combined with excellent communication made the entire development process smooth. The final product has significantly improved our business efficiency.",
        name: "Fatima Ali",
        title: "Operations Director at TechSolutions, Lahore, Pakistan",
    },
    {
        quote:
            "Muhammad Taha Khan is an exceptional developer who brings creativity and technical excellence to every project. His work on our e-commerce platform using React and Node.js was outstanding. The user experience and performance improvements were beyond our expectations.",
        name: "Usman Malik",
        title: "CTO of DigitalCommerce, Islamabad, Pakistan",
    },
];

export const companies = [
    {
        id: 1,
        name: "React.js",
        img: "/re.svg",
        nameImg: "",
    },
    {
        id: 2,
        name: "Three.js",
        img: "/three.svg",
        nameImg: "",
    },
    {
        id: 3,
        name: "Next.js",
        img: "/next.svg",
        nameImg: "",
    },
    {
        id: 4,
        name: "Typescript",
        img: "/ts.svg",
        nameImg: "",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Full Stack Developer (AI and CRM Systems)",
        company: "TDMC",
        duration: "June 2025 - Present",
        desc: "Leading development of AI-powered CRM systems using modern technologies and machine learning integration.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Freelance Software Developer",
        company: "Self Employed",
        duration: "December 2023 - Present",
        desc: "Developed web applications using MERN stack and Next.js and AI-powered chatbot applications using LangChain and LangGraph.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "SAHL",
        duration: "November 2024 - December 2024",
        desc: "Led frontend development with focus on user experience and modern web technologies, delivering high-quality responsive interfaces.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "MERN Stack Intern",
        company: "WALEE Technologies",
        duration: "June 2024 - August 2024",
        desc: "Developed responsive web apps with backend integration and optimized performance using React, Node.js, and MongoDB.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];