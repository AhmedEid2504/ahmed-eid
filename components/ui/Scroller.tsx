import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

type ImageStack = {
    src: string;
    alt: string;
};

type TextStack = {
    content: string;
};

type TechStackProps = {
    title: string;
    speed?: string;
    direction?: string;
    type: "image" | "text" | "custom";
    stack: ImageStack[] | TextStack[] | React.ReactElement[];
};

const Scroller = ({
    title, speed, direction, stack, type
}: TechStackProps) => {
    const scrollersRef = useRef<Element[]>([]);

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
            stopAnimationOnHover();
        }

        function addAnimation() {
            scrollersRef.current?.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");

                const scrollerInner = scroller.querySelector(".scroller__inner");
                if (scrollerInner) {
                    const scrollerContent = Array.from(scrollerInner.children);

                    scrollerContent.forEach((item) => {
                        const duplicatedItem = item.cloneNode(true) as HTMLElement;
                        duplicatedItem.setAttribute("aria-hidden", "true");
                        scrollerInner.appendChild(duplicatedItem);
                    });
                }
            });
        }
        function stopAnimationOnHover() {
            scrollersRef.current?.forEach((scroller) => {
                scroller.addEventListener("mouseenter", () => {
                    scroller.setAttribute("data-paused", "true");
                });
                scroller.addEventListener("mouseleave", () => {
                    scroller.setAttribute("data-paused", "false");
                });
            });
        }
    }, []);

    return (
        <div className='flex flex-col items-center justify-center rounded-md bg-black-200 bg-opacity-30 shadow-lg p-5'>
            <h1 className='text-2xl'>{title}</h1>
            <div
                className='scroller'
                ref={(el: HTMLDivElement | null) => { if (el) scrollersRef.current.push(el); }}
                {...(direction && { 'data-direction': direction })}
                {...(speed && { 'data-speed': speed })}
            >
                <ul className='scroller__inner'>
                    {type === "image" ? (
                        (stack as ImageStack[]).map((tech, index) => (
                            <Image className='bg-white' key={index} src={tech.src} width={100} height={100} alt={tech.alt} />
                        ))
                    ) : type === "text" ? (
                        (stack as TextStack[]).map((text, index) => (
                            <li key={index}>{text.content}</li>
                        ))
                    ) : (
                        (stack as React.ReactElement[]).map((element, index) => (
                            <li key={index}>{element}</li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Scroller;