import React, { useState, useEffect } from 'react';
import { BsDot } from 'react-icons/bs';
import { GiElevator } from 'react-icons/gi';

const ElevatorNav = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (event: WheelEvent) => {
      // Prevent default scroll behavior
      event.preventDefault();

      // Determine scroll direction and amount
      const scrollAmount = window.innerHeight;
      const scrollDirection = event.deltaY > 0 ? 1 : -1;

      // Smooth scroll using window.scrollTo with a smooth scroll behavior
      window.scrollBy({
        top: scrollDirection * scrollAmount,
        behavior: 'smooth'
      });
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      // Prevent default scroll behavior
      event.preventDefault();

      const touchEndY = event.touches[0].clientY;
      const scrollAmount = window.innerHeight;
      const scrollDirection = touchStartY > touchEndY ? 1 : -1;

      // Smooth scroll using window.scrollTo with a smooth scroll behavior
      window.scrollBy({
        top: scrollDirection * scrollAmount,
        behavior: 'smooth'
      });
    };

    // Attach event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

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
    <div className="fixed z-50 top-[35vh] right-0 w-[10vw] bg-transparent">
      <div className="z-40 relative flex flex-col justify-center items-center gap-[25px]">
        <button
          onClick={() => handleScroll('1', 0)}
          className="relative"
        >
          <BsDot className="text-5xl text-white" />
        </button>
        <button
          onClick={() => handleScroll('2', 1)}
          className="relative"
        >
          <BsDot className="text-5xl text-white" />
        </button>
        <button
          onClick={() => handleScroll('3', 2)}
          className="relative"
        >
          <BsDot className="text-5xl text-white" />
        </button>
        <div
          className="absolute"
          style={{
            top: `${activeIndex * 35}%`,
            transform: 'translateY(- 50%)',
            transition: 'top 0.8s ease',
          }}
        >
          <GiElevator className="z-10 text-5xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default ElevatorNav;
