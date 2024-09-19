'use client';

import React from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {Button} from "@/components/ui/button";

type ProjectDetailsPageProps = {
    params: {
        projectId: string;
    };
};

// Framer Motion Variants
const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
};

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

const hoverEffect = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const ProjectDetailsPage = ({ params }: ProjectDetailsPageProps) => {
    const router = useRouter();
    const project = projects.find((proj) => proj.id === params.projectId);

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    if (!project) return notFound();

    return (
        <motion.div
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen"
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <Button>Back To Projects</Button>

            <div className="mx-auto px-6 py-12">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={fadeInUp}
                    transition={{ duration: 0.8 }}
                >
                    {/* Project Image */}
                    <motion.div
                        className="relative shadow-lg rounded-lg overflow-hidden"
                        variants={hoverEffect}
                        whileHover="hover"
                    >
                        <Image
                            src={project.image}
                            alt={`Main image of ${project.title}`}
                            className="w-full h-full object-cover"
                            width={1200}
                            height={600}
                        />
                    </motion.div>

                    {/* Project Details */}
                    <motion.div
                        className="flex flex-col justify-between"
                        variants={fadeInUp}
                        transition={{ delay: 0.1, duration: 0.8 }}
                    >
                        <div>
                            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                            <p className="text-lg mb-6 text-justify">{project.detailedDescription}</p>

                            {/* Technologies Used (New UI Style) */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
                                <div className="grid grid-cols-2 gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                    {project.technologies.map((tech, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow-sm cursor-pointer hover:bg-teal-100 dark:hover:bg-teal-800 transition"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ cursor: 'pointer' }}  // Pointer cursor for interactivity
                                        >
                                            {tech}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <motion.div
                            className="mt-4 space-x-4"
                            variants={fadeIn}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {project.github && (
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-500"
                                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                >
                                    GitHub Repo
                                </motion.a>
                            )}
                            {project.live && (
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-green-500"
                                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                >
                                    Live Demo
                                </motion.a>
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* More Images Section with In-View Animation */}
                {project.moreImages.length > 0 && (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">More Images</h2>

                        {/* Horizontal Scroll Gallery with Hover Effects */}
                        <div className="relative flex overflow-x-auto space-x-6 pb-6">
                            {project.moreImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative shadow-md rounded-lg overflow-hidden flex-shrink-0"
                                    style={{ width: '400px', height: '250px' }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={img}
                                        alt={`Additional image ${idx + 1} of ${project.title}`}
                                        className="w-full h-full object-cover"
                                        width={400}
                                        height={250}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            <Footer />
        </motion.div>
    );
};

export default ProjectDetailsPage;
