'use client';

import DownFooter from "@/components/DownFooter";
import ProjectCard from "@/components/ProjectCard"; // Assume you have a ProjectCard component
// Assume you have a Testimonial component
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const WebDevelopment = () => {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <section className="hero-section text-center py-20">
                <h1 className="text-4xl font-bold">Full Stack Web Development</h1>
                <p className="text-lg mt-4">Bringing ideas to life with powerful, scalable, and responsive web solutions using modern technologies.</p>
            </section>

            {/* Technologies Section */}
            <section className="technologies-section py-12 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center mb-8">Technologies I Use</h2>
                <div className="flex justify-around">
                    <div>
                        <h3 className="text-xl font-medium">Frontend</h3>
                        <p>React, Next.js, Tailwind CSS, TypeScript</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Backend</h3>
                        <p>Node.js, Express, Laravel, PHP</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Database</h3>
                        <p>MongoDB, MySQL, Firebase</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section py-12">
                <h2 className="text-3xl font-semibold text-center mb-8">Services I Offer</h2>
                <ul className="list-disc list-inside max-w-2xl mx-auto">
                    <li>Custom Frontend Development</li>
                    <li>Responsive Design Implementation</li>
                    <li>Backend Development with Node.js, Express, and Laravel</li>
                    <li>REST API Integration & Development</li>
                    <li>Database Design and Management</li>
                    <li>Performance Optimization and Security</li>
                </ul>
            </section>

            {/* Development Process Section */}
            <section className="process-section py-12 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center mb-8">My Development Process</h2>
                <ol className="list-decimal list-inside max-w-2xl mx-auto">
                    <li>Requirement Analysis & Discovery</li>
                    <li>Design and Prototyping</li>
                    <li>Frontend and Backend Development</li>
                    <li>Testing and Quality Assurance</li>
                    <li>Deployment & Support</li>
                </ol>
            </section>

            {/* Portfolio Section */}
            <section className="portfolio-section py-12">
                <h2 className="text-3xl font-semibold text-center mb-8">My Full Stack Projects</h2>
                <div className="flex justify-center space-x-6">
                    <ProjectCard
                        title="Project A"
                        description="A web platform using Next.js and MongoDB"
                        imageUrl="/path/to/projectA-image.jpg"
                    />
                    <ProjectCard
                        title="Project B"
                        description="E-commerce solution built with Laravel and MySQL"
                        imageUrl="/path/to/projectB-image.jpg"
                    />
                </div>
            </section>

            {/* Testimonials Section */}
            {/*<section className="testimonials-section py-12 bg-gray-100">*/}
            {/*    <h2 className="text-3xl font-semibold text-center mb-8">What My Clients Say</h2>*/}
            {/*    <div className="flex justify-center space-x-6">*/}
            {/*        <Testimonial*/}
            {/*            client="John Doe"*/}
            {/*            feedback="Ravindran delivered an outstanding solution for our web platform, exceeding all expectations!"*/}
            {/*        />*/}
            {/*        <Testimonial*/}
            {/*            client="Jane Smith"*/}
            {/*            feedback="Highly professional, with excellent skills in full stack development. Will definitely work with Ravindran again!"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Call to Action Section */}
            <section className="cta-section py-12 text-center">
                <h2 className="text-3xl font-semibold">Let's Build Something Great Together</h2>
                <p className="text-lg mt-4">Contact me today to start your next web development project.</p>
                <a href="#contact-me" className="cta-button mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Get In Touch
                </a>
            </section>

            {/* Footer Section */}
            <DownFooter />
        </div>
    );
};

export default WebDevelopment;
