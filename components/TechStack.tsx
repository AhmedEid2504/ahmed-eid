import React from 'react'

const TechStack = () => {
  return (
    <div className='h-screen w-screen flex text-white place-content-center'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-4xl'>Tech Stack</h1>
        <div className='flex flex-col gap-2'>
          <h2 className='text-3xl'>Frontend</h2>
          <ul className='flex flex-col gap-2'>
            <li>React</li>
            <li>Next.js</li>
            <li>Chakra UI</li>
            <li>React Query</li>
            <li>React Hook Form</li>
            <li>React Icons</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-3xl'>Backend</h2>
          <ul className='flex flex-col gap-2'>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>JWT</li>
            <li>bcrypt</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-3xl'>Deployment</h2>
          <ul className='flex flex-col gap-2'>
            <li>Vercel</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechStack