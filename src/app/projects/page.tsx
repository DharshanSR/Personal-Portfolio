// ProjectsPage.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { projects as allProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';

const ProjectsPage = () => {
    const [filteredProjects, setFilteredProjects] = useState(allProjects);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const categories = Array.from(new Set(['All', ...allProjects.map((p) => p.category)]));

    const handleFilterChange = (category) => {
        if (category === 'All') {
            setFilteredProjects(allProjects);
        } else {
            setFilteredProjects(allProjects.filter((p) => p.category === category));
        }
    };

    return (
        <section className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    My Projects
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Discover my work in Full Stack Development, Mobile Development, and AI, showcasing innovative solutions and creativity.
                </p>
            </div>

            <ProjectFilter categories={categories} onFilterChange={handleFilterChange} />

            {isMobile ? (
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={16}
                    slidesPerView={1.2}
                >
                    {filteredProjects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard {...project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </motion.div>
            )}
        </section>
    );
};

export default ProjectsPage;
