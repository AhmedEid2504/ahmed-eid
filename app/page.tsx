"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import ElevatorNav from "@/components/ui/ElevatorNav";


export default function Home() {

  return (
    <>
      <main className="relative bg-black flex flex-col justify-center items-center overflow-hidden ">
        <ElevatorNav />
        <div className="z-10">
          <section id="1" className="w-full">
            <Hero />
          </section>
          <section id="2" className="w-full">
            <TechStack />
          </section>
          <section id="3" className="w-full">
            <Projects />
          </section>
        </div>
      </main>
    </>
  );
}
