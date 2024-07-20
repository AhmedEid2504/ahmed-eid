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
  return (
    <div className='relative h-full w-screen'>
      <div className="-z-50 h-full w-screen absolute dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.01] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className='z-50 h-full w-screen text-white pt-5 p-20 pr-[80px]'>
        <div className='flex flex-col justify-center items-center '>
          
          <div className='text-2xl md:text-3xl lg:text-4xl text-start'>
            <h1>My Tech Stack</h1>
          </div>
          <div className='flex flex-col gap-5 p-5'>
            <div className='flex flex-col items-center justify-center rounded-md bg-black bg-opacity-30 shadow-lg p-5'>
              <h1 className='text-2xl'>Frontend</h1>
              <div className='flex flex-wrap rounded-md gap-5 justify-center items-center p-5 bg-opacity-15'>
                {frontEndStack.map((tech, index) => (
                  <Image className='bg-white' key={index} src={tech.src} width={100} height={100} alt={tech.alt} />
                ))}
              </div>
            </div>
            <div className='flex flex-wrap gap-5'>
              <div className='flex flex-col items-center justify-center rounded-md bg-black bg-opacity-30 shadow-lg p-5'>
                <h1 className='text-2xl'>Backend</h1>
                <div className='flex flex-wrap rounded-md gap-5 justify-center items-center p-5 bg-opacity-15'>
                  {backEndStack.map((tech, index) => (
                    <Image className='bg-white' key={index} src={tech.src} width={100} height={100} alt={tech.alt} />
                  ))}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center rounded-md bg-black bg-opacity-30 shadow-lg p-5'>
                <h1 className='text-2xl'>Tools</h1>
                <div className='flex flex-wrap rounded-md gap-5 justify-center items-center p-5 bg-opacity-15'>
                  {toolsStack.map((tech, index) => (
                    <Image className='bg-white' key={index} src={tech.src} width={100} height={100} alt={tech.alt} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
