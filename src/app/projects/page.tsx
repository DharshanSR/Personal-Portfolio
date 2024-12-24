'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
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
        <section id="projects" className="container mx-auto px-4 py-20 relative">

            {/* Main Heading (h1) */}
            <div className="relative z-10">
                <h1 className="text-6xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                    My Projects
                </h1>
            </div>

            <p className="text-lg text-center text-[#9B4D96] dark:text-gray-300 font-medium mb-10 leading-relaxed max-w-4xl mx-auto">
                Explore a collection of my work in Full Stack Development, Mobile Development, and Machine Learning.
                Each project reflects my passion for solving real-world problems with innovative solutions.
            </p>

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
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: isExpanded ? "#3a3a3a" : "#2c2c2c",
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-6 py-3 font-semibold text-sm rounded-lg overflow-hidden cursor-pointer transition-all duration-300 
        ${isExpanded ? 'bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-white' : 'bg-gradient-to-l from-purple-600 via-blue-500 to-teal-500 text-white'}`}
                >
                    <span
                        className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 transform rotate-45 translate-x-[-50%] translate-y-[-50%]"
                    ></span>
                    <span
                        className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-bl from-teal-500 to-green-500 transform rotate-45 translate-x-[50%] translate-y-[50%]"
                    ></span>
                    <span
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    ></span>

                    <span className="relative z-10">{isExpanded ? 'View Less' : 'View More'}</span>
                </motion.button>
            </div>
        </section>
    );
};

export default ProjectsPage;
