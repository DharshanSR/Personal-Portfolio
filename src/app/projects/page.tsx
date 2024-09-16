'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { projects as allProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';

const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    entry: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
};

const getDefaultVisibleCount = () => {
    return window.innerWidth < 640 ? 8 : 8; // 640px is the breakpoint for 'sm' in Tailwind
};

const ProjectsPage = () => {
    const [filteredProjects, setFilteredProjects] = useState(allProjects.slice(0, getDefaultVisibleCount()));
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleCount, setVisibleCount] = useState(getDefaultVisibleCount());
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // State to determine mobile view

    // Extract unique categories from projects
    const categories = Array.from(new Set(['All', ...allProjects.map(p => p.category)]));

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getDefaultVisibleCount());
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isExpanded) {
            setFilteredProjects(allProjects);
        } else {
            setFilteredProjects(allProjects.slice(0, visibleCount));
        }
    }, [isExpanded, visibleCount]);

    const handleFilterChange = (category: string) => {
        if (category === 'All') {
            setFilteredProjects(isExpanded ? allProjects : allProjects.slice(0, visibleCount));
        } else {
            setFilteredProjects(allProjects.filter(p => p.category === category));
        }
    };

    const handleToggle = () => {
        setIsExpanded(prev => !prev);
    };

    // Determine the projects to show based on expansion state
    const projectsToShow = isExpanded ? filteredProjects : filteredProjects.slice(0, visibleCount);

    return (
        <div id="projects" className="container mx-auto px-4 py-20">
            <h1 className="text-5xl font-extrabold mb-6 text-center text-[#c4c6c4]">My Projects</h1>
            <ProjectFilter categories={categories} onFilterChange={handleFilterChange} />

            {/* Render Swiper for mobile view */}
            {isMobile ? (
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="mySwiper"
                >
                    {projectsToShow.map((project) => (
                        <SwiperSlide key={project.id}>
                            <motion.div
                                variants={scaleVariants}
                                initial="hidden"
                                animate="entry"
                                exit="exit"
                                transition={{ duration: 0.5, delay: 0.1 * projectsToShow.indexOf(project) }}
                            >
                                <ProjectCard
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence>
                        {projectsToShow.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={scaleVariants}
                                initial="hidden"
                                animate="entry"
                                exit="exit"
                                transition={{ duration: 0.5, delay: 0.1 * projectsToShow.indexOf(project) }}
                            >
                                <ProjectCard
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}

            <div className="text-center mt-6">
                <motion.button
                    onClick={handleToggle}
                    whileHover={{ scale: 1.05, backgroundColor: isExpanded ? "#6e6663" : "#383835" }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded transition cursor-pointer ${isExpanded ? 'bg-[#8f989b] text-[#071015]' : 'bg-[#465759] text-white'}`}
                >
                    {isExpanded ? 'View Less' : 'View More'}
                </motion.button>
            </div>
        </div>
    );
};

export default ProjectsPage;
