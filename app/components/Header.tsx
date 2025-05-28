import Link from "next/link";

export default function Header() {
    return (
        <header className="absolute text-background w-full h-14 p-2">
            <div className="flex flex-row bg-zinc-800 w-full h-full rounded-full px-2  justify-center items-center">
                <HeaderLink href="/#home">Home</HeaderLink>
                <HeaderLink href="/#about">About</HeaderLink>
                <HeaderLink href="/#projects">Projects</HeaderLink>
                <HeaderLink href="/#contact">Contact</HeaderLink>
            </div>
        </header>
    )
}


function HeaderLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="text-white font-bold hover:text-blue-500 hover:bg-zinc-700 transition-all duration-300 px-2 py-1 rounded-full">
            {children}
        </Link>
    )
}