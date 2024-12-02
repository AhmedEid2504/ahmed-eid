'use client';

import { projectsdetails } from '../../data/projectsdetails';
import GridBG from '@/components/ui/GridBG';
import SliderImageBtns from '@/components/ui/SliderImageBtns';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetailsProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    return projectsdetails.map((project) => ({
        id: project.id,
    }));
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
    const { id } = params;

    const project = projectsdetails.find((project) => project.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <GridBG />
            <button className="fixed top-5 left-5 bg-clr_1 bg-opacity-50 p-2 rounded-md text-white">
                <Link href="/">Back</Link>
            </button>
            <div className="text-white flex flex-col justify-center items-center py-20 px-10 w-screen">
                <div className="flex flex-col justify-center items-center gap-5 w-full">
                    <h1 className="text-4xl self-center">{project.name}</h1>
                    <div className="flex gap-4">
                        <SliderImageBtns images={project.images} />
                    </div>
                    <div className="flex max-sm:flex-wrap max-sm:w-[70vw] justify-center items-center gap-2 p-1 rounded-md">
                        {project.tags.map((tag, index) => (
                            <button
                                key={index}
                                className="text-white p-1 rounded-md bg-black bg-opacity-30"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center w-screen p-10 gap-6">
                        {project.sections?.map((section, index) => (
                            <div key={index}>
                                {index % 2 === 0 ? (
                                    <div className="flex max-md:flex-col flex-wrap basis-2 items-center justify-center gap-4 w-full bg-black bg-opacity-30 rounded-md p-4">
                                        <div className="flex-1 self-center max-h-screen">
                                            {section.image && (
                                                <Image
                                                    key={index}
                                                    src={section.image.src}
                                                    alt={section.image.alt}
                                                    width={800}
                                                    height={400}
                                                />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl max-md:text-lg text-center bg-clr_1 bg-opacity-20 p-2 rounded-md w-fit">
                                                {section.title}
                                            </h2>
                                            <h3 className="text-xl max-md:text-sm text-white rounded-md p-2">
                                                {section.content}
                                            </h3>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex max-md:flex-col flex-wrap basis-2 items-center justify-center gap-4 w-full bg-black bg-opacity-30 p-2">
                                        <div className="flex-1">
                                            <h2 className="text-2xl max-md:text-lg text-center bg-clr_1 bg-opacity-20 p-2 rounded-md w-fit">
                                                {section.title}
                                            </h2>
                                            <h3 className="text-xl max-md:text-sm text-white rounded-md p-2">
                                                {section.content}
                                            </h3>
                                        </div>
                                        <div className="flex-1 flex justify-center items-center self-center max-h-screen">
                                            {section.image && (
                                                <Image
                                                    key={index}
                                                    src={section.image.src}
                                                    alt={section.image.alt}
                                                    width={800}
                                                    height={400}
                                                    className="w-fit max-h-[70dvh]"
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
