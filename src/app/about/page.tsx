'use client';

import React from "react";
import Image from "next/image";
import profileImage from '@/public/assests/images/Graduate-Men.png';
import hologoWorldLogo from '@/public/assests/images/hologoWorld.png';
import westminsterLogo from '@/public/assests/images/westminster-logo.png';
import esoftLogo from '@/public/assests/images/esoft-logo.jpg';
import hinduCollegeLogo from '@/public/assests/images/hindu_college.jpeg';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const experiences = [
    {
        role: "Software Engineer Intern",
        company: "Hologo World",
        duration: "Sep 2024 - Present",
        location: "Newark, Delaware (Remote)",
        logo: hologoWorldLogo,
    },
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
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    const staggerContainer = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {staggerChildren: 0.2}},
    };

    // Using useInView hook with no triggerOnce so animation happens on scroll up and down
    const [aboutRef, aboutInView] = useInView({threshold: 0.1});
    const [experienceRef, experienceInView] = useInView({threshold: 0.1});
    const [educationRef, educationInView] = useInView({threshold: 0.1});

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
                className="text-5xl font-extrabold text-center mb-2 text-white"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsAbout}
                ref={aboutRef}
            >
                About Me
                <p className="text-lg mt-2 text-purple-500 font-bold">A glimpse into my journey and achievements</p>
            </motion.h1>

            <motion.div
                className="flex flex-col md:flex-row items-start md:items-center mb-6"
                variants={staggerContainer}
                initial="hidden"
                animate={controlsAbout}
                ref={aboutRef}
            >
                {/* Larger Profile Image */}
                {/*<motion.div*/}
                {/*    className="relative mb-6 md:mb-0 md:mr-8"*/}
                {/*    variants={fadeInUp}*/}
                {/*>*/}
                {/*    <Image*/}
                {/*        src={profileImage}*/}
                {/*        alt="Profile"*/}
                {/*        width={850}*/}
                {/*        height={850}*/}
                {/*        className="object-cover sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"*/}
                {/*    />*/}
                {/*</motion.div>*/}

                {/* About Me Text */}
                <motion.div className="w-full max-w-full p-4 md:p-8 font-medium" style={{lineHeight: "1.6"}} variants={staggerContainer}>
                    <motion.p className="text-xl text-white mb-4 text-justify" variants={fadeInUp}>
                        I am Ravindran Dharshan, a driven Software Developer currently studying at the University of
                        Westminster, London. With a diverse skill set in Full-Stack Development, Data Science, Machine
                        Learning, and Cloud Computing, I bring a unique combination of technical expertise and
                        problem-solving capabilities. I am highly organized, committed, and able to meet deadlines while
                        executing specific roles with precision.
                    </motion.p>
                    <motion.p className="text-xl text-white mb-4 text-justify" style={{lineHeight: "1.6"}} variants={fadeInUp}>
                        My ability to communicate effectively with individuals across various disciplines, coupled with
                        excellent organizational skills, allows me to thrive in team-based environments. My goal is to
                        transition into a full-time role where I can leverage my broad technical knowledge to support
                        business objectives and drive innovation.
                    </motion.p>
                    <motion.p className="text-xl text-white mb-2 text-justify" style={{lineHeight: "1.6"}} variants={fadeInUp}>
                        I am passionate about developing original solutions to complex problems, guided by an intuitive
                        and optimistic approach. Whether working on algorithms, full-stack projects, or business-related
                        challenges, I apply my problem-solving skills to deliver impactful results. Additionally, I am
                        adept at quickly grasping new concepts and helping others grow through self-motivation, making
                        me an effective leader in team settings.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Experience Section */}
            <motion.h2
                className="text-3xl font-semibold text-center text-purple-400 mb-10 mt-10"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsExperience}
                ref={experienceRef}
            >
                Experience
            </motion.h2>

            <motion.div
                className="relative flex flex-col justify-center items-center space-y-8 mb-8"
                variants={staggerContainer}
                initial="hidden"
                animate={controlsExperience}
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full max-w-lg bg-white border-l-8 border-purple-500 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-purple-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                        variants={fadeInUp}
                    >
                        {/* Timeline Dot */}
                        <div
                            className="absolute -left-6 top-8 w-4 h-4 bg-[#3c4b54] rounded-full border-4 border-white"></div>

                        {/* Experience Content */}
                        <div className="flex items-start space-x-4 cursor-pointer">
                            {/* Company Logo */}
                            <div className="w-20 hover:scale-105">
                                <Image
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    width={80}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                            {/* Experience Info */}
                            <div className="flex-1" style={{lineHeight: "1.6"}}>
                                <h2 className="text-xl font-semibold text-[#071015]">{exp.role}</h2>
                                <h3 className="text-black">{exp.company}</h3>
                                <p className="text-black">{exp.location}</p>
                                <p className="text-[#6e6663] font-bold">{exp.duration}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>


            {/* Education Section */}
            <motion.h2
                className="text-3xl font-semibold text-center text-purple-400 mb-10 mt-10"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsEducation}
                ref={educationRef}
            >
                Education
            </motion.h2>
            <motion.div className="flex flex-wrap justify-center gap-6 mb-8" variants={staggerContainer}
                        initial="hidden" animate={controlsEducation}>
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="border-l-8 border-purple-500 rounded-lg shadow-md p-6 flex items-center space-x-4 max-w-md bg-white" style={{lineHeight: "1.6"}}
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
