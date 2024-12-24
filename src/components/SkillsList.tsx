'use client';

import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

// languages
import TypeScriptIcon from '@/public/assests/icons/typescript-original.svg';
import JavaScriptIcon from '@/public/assests/icons/javascript-original.svg';
import HTMLIcon from '@/public/assests/icons/html5-original.svg';
import CSSIcon from '@/public/assests/icons/css3-original.svg';
import pythonIcon from '@/public/assests/icons/python-original.svg';
import javaIcon from '@/public/assests/icons/java-original.svg';
import rIcon from '@/public/assests/icons/r-original.svg';
import PHPIcon from '@/public/assests/icons/PHP.png';

// Frameworks
import ReactIcon from '@/public/assests/icons/react-original.svg';
import ReactNativeIcon from '@/public/assests/icons/react-original.svg';
import NextJsIcon from '@/public/assests/icons/nextjs-original.svg';
import NodeJsIcon from '@/public/assests/icons/nodejs-original.svg';
import TailwindCssIcon from '@/public/assests/icons/tailwindcss-original.svg';
import FramerMotionIcon from '@/public/assests/icons/framer-motion.png';
import Laravel from '@/public/assests/icons/laravel-2.svg';
import FlaskIcon from '@/public/assests/icons/flask-svgrepo-com.svg';
import DjangoIcon from '@/public/assests/icons/django-svgrepo-com.svg';
import Threejs from '@/public/assests/icons/Threejs-logo.svg';
import WebGL from '@/public/assests/icons/webgl-svgrepo-com.svg';
import AngularIcon from "@/public/assests/icons/angular-icon.svg";
import SpringBoot from "@/public/assests/icons/spring-3.svg";

// Version Control
import GitIcon from '@/public/assests/icons/git-original.svg';
import GitHubIcon from '@/public/assests/icons/github-original.svg';
import GitLabIcon from '@/public/assests/icons/gitlab.png';

// Backend & Databases
import FirebaseIcon from '@/public/assests/icons/firebase-original.svg';
import MongoDbIcon from '@/public/assests/icons/mongodb-original.svg';
import PostgreSqlIcon from '@/public/assests/icons/postgresql-original.svg';
import MySqlIcon from '@/public/assests/icons/mysql-original.svg';
import ExpressIcon from '@/public/assests/icons/express-original.svg';
import JsonIcon from '@/public/assests/icons/json-original.svg';
import NpmIcon from '@/public/assests/icons/npm-original-wordmark.svg';
import AppwriteIcon from '@/public/assests/icons/appwrite-original.svg';
import socketIcon from "@/public/assests/icons/socket-io.svg";

// Deployment & Hosting
import VercelIcon from '@/public/assests/icons/vercel-original.svg';
import NetlifyIcon from '@/public/assests/icons/netlify-original.svg';
import RenderIcon from '@/public/assests/icons/render.png';

// IDEs
import IntelliJIcon from '@/public/assests/icons/intellij-original.svg';
import PyCharmIcon from '@/public/assests/icons/pycharm-original.svg';
import RStudioIcon from '@/public/assests/icons/rstudio-original.svg';
import VSCodeIcon from '@/public/assests/icons/vscode-original.svg';
import WebStormIcon from '@/public/assests/icons/webstorm-original.svg';
import PHPStorm from '@/public/assests/icons/PhpStorm_Icon.svg.png'

//cloud
import AWSIcon from '@/public/assests/icons/aws-svgrepo-com.svg';
import DockerIcon from '@/public/assests/icons/docker-svgrepo-com.svg';
import AWSS3Bucket from '@/public/assests/icons/amazon-s3.svg';
import AWSEC2Instance from '@/public/assests/icons/EC2.svg';
import AzureIcon from '@/public/assests/icons/azure-icon-svgrepo-com.svg';

// Define the categories, skills, and associated SVG icons
const skills = {
    Languages: [
        {name: 'TypeScript', icon: TypeScriptIcon},
        {name: 'JavaScript', icon: JavaScriptIcon},
        {name: 'HTML', icon: HTMLIcon},
        {name: 'CSS', icon: CSSIcon},
        {name: 'Tailwind CSS', icon: TailwindCssIcon},
        {name: 'Python', icon: pythonIcon},
        {name: 'Java', icon: javaIcon},
        {name: 'R', icon: rIcon},
        {name: 'PHP', icon: PHPIcon},
    ],
    Frameworks: [
        {name: 'React', icon: ReactIcon},
        {name: 'Next js', icon: NextJsIcon},
        {name: 'Angular', icon: AngularIcon},
        {name: 'Spring Boot', icon: SpringBoot},
        {name: 'Laravel', icon: Laravel},
        // { name: 'Django', icon: DjangoIcon },
        // { name: 'Flask', icon: FlaskIcon },
        {name: 'Framer Motion', icon: FramerMotionIcon},
        {name: 'React Native', icon: ReactNativeIcon},
        {name: 'Three js', icon: Threejs},
        {name: 'WebGL', icon: WebGL},
    ],
    Backend: [
        {name: 'Node.js', icon: NodeJsIcon},
        {name: 'Express', icon: ExpressIcon},
        {name: 'JSON', icon: JsonIcon},
        {name: 'NPM', icon: NpmIcon},
        {name: 'Socket.io', icon: socketIcon}
    ],
    Databases: [
        {name: 'Firebase', icon: FirebaseIcon},
        {name: 'MongoDB', icon: MongoDbIcon},
        {name: 'PostgreSQL', icon: PostgreSqlIcon},
        {name: 'MySQL', icon: MySqlIcon},
        {name: 'Appwrite', icon: AppwriteIcon},
    ],
    Cloud: [
        {name: 'AWS', icon: AWSIcon},
        {name: 'Docker', icon: DockerIcon},
        {name: 'AWS S3 Bucket', icon: AWSS3Bucket},
        {name: 'AWS EC2 Instance', icon: AWSEC2Instance},
        {name: 'Azure', icon: AzureIcon},
    ],
    IDE: [
        {name: 'IntelliJ', icon: IntelliJIcon},
        {name: 'PyCharm', icon: PyCharmIcon},
        {name: 'RStudio', icon: RStudioIcon},
        {name: 'VSCode', icon: VSCodeIcon},
        {name: 'WebStorm', icon: WebStormIcon},
        {name: 'PHPStorm', icon: PHPStorm},
    ],
    Deployment: [
        {name: 'Vercel', icon: VercelIcon},
        {name: 'Netlify', icon: NetlifyIcon},
        {name: 'Render', icon: RenderIcon},
    ],
    VersionControl: [
        {name: 'Git', icon: GitIcon},
        {name: 'GitHub', icon: GitHubIcon},
        {name: 'GitLab', icon: GitLabIcon},
    ],
};

const container = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
};

const SkillsList: React.FC = () => {
    return (
        <section className="py-20 bg-[#2A2A3C] relative" id="skills">
            <div className="container mx-auto px-4 relative z-20">
                {/* Heading */}
                <motion.h1
                    className="text-5xl font-extrabold mb-6 text-center text-[#00B5D8]"
                    initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                >
                    Skills
                </motion.h1>

                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-[#9B4D96]"
                    initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                >
                    Technologies I Work With
                </motion.h2>

                {/* Category Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    {Object.keys(skills).map((category) => (
                        <motion.div
                            key={category}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
                            whileHover={{scale: 1.05}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-[#071015] text-center"
                                style={{lineHeight: "1.6"}}>{category}</h3>
                            <div className="grid grid-cols-3 gap-4 cursor-pointer">
                                {skills[category as keyof typeof skills].map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        className="flex flex-col items-center justify-center text-center"
                                        variants={item}
                                        whileHover={{scale: 1.1}}
                                    >
                                        <Image src={skill.icon} alt={skill.name} width={50} height={50}/>
                                        <span className="mt-2 text-sm text-cyan-600 font-semibold"
                                              style={{lineHeight: "2.0"}}>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsList;