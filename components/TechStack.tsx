import React from 'react';
import RoadMap from './ui/RoadMap'

const App: React.FC = () => {
  const frontendMilestones = [
    { label: 'HTML', progress: 0, branches: [] },
    { label: 'CSS', progress: 25, branches: ['Bootstrap', 'Tailwind'] },
    { label: 'JavaScript', progress: 50, branches: ['TypeScript'] },
    { label: 'React', progress: 100, branches: ['Redux Toolkit'] },
    { label: 'React Native', progress: 100, branches: [] },
    { label: 'Next.js', progress: 100, branches: ['Zustand'] },
  ];

  const backendMilestones = [
    { label: 'Firebase', progress: 0, branches: [] },
    { label: 'Python', progress: 25, branches: [] },
    { label: 'Django', progress: 50, branches: ['Rest Framework'] },
    { label: 'Database', progress: 75, branches: ['MongoDB', 'PostgreSQL'] },
    { label: 'Authentication', progress: 100, branches: ['JWT', 'OAuth'] },
  ];

  const toolsMilestones = [
    { label: 'VsCode', progress: 0, branches: [] },
    { label: 'Figma', progress: 25, branches: [] },
    { label: 'Github', progress: 50, branches: [] },
    { label: 'Git', progress: 100, branches: [] },
    { label: 'Anaconda', progress: 100, branches: [] },
    { label: 'Postman', progress: 100, branches: [] },
    { label: 'Jira', progress: 100, branches: [] },
    { label: 'Lark', progress: 100, branches: [] },
  ];

  return (
    <div className="flex  items-center justify-center max-md:justify-start gap-10 h-screen">
      <div className='flex max-md:hidden flex-col flex-wrap items-center justify-start w-[90vw] h-full overflow-auto py-10 gap-10'>
        <div className='w-[20vw] '>
          <RoadMap title="Frontend" milestones={frontendMilestones} />
        </div>
        <div className='w-[20vw] '>
          <RoadMap title="Backend" milestones={backendMilestones} />
        </div>
        <div className='w-[20vw] '>
          <RoadMap title="Tools" milestones={toolsMilestones} />
        </div>
      </div>

      {/* mobile */}
      <div className='flex md:hidden flex-col items-start justify-start w-[90vw] h-full overflow-y-auto overflow-x-hidden py-10 gap-10'>
        <div className='w-full '>
          <RoadMap title="Frontend" milestones={frontendMilestones} />
        </div>
        <div className='w-full '>
          <RoadMap title="Backend" milestones={backendMilestones} />
        </div>
        <div className='w-full '>
          <RoadMap title="Tools" milestones={toolsMilestones} />
        </div>
      </div>
    </div>
  );
};

export default App;
