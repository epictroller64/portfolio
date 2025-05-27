"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <main>
      <Uppersection></Uppersection>
    </main>
  );
}

const Uppersection = () => (
  <section className="bg-black w-full flex h-[50vh]">
    <div className="m-auto">
      <div className="flex flex-col gap-4 relative">
        <Title></Title>
        <div className="flex flex-row m-auto">
          <p className="text-4xl text-center text-white">Full Stack Developer</p>
        </div>
      </div>
    </div>
  </section>
);

const Title = () => (
  <div className="relative">
    <p className="text-7xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_auto] hover:animate-none">Welcome to my Portfolio</p>
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
