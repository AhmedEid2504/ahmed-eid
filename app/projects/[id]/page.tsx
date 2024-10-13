'use client';

import { projectsdetails } from '../../data/projectsdetails'
import GridBG from '@/components/ui/GridBG';
import SliderImageBtns from '@/components/ui/SliderImageBtns';
interface ProjectDetailsProps {
    params: {
        id: string;
    };
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
    const { id } = params;

    return (
        <div>
            <GridBG />
            <div className='text-white flex flex-col justify-center items-center py-20 px-10 w-screen'>
                {projectsdetails.map((project) => {
                    if (project.id === id) {
                        return (
                            <div 
                                key={project.id}
                                className='flex flex-col justify-center items-center gap-5 w-full'
                            >
                                <h1 className='text-4xl self-center'>{project.name}</h1>
                                <div className='flex gap-4'>
                                    <SliderImageBtns images={project.images} />
                                </div>
                                <div className='flex sm:flex-wrap max-sm:overflow-auto max-sm:overflow-y-hidden max-sm:w-[70vw] justify-center items-center max-sm:justify-start max-sm:items-start gap-2 bg-black bg-opacity-30 p-1 rounded-md'>
                                    {project.tags.map((tag, index) => (
                                        <button
                                            key={index}
                                            className='text-white p-1 rounded-md'
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                                <p>{project.description}</p>
                            </div>
                        );
                    }
                }
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;