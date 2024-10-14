import React, { useEffect, useRef, useState } from 'react';

// Define the structure for milestones
type Milestone = {
    label: string;
    progress: number;
    branches: string[];
}

// Props for Roadmap component
type RoadmapProps = {
    title: string; // Title for the roadmap
    milestones: Milestone[]; // Milestones to display
}

const Roadmap: React.FC<RoadmapProps> = ({ title, milestones }) => {
    const roadmapRef = useRef<HTMLDivElement | null>(null);
    const [visibleIndex, setVisibleIndex] = useState(-1); // Initially hidden
    const [branchVisibleIndexes, setBranchVisibleIndexes] = useState<number[]>([]); // Branch visibility

    // Observer to trigger the reveal function when the roadmap is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            revealAllMilestones();
            observer.disconnect();
            }
        },
        { threshold: 0.5 }
        );

        if (roadmapRef.current) {
        observer.observe(roadmapRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Reveal all milestones and branches in sequence 
    const revealAllMilestones = () => {
        const revealNextMilestone = (index: number) => {
        if (index < milestones.length) {
            setVisibleIndex(index); // Reveal the current milestone

            // Set a timeout to reveal branches after the parent node
            const branches = milestones[index].branches;

            // Reveal each branch with a delay
            branches.forEach((_, branchIndex) => {
            setTimeout(() => {
                setBranchVisibleIndexes((prev) => [...prev, index * 10 + branchIndex]); // Unique identifier for each branch
            }, 300 * (branchIndex + 1)); // Delay for each branch (300ms per branch)
            });

            // Set a timeout to reveal the next milestone
            setTimeout(() => {
            revealNextMilestone(index + 1); // Call the next milestone
            }, 1000 + branches.length * 300); // Adjust delay as needed
        }
        };

        revealNextMilestone(0); // Start revealing from the first milestone
    };

    return (
        <div className="flex flex-col items-center max-md:items-start max-md:px-[8rem] justify-center h-full ">
            <h1 className="text-2xl text-white font-bold mb-5">{title}</h1>
            {/* Roadmap */}
            <div ref={roadmapRef} className="flex flex-col justify-center items-center relative w-fit max-w-xl">
                {/* Connecting Lines */}
                {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col items-center justify-center relative">
                    {index > 0 && (
                    <div
                        className={`w-1 h-16 bg-clr_1 transition-opacity duration-500 ${visibleIndex >= index ? 'opacity-100' : 'opacity-0'}`}
                    />
                    )}
                    {/* Milestone Node */}
                    <div
                    className={`flex flex-col items-center transition-transform duration-500 ${visibleIndex >= index ? 'scale-100' : 'scale-0'}`}
                    >
                    <div className="h-4 w-4 bg-clr_1 rounded-full" />
                    <span className="absolute -translate-x-16 text-sm text-white">{milestone.label}</span>
                    </div>
                    {/* Branches */}
                    {visibleIndex >= index && milestone.branches.length > 0 && (
                    <div className="absolute left-4 top-16 flex items-center">
                        {milestone.branches.map((branch, branchIndex) => (
                        <div key={branchIndex} className="flex items-center mb-2">
                            {/* Connecting line for each branch */}
                            <div
                            className={`w-20 max-md:w-14 h-1 bg-clr_1 transition-opacity duration-500 ease-linear ${
                                visibleIndex >= index && branchVisibleIndexes.includes(index * 10 + branchIndex) ? 'opacity-100' : 'opacity-0'
                            }`}
                            />
                            <div
                            className={`flex flex-col items-center transition-transform duration-500 ease-linear ${
                                visibleIndex >= index && branchVisibleIndexes.includes(index * 10 + branchIndex) ? 'scale-100' : 'scale-0'
                            }`}
                            >
                            <div className="h-4 w-4 bg-clr_1 rounded-full" />
                            <span className="text-sm max-md:text-xs absolute translate-y-6 text-white">{branch}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
