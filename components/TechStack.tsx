import { useEffect, useRef } from 'react';

import React from 'react';
import Image from 'next/image';

const frontEndStack = [
  { src: '/images/html.png', alt: 'html' },
  { src: '/images/css.png', alt: 'css' },
  { src: '/images/js.png', alt: 'js' },
  { src: '/images/ts.png', alt: 'typescript' },
  { src: '/images/react.png', alt: 'react' },
  { src: '/images/nextjs.png', alt: 'nextjs' },
  { src: '/images/tailwindcss.png', alt: 'tailwindcss' },
  { src: '/images/bootstrap.png', alt: 'bootstrap' },
];

const backEndStack = [
  { src: '/images/django.png', alt: 'django' },
  { src: '/images/python.png', alt: 'python' },
  { src: '/images/mongodb.png', alt: 'mongodb' },
  { src: '/images/postgresql.png', alt: 'postgresql' },
  { src: '/images/firebase.png', alt: 'firebase' },
];

const toolsStack = [
  { src: '/images/git.png', alt: 'git' },
  { src: '/images/github.png', alt: 'github' },
  { src: '/images/vscode.png', alt: 'vscode' },
  { src: '/images/figma.png', alt: 'figma' },
];



const TechStack = () => {
    const scrollersRef = useRef<NodeListOf<Element> | null>(null);
    
      useEffect(() => {
        scrollersRef.current = document.querySelectorAll('.scroller');
    
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation();
        }
    
        function addAnimation() {
          scrollersRef.current?.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", "true");
    
            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            if (scrollerInner) {
              const scrollerContent = Array.from(scrollerInner.children);
    
              // For each item in the array, clone it
              // add aria-hidden to it
              // add it into the `.scroller-inner`
              scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLElement;
                duplicatedItem.setAttribute("aria-hidden", "true");
                scrollerInner.appendChild(duplicatedItem);
              });
            }
          });
        }
      }, []);
  return (
    <div className='relative h-full min-h-screen w-screen'>
      <div className="-z-50 h-full w-screen absolute dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.01] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className='z-50 h-full w-screen text-white pt-5 p-20 pr-[80px]'>
        <div className='flex flex-col justify-center items-center '>
          
          <div className='text-2xl md:text-3xl lg:text-4xl text-start'>
            <h1>Tech Stack</h1>
          </div>
          <div className='flex flex-col gap-5 p-5 justify-center items-center'>
            <div className='flex flex-col items-center justify-center rounded-md bg-black-200 bg-opacity-30 shadow-lg p-5'>
              <h1 className='text-2xl'>Frontend</h1>
              <div className='scroller' data-speed="slow" data-direction="left">
                <ul className='scroller__inner'>
                  {frontEndStack.map((tech, index) => (
                    <Image className='bg-white' key={index} src={tech.src} width={100} height={100} alt={tech.alt} />
                  ))}
                </ul>
              </div>
            </div>
              <div className='flex flex-col items-center justify-center rounded-md bg-black-200 bg-opacity-30 shadow-lg p-5'>
                <h1 className='text-2xl'>Backend</h1>
                <div className='scroller' data-speed="slow" data-direction="right">
                  <ul className='scroller__inner'>
                    {backEndStack.map((tech, index) => (
                      <Image className='bg-white' key={index} src={tech.src} width={100} height={100} alt={tech.alt} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center rounded-md bg-black-200 bg-opacity-30 shadow-lg p-5'>
                <h1 className='text-2xl'>Tools</h1>
                <div className='scroller'>
                  <ul className='scroller__inner'>
                    {toolsStack.map((tech, index) => (
                      <Image className='bg-white' key={index} src={tech.src} width={100} height={100} alt={tech.alt} />
                    ))}
                  </ul>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
