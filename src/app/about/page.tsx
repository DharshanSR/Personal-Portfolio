'use client';

import React from "react";
import Image from "next/image";
import profileImage from '@/public/assests/images/Graduate-Men.png';
import hologoWorldLogo from '@/public/assests/images/hologoWorld.png';
import westminsterLogo from '@/public/assests/images/westminster-logo.png';
import esoftLogo from '@/public/assests/images/esoft-logo.jpg';
import hinduCollegeLogo from '@/public/assests/images/hindu_college.jpeg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
    {
        role: "Software Engineer Intern",
        company: "Hologo World",
        duration: "Sep 2024 - Present",
        logo: hologoWorldLogo,
    },
];

const education = [
    {
        degree: "Bachelor of Engineering (BEng) in Software Engineering",
        institution: "University of Westminster",
        year: "2023 - Present",
        logo: westminsterLogo,
    },
    {
        degree: "Diploma in English",
        institution: "ESoft Metro Campaus",
        year: "2021-2022",
        logo: esoftLogo,
    },
    {
        degree: "Advanced Level - Physical Science",
        institution: "Hindu College, Colombo - 04",
        year: "2020-2022",
        logo: hinduCollegeLogo,
    },
];

const AboutMe = () => {
    // Define simple animations
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    // Using useInView hook with no triggerOnce so animation happens on scroll up and down
    const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.1 });
    const [educationRef, educationInView] = useInView({ threshold: 0.1 });

    const controlsAbout = useAnimation();
    const controlsExperience = useAnimation();
    const controlsEducation = useAnimation();

    // Control animations based on visibility
    React.useEffect(() => {
        if (aboutInView) {
            controlsAbout.start("visible");
        } else {
            controlsAbout.start("hidden");
        }
    }, [aboutInView, controlsAbout]);

    React.useEffect(() => {
        if (experienceInView) {
            controlsExperience.start("visible");
        } else {
            controlsExperience.start("hidden");
        }
    }, [experienceInView, controlsExperience]);

    React.useEffect(() => {
        if (educationInView) {
            controlsEducation.start("visible");
        } else {
            controlsEducation.start("hidden");
        }
    }, [educationInView, controlsEducation]);

    return (
        <section id="about" className="container mx-auto px-4 py-20 bg-[#14141F]">
            {/* About Me Section */}
            <motion.h1
                className="text-5xl font-extrabold text-center mb-8 text-[#c3c3c0]"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsAbout}
                ref={aboutRef}
            >
                About Me
                <p className="text-lg mt-2 text-gray-600 font-bold">A glimpse into my journey and achievements</p>
            </motion.h1>

            <motion.div
                className="flex flex-col md:flex-row items-start md:items-center mb-12"
                variants={staggerContainer}
                initial="hidden"
                animate={controlsAbout}
                ref={aboutRef}
            >
                {/* Larger Profile Image */}
                <motion.div
                    className="relative mb-6 md:mb-0 md:mr-8"
                    variants={fadeInUp}
                >
                    <Image
                        src={profileImage}
                        alt="Profile"
                        width={850}
                        height={850}
                        className="object-cover sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                    />
                </motion.div>

                {/* About Me Text */}
                <motion.div className="md:w-[90%] p-4 md:p-8 font-semibold" variants={staggerContainer}>
                    <motion.p className="text-xl text-[#c3c3c0] mb-4 text-justify" variants={fadeInUp}>
                        I am a highly motivated software developer with a strong foundation in web and mobile app
                        development. I thrive in fast-paced environments where I can leverage my problem-solving skills
                        to create innovative solutions.
                    </motion.p>
                    <motion.p className="text-xl text-[#c3c3c0] mb-4 text-justify" variants={fadeInUp}>
                        My passion for technology started during my early days of coding, and it has grown into a career
                        where I can apply my knowledge to real-world challenges.
                    </motion.p>
                    <motion.p className="text-xl text-[#c3c3c0] mb-4 text-justify" variants={fadeInUp}>
                        As I progress in my career, I aspire to join dynamic teams where I can contribute to solving complex challenges in the tech industry. My objective is to harness my expertise in modern technologies and cybersecurity to create impactful and innovative solutions that meet the ever-evolving demands of the digital world.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Experience Section */}
            <motion.h2
                className="text-3xl font-semibold text-center text-[#3c4b54] mb-10 mt-10"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsExperience}
                ref={experienceRef}
            >
                Experience
            </motion.h2>
            <motion.div className="flex flex-wrap justify-center gap-6 mb-8" variants={staggerContainer} initial="hidden" animate={controlsExperience}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="border border-[#6e6663] rounded-lg shadow-md p-6 flex items-center space-x-4 max-w-md bg-[#c3c3c0]"
                        variants={fadeInUp}
                    >
                        {/* Company Logo */}
                        <div>
                            <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                width={100}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                        {/* Experience Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#071015]">{exp.role}</h3>
                            <p className="text-[#071015]">{exp.company}</p>
                            <p className="text-[#6e6663] font-bold">{exp.duration}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Education Section */}
            <motion.h2
                className="text-3xl font-semibold text-center text-[#3c4b54] mb-10 mt-10"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsEducation}
                ref={educationRef}
            >
                Education
            </motion.h2>
            <motion.div className="flex flex-wrap justify-center gap-6 mb-8" variants={staggerContainer} initial="hidden" animate={controlsEducation}>
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="border border-[#6e6663] rounded-lg shadow-md p-6 flex items-center space-x-4 max-w-md bg-[#c3c3c0]"
                        variants={fadeInUp}
                    >
                        {/* Institution Logo */}
                        <div>
                            <Image
                                src={edu.logo}
                                alt={`${edu.institution} logo`}
                                width={150}
                                height={76}
                                className="object-contain"
                            />
                        </div>
                        {/* Education Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#071015]">{edu.degree}</h3>
                            <p className="text-[#071015]">{edu.institution}</p>
                            <p className="text-[#6e6663] font-bold">{edu.year}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default AboutMe;
