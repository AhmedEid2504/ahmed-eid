import { projectsdetails } from '../../data/projectsdetails'
import GridBG from '@/components/ui/GridBG';
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
            <div className='text-white-100'>
                <h1>Project Details for: {id}</h1>
                {projectsdetails.map((project) => {
                    if (project.id === id) {
                        return (
                            <div key={project.id}>
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <a href={project.demoLink} target='_blank'>Demo</a>
                                <a href={project.codeLink} target='_blank'>Code</a>
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