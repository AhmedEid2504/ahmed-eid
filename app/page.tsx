import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative bg-black flex flex-col justify-center 
      items-center overflow-hidden">
        <div className="w-full">
          <Hero />
        </div>
      </main>
    </>
  );
}
