'use client';

import React from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { techIcons } from "@/data/techIcons";

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
            <div className="container mx-auto px-6 py-12">

                <Button onClick={() => router.push('/projects')} className="mb-4">
                    Back To Projects
                </Button>

                {/* Project Title */}
                <motion.h1
                    className="text-4xl font-extrabold text-center mb-8 text-blue-600"
                    variants={fadeInUp}
                    transition={{duration: 0.8}}
                >
                    {project.title}
                </motion.h1>

                {/* Project Image */}
                <motion.div
                    className="relative shadow-lg rounded-lg overflow-hidden mb-8 w-[600px] mx-auto" // Set the width and center the image
                    whileHover={{scale: 1.05, transition: {duration: 0.3}}}
                    variants={fadeInUp}
                    transition={{duration: 0.8}}
                >
                    <Image
                        src={project.image}
                        alt={`Main image of ${project.title}`}
                        className="w-full h-auto object-cover"
                        width={500}  // Adjust the width
                        height={500}  // Adjust the height if necessary
                    />
                </motion.div>


                {/* Project Description */}
                <motion.p
                    className="text-lg mb-8 text-justify text-gray-700"
                    variants={fadeInUp}
                    transition={{duration: 0.8}}
                >
                    {project.detailedDescription}
                </motion.p>

                {/* Technologies Used Section */}
                <motion.div
                    className="mb-8"
                    variants={fadeInUp}
                    transition={{delay: 0.1, duration: 0.8}}
                >
                    <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>

                    <div className="flex flex-wrap justify-center gap-6">
                        {project.technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="relative p-6 bg-gray-100 rounded-full shadow-lg hover:bg-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center"
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{delay: 0.1 * index, duration: 0.5}}
                            >
                                {techIcons[tech] ? (
                                    <div
                                        className="bg-white rounded-full p-4 shadow-md hover:scale-110 transition-transform">
                                        <Image
                                            src={techIcons[tech]}
                                            alt={`${tech} icon`}
                                            width={40}
                                            height={40}
                                            className="mb-2"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-center text-gray-500">{tech}</span>
                                )}
                                {/* On hover, change text color */}
                                <span className="text-gray-700 text-sm font-semibold mt-2 group-hover:text-white">
          {tech}
        </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


                {/* Action Buttons Section */}
                <motion.div
                    className="mb-12"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3, duration: 0.8}}
                >
                    {/* GitHub Section */}
                    {project.github && (
                        <>
                            <h2 className="text-xl font-semibold mb-4">GitHub Repository</h2>
                            <div className="flex space-x-4 mb-8">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
                                    whileHover={{scale: 1.05, transition: {duration: 0.3}}}
                                >
                                    GitHub Repo
                                </motion.a>
                            </div>
                        </>
                    )}

                    {/* Live Demo Section */}
                    {project.live && (
                        <>
                            <h2 className="text-xl font-semibold mb-4">Live Demo</h2>
                            <div className="flex space-x-4">
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
                                    whileHover={{scale: 1.05, transition: {duration: 0.3}}}
                                >
                                    Live Demo
                                </motion.a>
                            </div>
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
                        className="mt-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">More Images</h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {project.moreImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                                    whileHover={{scale: 1.05}}
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

            <Footer/>
        </motion.div>
    );
};

export default ProjectDetailsPage;
