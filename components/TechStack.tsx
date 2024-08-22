import { useEffect, useRef } from 'react';

import React from 'react';
import Image from 'next/image';
import Scroller from './ui/Scroller';

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
    
  return (
    <div className='relative h-full min-h-[100dvh] w-screen'>
      <div className="-z-50 h-full w-screen absolute dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.01] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className='z-50 h-full w-screen text-white pt-3 sm:pt-20 p-5 pr-[20px]'>
        <div className='flex flex-col justify-center items-center '>
          
          <div className='text-2xl md:text-3xl lg:text-4xl text-start'>
            <h1>Tech Stack</h1>
          </div>

          <div className='flex flex-col gap-5 p-5 justify-center items-center'>
            <Scroller type='image' title='Frontend' speed='slow' direction='left' stack={frontEndStack} />
            <Scroller type='image' title='Backend' speed='slow' direction='right' stack={backEndStack} />
            <Scroller type='image' title='Tools' speed='slow' direction='left' stack={toolsStack} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
