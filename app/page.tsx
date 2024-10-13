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
import useIsAdmin from "@/hooks/useIsAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import AdminChat from "@/components/ui/AdminChat";


export default function Home() {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const [user] = useAuthState(auth);
  const isAdmin = useIsAdmin(user?.uid);

  const handleChat = () => {
    setIsChatOpen(!isChatOpen);
    console.log(isAdmin)
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
            <Projects />
          </section>
          <section id="3" className="w-full">
            <TechStack />
          </section>
        </div>
        { isAdmin ?
          <>
            { !isChatOpen ?
              <ChatButton 
                isChatOpen={isChatOpen} 
                handleChat={handleChat}
              />
              :
              <AdminChat
                isChatOpen={isChatOpen}
                handleChat={handleChat}
              />
            }
          </>
        :
          <>
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
          </>
        }
      </main>
    </>
  );
}
