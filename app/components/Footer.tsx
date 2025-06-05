const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 px-4 border-t border-slate-200">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 text-slate-600">
                <p>© {currentYear} Martin. All rights reserved.</p>
                <p className="text-sm">Built with Next.js and Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer; 