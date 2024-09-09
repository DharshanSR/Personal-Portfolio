// src/app/about/page.tsx

import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

// Import logos
// Import logos
import educationLogo from '@/app/favicon.ico'; // Replace with actual logo path
import companyLogo1 from '@/app/favicon.ico'; // Replace with actual logo path
import companyLogo2 from '@/app/favicon.ico'; // Replace with actual logo path


interface Experience {
    title: string;
    company: string;
    logo: StaticImageData;
    duration: string;
    description: string;
}

interface Education {
    institution: string;
    logo: StaticImageData;
    degree: string;
    duration: string;
}

const experiences: Experience[] = [
    {
        title: 'Software Engineer',
        company: 'Tech Company',
        logo: companyLogo1,
        duration: 'Jan 2021 - Present',
        description: 'Worked on various projects related to web development, including building scalable applications and optimizing performance.',
    },
    {
        title: 'Frontend Developer',
        company: 'Another Tech Company',
        logo: companyLogo2,
        duration: 'Jun 2019 - Dec 2020',
        description: 'Focused on creating responsive and user-friendly web interfaces, collaborating with designers and backend developers.',
    },
    // Add more experiences as needed
];

const education: Education[] = [
    {
        institution: 'University Name',
        logo: educationLogo,
        degree: 'Bachelor of Science in Computer Science',
        duration: '2015 - 2019',
    },
    {
        institution: 'University Name',
        logo: educationLogo,
        degree: 'Bachelor of Science in Computer Science',
        duration: '2015 - 2019',
    },
    // Add more education details as needed
];

const About = () => {
    return (
        <div className="container max-w-4xl mx-auto p-6">
            {/* About Me Section */}
            <section id="about" className="mb-12">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed">
                    I am a passionate software developer with a background in computer science. I enjoy solving complex problems and building innovative solutions. My expertise includes front-end development, user experience design, and web performance optimization.
                </p>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Experience</h2>
                <ul className="space-y-6">
                    {experiences.map((exp, index) => (
                        <li key={index} className="max-w-md mx-auto flex items-start gap-4 p-4 border rounded-lg shadow-md mb-6"> {/* Adjusted width and padding */}
                            <div className="w-12 h-12"> {/* Smaller logo size */}
                                <Image
                                    src={exp.logo}
                                    alt={`${exp.company} Logo`}
                                    className="object-contain"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{exp.title}</h3>
                                <p className="text-sm font-medium text-gray-700">{exp.company}</p>
                                <p className="text-sm text-gray-500">{exp.duration}</p>
                                <p className="mt-2 text-gray-600 text-sm">{exp.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Education Section */}
            <section id="education">
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <ul className="space-y-6">
                    {education.map((edu, index) => (
                        <li key={index} className="max-w-md mx-auto flex items-start gap-4 p-4 border rounded-lg shadow-md mb-6"> {/* Adjusted width and padding */}
                            <div className="w-12 h-12"> {/* Smaller logo size */}
                                <Image
                                    src={edu.logo}
                                    alt={`${edu.institution} Logo`}
                                    className="object-contain"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                                <p className="text-sm font-medium text-gray-700">{edu.institution}</p>
                                <p className="text-sm text-gray-500">{edu.duration}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default About;