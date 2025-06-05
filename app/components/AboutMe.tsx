

export default function AboutMe() {
    return (
        <div className="w-full max-w-4xl mx-auto" id="about-me">
            <h2 className="text-4xl text-start text-foreground font-medium mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                    I'm a passionate full-stack developer with a strong focus on <span className="font-semibold text-blue-600">JavaScript/TypeScript</span> and <span className="font-semibold text-green-600">Python</span>.
                </p>
                <p>
                    Based in <span className="font-semibold">Estonia</span>, I began my journey as a self-taught developer, out of the need to create scripts for my favorite games.
                    Soon after I got into automation libraries, creating specialized bots or scrapers, mainly on <span className="font-semibold text-green-600">Python and C#</span>.
                    As time went on, I started to get more and more interested in web development, and that's when I got into technologies like <span className="font-semibold text-blue-600">React, NodeJS, Golang</span>.
                </p>
                <p>
                    Recently, I've been expanding my horizons by diving into different programming languages and frameworks.
                    My goal is to create at least one meaningful project in as many languages as possible,
                    constantly pushing the boundaries of what I can build.
                </p>
                <p>
                    Beyond web development, I'm fascinated by the intersection of technology and everyday life,
                    always looking for opportunities to create tools that make people's lives easier and more efficient.
                </p>
            </div>
        </div>
    )
}