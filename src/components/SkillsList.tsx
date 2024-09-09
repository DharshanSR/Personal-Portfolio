'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define the categories, skills, and associated SVG icons
const skills = {
    Languages: [
        { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
        { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
        { name: 'HTML', icon: '/assets/icons/html.svg' },
        { name: 'CSS', icon: '/assets/icons/css.svg' },
        { name: 'Python', icon: '/assets/icons/python.svg' },
    ],
    Frameworks: [
        { name: 'React', icon: '/assets/icons/react.svg' },
        { name: 'Next.js', icon: '/assets/icons/nextjs.svg' },
        { name: 'Tailwind CSS', icon: '/assets/icons/tailwindcss.svg' },
        { name: 'Node.js', icon: '/assets/icons/nodejs.svg' },
        { name: 'Framer Motion', icon: '/assets/icons/framer.svg' },
        { name: 'GSAP', icon: '/assets/icons/gsap.svg' },
    ],
    'Version Control': [
        { name: 'Git', icon: '/assets/icons/git.svg' },
        { name: 'GitHub', icon: '/assets/icons/github.svg' },
    ],
    'Design & Prototyping': [
        { name: 'Figma', icon: '/assets/icons/figma.svg' },
        { name: 'Adobe XD', icon: '/assets/icons/adobexd.svg' },
    ],
    'Backend & Databases': [
        { name: 'Node.js', icon: '/assets/icons/nodejs.svg' },
        { name: 'Firebase', icon: '/assets/icons/firebase.svg' },
        { name: 'MongoDB', icon: '/assets/icons/mongodb.svg' },
    ],
    'Deployment & Hosting': [
        { name: 'Vercel', icon: '/assets/icons/vercel.svg' },
        { name: 'Netlify', icon: '/assets/icons/netlify.svg' },
    ],
    Tools: [
        { name: 'VSCode', icon: '/assets/icons/vscode.svg' },
        { name: 'Postman', icon: '/assets/icons/postman.svg' },
        { name: 'Sentry', icon: '/assets/icons/sentry.svg' },
    ],
    Others: [
        { name: 'Axios', icon: '/assets/icons/axios.svg' },
        { name: 'Clerk', icon: '/assets/icons/clerk.svg' },
        { name: 'Liveblocks', icon: '/assets/icons/liveblocks.svg' },
        { name: 'Three.js', icon: '/assets/icons/threejs.svg' },
        { name: 'Lexical Editor', icon: '/assets/icons/lexical.svg' },
        { name: 'ShadCN', icon: '/assets/icons/shadcn.svg' },
    ],
};

const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const SkillsList: React.FC = () => {
    return (
        <section className="py-16" id="skills">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <motion.h1
                    className="text-4xl font-bold mb-6 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Skills
                </motion.h1>

                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Technologies I Work With
                </motion.h2>

                {/* Map over each category */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {Object.keys(skills).map((category) => (
                        <motion.div
                            key={category}
                            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
                            <ul className="space-y-2">
                                {skills[category as keyof typeof skills].map((skill) => (
                                    <motion.li
                                        key={skill.name}
                                        className="flex items-center gap-4"
                                        variants={item}
                                    >
                                        {/* SVG icon */}
                                        <Image src={skill.icon} alt={skill.name} width={32} height={32} />
                                        <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsList;
