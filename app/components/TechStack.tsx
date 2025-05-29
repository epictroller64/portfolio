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
    SiDocker
} from 'react-icons/si';

interface TechItem {
    icon: React.ReactNode;
    name: string;
    color: string;
}

const techStack: TechItem[] = [
    { icon: <SiTypescript size={24} />, name: 'TypeScript', color: '#3178C6' },
    { icon: <SiJavascript size={24} />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiReact size={24} />, name: 'React', color: '#61DAFB' },
    { icon: <SiNextdotjs size={24} />, name: 'Next.js', color: '#000000' },
    { icon: <SiTailwindcss size={24} />, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: <SiNodedotjs size={24} />, name: 'Node.js', color: '#339933' },
    { icon: <SiMongodb size={24} />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiPostgresql size={24} />, name: 'PostgreSQL', color: '#336791' },
    { icon: <SiGit size={24} />, name: 'Git', color: '#F05032' },
    { icon: <SiDocker size={24} />, name: 'Docker', color: '#2496ED' },
];

export const TechStack = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-4xl text-start text-foreground font-medium mb-8">Tech Stack</h2>
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
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