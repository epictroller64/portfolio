import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiPrisma,
    SiExpress,
    SiSocketdotio,
    SiSpringboot,
    SiSwift,
    SiApple,
    SiXcode,
    SiPython,
    SiFastapi
} from 'react-icons/si';
import { useState } from 'react';

interface TechIcon {
    icon: React.ReactNode;
    color: string;
}

const techIcons: Record<string, TechIcon> = {
    typescript: { icon: <SiTypescript size={20} />, color: '#3178C6' },
    javascript: { icon: <SiJavascript size={20} />, color: '#F7DF1E' },
    react: { icon: <SiReact size={20} />, color: '#61DAFB' },
    nextjs: { icon: <SiNextdotjs size={20} />, color: '#000000' },
    tailwind: { icon: <SiTailwindcss size={20} />, color: '#06B6D4' },
    nodejs: { icon: <SiNodedotjs size={20} />, color: '#339933' },
    mongodb: { icon: <SiMongodb size={20} />, color: '#47A248' },
    postgresql: { icon: <SiPostgresql size={20} />, color: '#336791' },
    git: { icon: <SiGit size={20} />, color: '#F05032' },
    docker: { icon: <SiDocker size={20} />, color: '#2496ED' },
    prisma: { icon: <SiPrisma size={20} />, color: '#2D3748' },
    express: { icon: <SiExpress size={20} />, color: '#000000' },
    socketio: { icon: <SiSocketdotio size={20} />, color: '#010101' },
    springboot: { icon: <SiSpringboot size={20} />, color: '#6DB33F' },
    swift: { icon: <SiSwift size={20} />, color: '#FFAC45' },
    apple: { icon: <SiApple size={20} />, color: '#000000' },
    xcode: { icon: <SiXcode size={20} />, color: '#1575F9' },
    python: { icon: <SiPython size={20} />, color: '#306998' },
    fastapi: { icon: <SiFastapi size={20} />, color: '#009688' },
};

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    tech: string[];
}

const projects: Project[] = [
    {
        title: "Company Statistics",
        description: "Shows Estonian company statistics including ownership, employees, revenue, and more. Data is fetched from multiple public datasets, such as OpenSanctions and Statistikaamet.",
        image: "/company-statistics.png",
        link: "https://github.com/yourusername/company-statistics",
        tech: ["typescript", "react", "postgresql", "springboot"]
    },
    {
        title: "Currency Converter App",
        description: "Currency converter app with 3rd party API integration.",
        image: "/currency-converter.png",
        link: "https://github.com/yourusername/currency-converter",
        tech: ["swift", "apple", "xcode"]
    },
    {
        title: "Loan comparsion website/blog",
        description: "A website/blog that compares loans from different banks. For affiliate marketing.",
        image: "/loan-comparison.png",
        link: "https://github.com/yourusername/loan-comparison",
        tech: ["typescript", "react", "nextjs", "tailwind"]
    },
    {
        title: "iTurg - Scraping and price comparion website",
        description: "Scrape on sale Apple products from local estonian markeplaces. Stores historic prices. Website tries to resemble Apple's design.",
        image: "/iturg.png",
        link: "https://github.com/yourusername/iturg",
        tech: ["typescript", "react", "nextjs", "tailwind", "python", "fastapi"]
    },
    {
        title: "Simple time tracking app for daily activity",
        description: "Track your time spent on activities. View statistics and see exactly where you spend your time.",
        image: "/time-tracker.png",
        link: "https://time-tracker-gamma-three.vercel.app/",
        tech: ["typescript", "react", "nextjs", "tailwind"]
    },
];



const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative h-48 w-full bg-black">
            {!imageLoaded && !imageError && (
                null
            )}
            {imageError && (
                null
            )}
            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
            />
        </div>
    );
};

export const ProjectsShowcase = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-black text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                    <ProjectImage src={project.image} alt={project.title} />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                                <div
                                    key={tech}
                                    className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-md"
                                    style={{ color: techIcons[tech].color }}
                                >
                                    {techIcons[tech].icon}
                                    <span className="text-xs font-medium capitalize">{tech}</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
