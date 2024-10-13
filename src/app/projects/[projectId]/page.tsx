'use client';

import React, { useRef } from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { techIcons } from "@/data/techIcons";
import { FaGithub, FaLink } from "react-icons/fa6";
import DownFooter from "@/components/DownFooter";

// Framer Motion Variants
const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const ProjectDetailsPage = ({ params }) => {
    const router = useRouter();
    const project = projects.find((proj) => proj.id === params.projectId);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    if (!project) return notFound();

    return (
        <motion.div
            className="bg-[#14141F] dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen relative"
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {/* Back to Projects Button */}
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, ease: 'easeOut'}}
                >
                    <Button
                        onClick={() => router.push('/#projects')}
                        className="mb-10 mt-4 bg-orange-500 hover:bg-orange-900 text-white py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                        Back To Projects
                    </Button>
                </motion.div>

                {/* Project Title */}
                <motion.h1
                    className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-blue-600"
                    style={{lineHeight: "1.6"}}
                    variants={fadeInUp}
                    transition={{duration: 0.8}}
                >
                    {project.title}
                </motion.h1>

                {/* Project Image */}
                <motion.div
                    className="relative shadow-lg rounded-lg overflow-hidden mb-6 w-full sm:w-[600px] mx-auto"
                    whileHover={{scale: 1.05, transition: {duration: 0.3}}}
                    variants={fadeInUp}
                    transition={{duration: 0.8}}
                >
                    <Image
                        src={project.image}
                        alt={`Main image of ${project.title}`}
                        className="w-full h-auto object-cover"
                        width={500}
                        height={500}
                    />
                </motion.div>

                {/* Project Description */}
                <motion.p
                    className="text-xl mb-12 mt-4 text-justify text-white" style={{lineHeight: "1.6"}}
                    variants={fadeInUp}
                    transition={{duration: 0.8}}
                >
                    {project.detailedDescription}
                </motion.p>

                {/* Technologies Section */}
                <h1 className="text-2xl font-semibold mb-10 text-white">Technology Used</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
                    {project.technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-lg p-4 shadow-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{delay: 0.1 * index, duration: 0.5}}
                        >
                            {techIcons[tech] && (
                                <Image
                                    src={techIcons[tech]}
                                    alt={`${tech} icon`}
                                    width={30}
                                    height={30}
                                    className="mx-auto mb-2"
                                />
                            )}
                            <p className="text-center text-white font-semibold">{tech}</p>
                        </motion.div>
                    ))}
                </div>


                {/* GitHub and Live Demo Section */}
                <motion.div
                    className="mb-8"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3, duration: 0.8}}
                >
                    {project.github && (
                        <>
                            <h1 className="text-lg sm:text-xl font-semibold mb-8 text-white">GitHub Repository</h1>
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
                                whileHover={{scale: 1.05, transition: {duration: 0.3}}}
                            >
                                <div className="flex items-center space-x-2">
                                    <FaGithub className="w-6 h-6"/>
                                    <span className="text-lg font-medium">GitHub Repo</span>
                                </div>
                            </motion.a>
                        </>
                    )}

                    {project.live && (
                        <>
                            <h2 className="text-lg sm:text-xl font-semibold mb-8 mt-8 text-white">Live Demo</h2>
                            <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-green-600 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
                                whileHover={{scale: 1.05, transition: {duration: 0.3}}}
                            >
                                <div className="flex items-center space-x-2">
                                    <FaLink className="w-6 h-6"/>
                                    <span className="text-lg font-medium">Live Link</span>
                                </div>
                            </motion.a>
                        </>
                    )}
                </motion.div>

                {/* More Images Section */}
                {project.moreImages.length > 0 && (
                    <motion.div
                        ref={ref}
                        initial={{opacity: 0, y: 50}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{delay: 0.3, duration: 0.8}}
                        className="mt-8"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-white">More Images</h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                            {project.moreImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                                    whileHover={{scale: 1.05}}
                                >
                                    <Image
                                        src={img}
                                        alt={`Additional image ${idx + 1} of ${project.title}`}
                                        className="w-full h-full object-cover mb-10"
                                        width={400}
                                        height={250}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            <DownFooter arrowBgColor="#00B5D8"/>
        </motion.div>
    );
};

export default ProjectDetailsPage;
