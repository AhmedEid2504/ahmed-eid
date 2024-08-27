"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ShowCase from "@/components/ShowCase";
import TechStack from "@/components/TechStack";
import Chat from "@/components/ui/Chat";
import ChatButton from "@/components/ui/ChatButton";
import ElevatorNav from "@/components/ui/ElevatorNav";
import { useState } from "react";
import { FaX } from "react-icons/fa6";

export default function Home() {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChat = () => {
    setIsChatOpen(!isChatOpen);
  }

  return (
    <>
      <main className="relative bg-black flex flex-col justify-center items-center overflow-hidden ">
        <ElevatorNav />
        <div className="z-10">
          <section id="1" className="w-full">
            <Hero />
          </section>
          <section id="2" className="w-full">
            <ShowCase />
          </section>
          <section id="3" className="w-full">
            <TechStack />
          </section>
          <section id="4" className="w-full">
            <Projects />
          </section>
        </div>
        { !isChatOpen ?
            <ChatButton 
              isChatOpen={isChatOpen} 
              handleChat={handleChat}
            />
            :
            <Chat
              isChatOpen={isChatOpen}
              handleChat={handleChat}
            />
        }
      </main>
    </>
  );
}
