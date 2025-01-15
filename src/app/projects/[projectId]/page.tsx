'use client';

import React, { useState } from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FaGithub, FaLink } from "react-icons/fa6";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import {techIcons} from "@/data/techIcons";

const ProjectDetailsPage = ({ params }) => {
    const router = useRouter();
    const project = projects.find((proj) => proj.id === params.projectId);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    if (!project) return notFound();

    const openModal = (img) => {
        setSelectedImage(img);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-[#2A2A3C] text-white min-h-screen">
            <div className="container mx-auto px-6 sm:px-8 py-12">
                {/* Back Button */}
                <Button
                    onClick={() => router.push('/#projects')}
                    className="mb-8 bg-gradient-to-l from-[#2A2A3C] to-[#394263] text-white py-3 px-5 rounded-lg shadow-md flex items-center space-x-2"
                >
                    <FaArrowLeft className="w-5 h-5" />
                    <span className="text-lg">Back to Projects</span>
                </Button>

                {/* Project Title */}
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-[#00B5D8]">{project.title}</h1>

                {/* Project Image */}
                <div className="relative shadow-xl rounded-lg overflow-hidden mb-8 w-full sm:w-[650px] mx-auto">
                    <Image
                        src={project.image}
                        alt={`Main image of ${project.title}`}
                        className="w-full h-auto object-cover"
                        width={600}
                        height={400}
                    />
                </div>

                {/* Project Description */}
                <p className="text-lg sm:text-xl mb-12 text-justify leading-relaxed">{project.detailedDescription}</p>

                {/* Technologies Used */}
                <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">Technologies Used</h2>
                <div className="flex justify-center gap-8 mb-16 flex-wrap">
                    {project.technologies.map((tech, index) => (
                        <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                            <Image
                                src={techIcons}
                                alt={`${tech} icon`}
                                width={50}
                                height={50}
                                className="mx-auto"
                            />
                        </div>
                    ))}
                </div>

                {/* GitHub and Live Demo Links */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#3b3b3b] text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#2a2a2a] flex items-center gap-3"
                        >
                            <FaGithub className="w-6 h-6" />
                            <span className="text-lg">GitHub Repo</span>
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#2a9d8f] text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#229482] flex items-center gap-3"
                        >
                            <FaLink className="w-6 h-6" />
                            <span className="text-lg">Live Demo</span>
                        </a>
                    )}
                </div>

                {/* More Images */}
                {project.moreImages.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">More Images</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {project.moreImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
                                    onClick={() => openModal(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`Additional image ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal for Image Pop-up */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="relative w-full max-w-4xl p-4">
                        <Image
                            src={selectedImage}
                            alt="Selected project image"
                            className="max-w-full max-h-[80vh] object-contain"
                            width={1000}
                            height={700}
                        />
                        <button
                            className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
                            onClick={closeModal}
                        >
                            <FaTimes size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailsPage;
