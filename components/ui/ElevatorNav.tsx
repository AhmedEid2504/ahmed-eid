import React, { useState, useEffect } from 'react';
import { BsDot } from 'react-icons/bs';
import { GiElevator } from 'react-icons/gi';

const ElevatorNav = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (id: string, index: number) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target as HTMLElement);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);


  


  return (
    <div className="fixed z-40 top-[35vh] right-0 w-[7vw] bg-transparent">
      <div className="z-30 relative flex flex-col justify-center items-center gap-[60px]">
        <button
          onClick={() => handleScroll('1', 0)}
          className="relative w-3 bg-white rounded-full h-3"
          aria-label='scroll to section 1'
        >
        </button>
        <button
          onClick={() => handleScroll('2', 1)}
          className="relative w-3 bg-white rounded-full h-3"
          aria-label='scroll to section 2'
        >
        </button>
        <button
          onClick={() => handleScroll('3', 2)}
          className="relative w-3 bg-white rounded-full h-3"
          aria-label='scroll to section 3'
        >
        </button>
        <div
          className="absolute -translate-y-5"
          style={{
            top: `${activeIndex * 45}%`,
            transform: 'translateY(-50%)',
            transition: 'top 0.8s ease',
          }}
        >
          <GiElevator className=" text-4xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default ElevatorNav;
