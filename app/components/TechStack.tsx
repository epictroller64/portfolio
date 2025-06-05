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
    SiSpringboot,
    SiSwift,
    SiPython,
    SiFastapi,
    SiReactrouter,
    SiGo,
    SiPhp
} from 'react-icons/si';

interface TechItem {
    icon: React.ReactNode;
    name: string;
    color: string;
}

const techStack: TechItem[] = [
    {
        icon: <SiTypescript size={24} />,
        name: 'TypeScript',
        color: '#3178C6'
    },
    {
        icon: <SiJavascript size={24} />,
        name: 'JavaScript',
        color: '#F7DF1E'
    },
    {
        icon: <SiReact size={24} />,
        name: 'React',
        color: '#61DAFB'
    },
    {
        icon: <SiNextdotjs size={24} />,
        name: 'Next.js',
        color: '#000000'
    },
    {
        icon: <SiTailwindcss size={24} />,
        name: 'Tailwind CSS',
        color: '#06B6D4'
    },
    {
        icon: <SiNodedotjs size={24} />,
        name: 'Node.js',
        color: '#339933'
    },
    {
        icon: <SiMongodb size={24} />,
        name: 'MongoDB',
        color: '#47A248'
    },
    {
        icon: <SiPostgresql size={24} />,
        name: 'PostgreSQL',
        color: '#336791'
    },
    {
        icon: <SiGit size={24} />,
        name: 'Git',
        color: '#F05032'
    },
    {
        icon: <SiDocker size={24} />,
        name: 'Docker',
        color: '#2496ED'
    },
    {
        icon: <SiSpringboot size={24} />,
        name: 'Spring Boot',
        color: '#6DB33F'
    },
    {
        icon: <SiSwift size={24} />,
        name: 'Swift',
        color: '#FFAC45'
    },
    {
        icon: <SiPython size={24} />,
        name: 'Python',
        color: '#306998'
    },
    {
        icon: <SiFastapi size={24} />,
        name: 'FastAPI',
        color: '#009688'
    },
    {
        icon: <SiReact size={24} />,
        name: 'React Native',
        color: '#61DAFB'
    },
    {
        icon: <SiGo size={24} />,
        name: 'Go',
        color: '#00ADD8'
    },
    {
        icon: <SiPhp size={24} />,
        name: 'PHP',
        color: '#777BB4'
    }
];

export const TechStack = () => {
    return (
        <div className="w-full max-w-4xl mx-auto" id="tech-stack">
            <h2 className="text-4xl text-start text-foreground font-medium mb-8">Tech Stack</h2>
            <p className="text-lg text-foreground font-medium mb-8">Technologies I have worked with.</p>
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-3xl" style={{ color: tech.color }}>
                                {tech.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 