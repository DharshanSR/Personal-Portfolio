'use client';

import React, {useState} from "react";
import Image from "next/image";
import hologoWorldLogo from '@/public/assests/images/hologoWorld.png';
import westminsterLogo from '@/public/assests/images/westminster-logo.png';
import esoftLogo from '@/public/assests/images/esoft-logo.jpg';
import hinduCollegeLogo from '@/public/assests/images/hindu_college.jpeg';
import girlscriptcodeOfSummer from "@/public/assests/images/gssoc.jpg";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const experiences = [
    {
        role: "Software Engineer Intern",
        company: "Hologo World",
        duration: "Sep 2024 - Present",
        location: "Newark, Delaware (Remote)",
        description: [
            "During my internship at Hologo World, I had the opportunity to contribute to the development of immersive educational experiences using cutting-edge AR and VR technologies. My work focused on designing and implementing user-friendly interfaces that enhance the way users interact with educational content.",
            "In addition to front-end development, I also optimized backend systems by improving database queries and reducing API response times, which significantly boosted application performance. This role helped me develop a deeper understanding of scalable software design and collaborative development in a remote environment."
        ],
        logo: hologoWorldLogo,
    },
    {
        role: "Open Source Contributor",
        company: "GirlScript Summer of Code",
        duration: "Oct 2024 - Present",
        location: "Delhi, India (Remote)",
        description: [
            "As a contributor to the GirlScript Summer of Code program, I worked on diverse open-source projects, enhancing codebases and implementing new features. This experience allowed me to gain exposure to collaborative development with a global community of developers.",
            "One of my major contributions was improving project documentation and creating beginner-friendly onboarding guides, which made the repositories more accessible to new contributors. I also focused on writing modular and reusable code to promote best practices in software development."
        ],
        logo: girlscriptcodeOfSummer,
    },
];

const education = [
    {
        degree: "Bachelor of Engineering (BEng) in Software Engineering",
        institution: "University of Westminster",
        location: "London, United Kingdom",
        year: "2023 - Present",
        logo: westminsterLogo,
    },
    {
        degree: "Diploma in English",
        institution: "ESoft Metro Campaus",
        location: "Colombo, Sri Lanka",
        year: "2021-2022",
        logo: esoftLogo,
    },
    {
        degree: "Advanced Level - Physical Science",
        institution: "Hindu College, Colombo - 04",
        location: "Colombo, Sri Lanka",
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

    const [activeTab, setActiveTab] = useState(
        experiences.reduce((acc, _, idx) => ({ ...acc, [idx]: 0 }), {})
    );

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
        <section id="about" className="container mx-auto px-4 py-20 relative">

            {/* About Me Section */}
            <motion.h1
                className="text-6xl font-extrabold text-center mb-2 text-[#00B5D8]"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsAbout}
                ref={aboutRef}
            >
                About Me
                <p className="text-lg mt-2 text-[#9B4D96] font-bold">A glimpse into my journey and achievements</p>
            </motion.h1>

            <motion.div
                className="flex flex-col md:flex-row items-start md:items-center mb-6"
                variants={staggerContainer}
                initial="hidden"
                animate={controlsAbout}
                ref={aboutRef}
            >
                {/* About Me Text */}
                <motion.div className="w-full max-w-full p-4 md:p-8 font-medium" variants={staggerContainer}>
                    <motion.p className="text-xl text-white mb-4 text-justify" style={{lineHeight: "2.0"}}
                              variants={fadeInUp}>
                        I am Ravindran Dharshan, a driven Software Developer currently studying at the University of
                        Westminster, London. With a diverse skill set in Full-Stack Development, Data Science, Machine
                        Learning, and Cloud Computing, I bring a unique combination of technical expertise and
                        problem-solving capabilities. I am highly organized, committed, and able to meet deadlines while
                        executing specific roles with precision.
                    </motion.p>
                    <motion.p className="text-xl text-white mb-4 text-justify" style={{lineHeight: "2.0"}}
                              variants={fadeInUp}>
                        My ability to communicate effectively with individuals across various disciplines, coupled with
                        excellent organizational skills, allows me to thrive in team-based environments. My goal is to
                        transition into a full-time role where I can leverage my broad technical knowledge to support
                        business objectives and drive innovation.
                    </motion.p>
                    <motion.p className="text-xl text-white mb-2 text-justify" style={{lineHeight: "2.0"}}
                              variants={fadeInUp}>
                        I am passionate about developing original solutions to complex problems, guided by an intuitive
                        and optimistic approach. Whether working on algorithms, full-stack projects, or business-related
                        challenges, I apply my problem-solving skills to deliver impactful results. Additionally, I am
                        adept at quickly grasping new concepts and helping others grow through self-motivation, making
                        me an effective leader in team settings.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Experience Section */}
            <motion.section
                className="py-20"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsExperience}
                ref={experienceRef}
            >
                <motion.h2
                    className="text-4xl font-bold text-center text-[#00B5D8] mb-12"
                    variants={fadeInUp}
                >
                    Professional Experience
                </motion.h2>

                <motion.div
                    className="relative max-w-6xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controlsExperience}
                >
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-300 h-full"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex items-center ${
                                index % 2 === 0 ? "justify-start" : "justify-end"
                            } mb-16`}
                            variants={{
                                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            {/* Connector */}
                            <div
                                className={`w-6 h-6 rounded-full bg-purple-800 border-4 border-white absolute left-1/2 transform -translate-x-1/2 z-10`}
                            ></div>

                            {/* Content */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className={`relative w-[95%] max-w-lg p-8 bg-white shadow-lg rounded-lg border-4 transition-all ${
                                    index % 2 === 0
                                        ? "ml-auto border-green-300"
                                        : "mr-auto border-green-300"
                                }`}
                            >
                                {/* Company Info */}
                                <div className="flex items-center space-x-6 mb-4">
                                    <div
                                        className="w-20 h-20 rounded-full border-2 border-purple-400 flex-shrink-0 overflow-hidden">
                                        <Image
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            width={80}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-extrabold text-gray-800">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-gray-600 font-semibold">{exp.company}</p>
                                        <p className="text-sm text-gray-600 mb-2 mt-2">{exp.location}</p>
                                        <p className="text-sm text-purple-500 font-medium">{exp.duration}</p>
                                    </div>
                                </div>

                                {/* Description Tabs */}
                                <div className="mt-4">
                                    <div className="flex justify-center space-x-4 border-b pb-2">
                                        {exp.description.map((_, idx) => (
                                            <button
                                                key={idx}
                                                className={`text-sm font-semibold ${
                                                    activeTab[index] === idx
                                                        ? "text-purple-800 border-b-2 border-purple-800"
                                                        : "text-gray-500"
                                                }`}
                                                onClick={() => setActiveTab({ ...activeTab, [index]: idx })}
                                            >
                                                Achievements {idx + 1}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-4 text-gray-700 leading-relaxed">
                                        {exp.description[activeTab[index]]}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>


            {/* Education Section */}
            <motion.section
                className="py-20 relative overflow-hidden"
                variants={fadeInUp}
                initial="hidden"
                animate={controlsEducation}
                ref={educationRef}
            >
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl font-extrabold text-center text-purple-600 mb-12 relative z-10"
                    variants={fadeInUp}
                >
        <span className="block text-5xl text-[#00B5D8] drop-shadow-md">
            Education
        </span>
                    <span className="block text-lg font-medium text-[#9B4D96] mt-2">
            Milestones of my academic journey
        </span>
                </motion.h2>

                {/* Timeline Container */}
                <motion.div
                    className="relative max-w-7xl mx-auto z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controlsEducation}
                >
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-300 h-full z-0"></div>
                    {/* Timeline Items */}
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex items-center mb-12 ${
                                index % 2 === 0 ? "justify-start" : "justify-end"
                            }`}
                            variants={{
                                hidden: {opacity: 0, x: index % 2 === 0 ? -50 : 50},
                                visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            {/* Connector Dot */}
                            <div
                                className="w-5 h-5 rounded-full bg-purple-600 border-4 border-white absolute left-1/2 transform -translate-x-1/2 z-10"
                            ></div>

                            {/* Timeline Content */}
                            <div
                                className={`relative bg-white shadow-lg rounded-lg p-8 border-4 ${
                                    index % 2 === 0
                                        ? "ml-auto border-purple-300"
                                        : "mr-auto border-purple-300"
                                } w-[90%] max-w-xl hover:shadow-2xl hover:border-purple-500 transition-transform transform hover:scale-105`}
                            >
                                {/* Institution and Details */}
                                <div className="flex items-start space-x-6">
                                    <div
                                        className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-l from-green-600 via-pink-300 to-purple-700 clip-triangle opacity-40"></div>
                                    {/* Institution Logo */}
                                    <div className="w-32 h-32 overflow-hidden shadow-lg">
                                        <Image
                                            src={edu.logo}
                                            alt={`${edu.institution} logo`}
                                            width={120}
                                            height={120}
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Education Info */}
                                    <div>
                                        <h3 className="text-2xl font-extrabold text-gray-800 mb-1">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-lg text-gray-600 font-bold">
                                            {edu.institution}
                                        </p>
                                        <p className="text-lg text-gray-600 font-medium">
                                            {edu.location}
                                        </p>
                                        <p className="text-sm text-purple-500 font-semibold mt-2">
                                            {edu.year}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </section>
    );
};

export default AboutMe;
