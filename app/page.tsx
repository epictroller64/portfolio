"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProjectsShowcase } from "./components/ProjectsShowcase";
import { TechStack } from "./components/TechStack";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main>
      <Uppersection></Uppersection>
      <MiddleSection></MiddleSection>
    </main>
  );
}

const Uppersection = () => (
  <section className="bg-foreground w-full min-h-screen relative flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-slow"></div>

    <div className="absolute inset-0">
      <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-1"></div>
      <div className="absolute w-3 h-3 bg-white/20 rounded-full animate-float-2"></div>
      <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-3"></div>
      <div className="absolute w-4 h-4 bg-white/20 rounded-full animate-float-4"></div>
      <div className="absolute w-3 h-3 bg-white/20 rounded-full animate-float-5"></div>
      <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-6"></div>
    </div>

    <div className="relative z-10 px-6 w-full max-w-6xl mx-auto py-20">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <Title></Title>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-6xl text-center text-white font-semibold tracking-tight bg-clip-text">
              Full Stack Developer
            </h2>
            <div className="flex items-center gap-3 text-2xl text-gray-200">
              <span>based in</span>
              <span className="flex items-center gap-2 group">
                Estonia
                <div className="relative w-7 h-5 transition-transform group-hover:scale-110">
                  <Image
                    src="/estonia-flag.svg"
                    alt="Estonian Flag"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-8">
            <a href="#about-me" className="group relative px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 overflow-hidden text-lg font-medium">
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#projects"
              className="group relative px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 overflow-hidden text-lg font-medium"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#tech-stack"
              className="group relative px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 overflow-hidden text-lg font-medium"
            >
              <span className="relative z-10">Tech Stack</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
)

const MiddleSection = () => (
  <section className="w-full flex min-h-[50vh] p-8 flex-col gap-8 relative overflow-hidden bg-slate-50">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px]"></div>

    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/80 to-slate-50"></div>

    <div className="relative z-10 flex flex-col gap-8">
      <AboutMe></AboutMe>
      <ProjectsShowcase></ProjectsShowcase>
      <TechStack></TechStack>
    </div>
  </section>
)

const Title = () => (
  <div className="relative">
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient bg-[length:200%_auto] hover:animate-none leading-tight">
        Hi, I'm Martin
      </h1>
    </div>
  </div>
)

function getLineCoordinates(direction: "left" | "right" | "top" | "bottom") {
  switch (direction) {
    case "left": {
      return { x1: 0, y1: 10, x2: 100, y2: 10 };
    }
    case "top": {
      return { x1: 10, y1: 10, x2: 10, y2: 110 };
    }
    case "bottom": {
      return { x1: 10, y1: 10, x2: 10, y2: 110 };
    }
    case "right": {
      return { x1: 0, y1: 10, x2: 100, y2: 10 };
    }
    default:
      return { x1: 0, y1: 10, x2: 100, y2: 10 };
  }
}

function renderRandomLines() { }

const WhiteLine = ({
  direction,
}: {
  direction: "left" | "right" | "top" | "bottom";
}) => {
  const ref = useRef<SVGLineElement>(null);
  const [xy, setXy] = useState(getLineCoordinates(direction));
  useEffect(() => {
    const line = ref.current;
    const incrementer = 0.5;
    function animate() {
      if (line) {
        setXy((prev) => ({
          ...prev,
          x1: prev.x1 + incrementer,
          x2: prev.x2 + incrementer,
        }));
      }
      requestAnimationFrame(animate);
    }
    //requestAnimationFrame(animate);
  }, []);
  return (
    <line
      ref={ref}
      x1={xy.x1}
      x2={xy.x2}
      y1={xy.y1}
      y2={xy.y2}
      strokeWidth={2}
      stroke="white"
    ></line>
  );
};
