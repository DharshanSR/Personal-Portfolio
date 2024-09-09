'use client';

import { useState } from 'react';
import { projects as allProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';

const ProjectsPage = () => {
    const [filteredProjects, setFilteredProjects] = useState(allProjects);
    const [isExpanded, setIsExpanded] = useState(false);

    // Extract unique categories from projects
    const categories = Array.from(new Set(['All', ...allProjects.map(p => p.category)]));

    const handleFilterChange = (category: string) => {
        if (category === 'All') {
            setFilteredProjects(isExpanded ? allProjects : allProjects.slice(0, getDefaultVisibleCount()));
        } else {
            setFilteredProjects(allProjects.filter(p => p.category === category));
        }
    };

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    // Determine the number of projects to show
    const getDefaultVisibleCount = () => {
        // Adjust this value based on screen size if needed
        return window.innerWidth < 640 ? 4 : 8; // 640px is the breakpoint for 'sm' in Tailwind
    };

    const projectsToShow = isExpanded ? filteredProjects : filteredProjects.slice(0, getDefaultVisibleCount());

    return (
        <div id="projects" className="container mx-auto px-4 py-20">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">My Projects</h1>
            <ProjectFilter categories={categories} onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {projectsToShow.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={handleToggle}
                    className="text-blue-500 underline hover:text-blue-300 text-sm sm:text-base"
                >
                    {isExpanded ? 'View Less' : 'View More'}
                </button>
            </div>
        </div>
    );
};

export default ProjectsPage;
