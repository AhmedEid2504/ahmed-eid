import React, { useState, useEffect } from 'react';
import { BsDot } from 'react-icons/bs';
import { GiElevator } from 'react-icons/gi';

const ElevatorNav = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (id: string, index: number) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(index);
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
        <div className="fixed z-50 top-[25vh] right-5 w-[10vw] bg-transparent">
            <div className="relative flex justify-between h-full">
                <div className="flex flex-col justify-center items-center gap-[25px]">
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
                </div>
                <div
                    className="absolute"
                    style={{
                        top: `${activeIndex * 35}%`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        transition: 'top 0.8s ease',
                    }}
                >
                    <GiElevator className="text-5xl text-white" />
                </div>
            </div>
        </div>
    );
};

export default ElevatorNav;
