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
                                {/* sections */}
                                <div className='flex flex-col w-screen p-10 gap-4'>
                                    {project.sections?.map((section, index) => (
                                        <>
                                            {index % 2 === 0 ? (
                                                <div key={index} className='flex flex-col justify-center gap-2 w-[50vw] self-start bg-black bg-opacity-30 rounded-md p-4'>
                                                    <h2
                                                        className='text-3xl text-center bg-clr_1 bg-opacity-20 p-2 rounded-md w-fit'
                                                    >{section.title}</h2>
                                                    <h3
                                                        className='text-2xl text-white  rounded-md  p-2'
                                                    >{section.content}</h3>
                                                </div>
                                            ) : (
                                                <div key={index} className='flex flex-col gap-2 w-[50vw] self-end'>
                                                    <h2
                                                        className='text-3xl text-center bg-clr_1 bg-opacity-20 p-2 rounded-md w-fit'
                                                    >{section.title}</h2>
                                                    <h3
                                                        className='text-2xl text-white rounded-md bg-black bg-opacity-30 p-2'
                                                    >{section.content}</h3>
                                                </div>
                                            )}
                                        </>
                                    ))}

                                </div>
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