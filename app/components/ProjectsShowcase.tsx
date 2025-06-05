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
    SiFastapi,
    SiWebassembly,
    SiHtml5,
    SiWebpack
} from 'react-icons/si';

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
    webassembly: { icon: <SiWebassembly size={20} />, color: '#000000' },
    html: { icon: <SiHtml5 size={20} />, color: '#E34F26' },
    webpack: { icon: <SiWebpack size={20} />, color: '#8ED6FB' },
};

interface Project {
    title: string;
    description: string;
    link: string;
    github?: string;
    tech: string[];
}

const projects: Project[] = [
    {
        title: "HTML5 Barcode/QR code scanner",
        description: "A simple HTML5 barcode/QR code scanner based on zxing/wasm library. It uses the browser's camera to scan barcodes and QR codes. It also has a simple UI for scanning barcodes and QR codes.",
        link: "https://qr-scanner-demo-xi.vercel.app/",
        github: "https://github.com/epictroller64/qr-scanner",
        tech: ["html", "javascript", "typescript", "webpack", "webassembly"]
    },
    {
        title: "Company Statistics",
        description: "Shows Estonian company statistics including ownership, employees, revenue, and more. Data is fetched from multiple public datasets, such as OpenSanctions and Statistikaamet.",
        link: "https://ee-stats-frontend.vercel.app/",
        github: "https://github.com/epictroller64/ee-stats-frontend",
        tech: ["typescript", "react", "postgresql", "springboot"]
    },
    {
        title: "Currency Converter App",
        description: "Currency converter app with 3rd party API integration.",
        link: "https://github.com/epictroller64/currency-exchange-app",
        github: "https://github.com/epictroller64/currency-exchange-app",
        tech: ["swift", "apple", "xcode"]
    },
    {
        title: "Loan comparsion website/blog",
        description: "A website/blog that compares loans from different banks. For affiliate marketing.",
        link: "https://www.soodsamlaen.ee/",
        tech: ["typescript", "react", "nextjs", "tailwind"]
    },
    {
        title: "iTurg - Scraping and price comparion website",
        description: "Scrape on sale Apple products from local estonian markeplaces. Stores historic prices. Website tries to resemble Apple's design.",
        link: "https://iturg.ee/",
        github: "https://github.com/epictroller64/iturg-app",
        tech: ["typescript", "react", "nextjs", "tailwind", "python", "fastapi"]
    },
    {
        title: "Simple time tracking app for daily activity",
        description: "Track your time spent on activities. View statistics and see exactly where you spend your time.",
        link: "https://time-tracker-gamma-three.vercel.app/",
        github: "https://github.com/epictroller64/time-tracker",
        tech: ["typescript", "react", "nextjs", "tailwind"]
    },
    {
        title: "Price tracker for Ebay",
        description: "Track prices and stock levels for given ebay products. Get notified on Telegram when your conditions are met. Useful for ebay sellers, for example tracking your competitor prices.",
        link: "https://ebay.ohh.ee/",
        github: "https://github.com/epictroller64/Ebay-pricechecker-backend",
        tech: ["typescript", "react", "nextjs", "tailwind", "python", "fastapi"]
    },
    {
        title: "Vipkasiinoboonused",
        description: "Affiliate marketing website for online casinos in estonia.",
        link: "https://www.vipkasiinoboonused.ee/",
        tech: ["typescript", "react", "nextjs", "tailwind"]
    }
];





export const ProjectsShowcase = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-4xl text-start text-foreground font-medium mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-black text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
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
                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    View Project →
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-200 font-medium"
                                    >
                                        GitHub →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <GithubProfile></GithubProfile>
            </div>
        </div>
    );
};


const GithubProfile = () => {
    return (
        <a
            href="https://github.com/epictroller64"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <h3 className="text-xl font-semibold">View GitHub Profile</h3>
                </div>
                <p className="text-gray-400 text-sm">Check out more of my projects and contributions on GitHub</p>
            </div>
        </a>
    )
}