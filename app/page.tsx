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
  <section className="bg-foreground w-full flex h-[50vh]">
    <div className="m-auto">
      <div className="flex flex-col gap-8 relative">
        <Title></Title>
        <div className="flex flex-col items-center gap-2">
          <p className="text-4xl text-center text-white font-medium">Full Stack Developer</p>
          <div className="flex items-center gap-2 text-2xl text-gray-300">
            <span>from</span>
            <span className="flex items-center gap-2">
              Estonia
              <div className="relative w-6 h-4">
                <Image
                  src="/estonia-flag.svg"
                  alt="Estonian Flag"
                  fill
                  className="object-contain"
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const MiddleSection = () => (
  <section className="bg-background w-full flex min-h-[50vh] p-8 flex-col gap-8">
    <AboutMe></AboutMe>
    <ProjectsShowcase></ProjectsShowcase>
    <TechStack></TechStack>
  </section>
)

const Title = () => (
  <div className="relative">
    <p className="text-7xl h-24 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_auto] hover:animate-none">Welcome to my Portfolio</p>
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
