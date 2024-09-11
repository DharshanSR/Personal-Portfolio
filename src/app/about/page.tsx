import React from "react";
import Image from "next/image";
import profileImage from '@/public/assests/images/Graduate-Men.png';
import hologoWorldLogo from '@/public/assests/images/hologoWorld.png';
import westminsterLogo from '@/public/assests/images/westminster-logo.png';
import esoftLogo from '@/public/assests/images/esoft-logo.jpg';
import hinduCollegeLogo from '@/public/assests/images/hindu_college.jpeg';

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
    return (
        <section id="about" className="container mx-auto px-4 py-20 bg-[#5a5855]">
            {/* About Me Section */}
            <h1 className="text-5xl font-extrabold text-center mb-8 text-[#c3c3c0]">About Me</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
                {/* Larger Profile Image */}
                <div className="relative mb-6 md:mb-0 md:mr-8">
                    <Image
                        src={profileImage}
                        alt="Profile"
                        width={850}
                        height={850}
                        className="rounded-full object-cover border-4 border-[#3c4b54]"
                    />
                </div>

                {/* About Me Text */}
                <div className="flex flex-col items-center">
                    <p className="text-xl text-[#c3c3c0] mb-4 text-justify">
                        I am a highly motivated software developer with a strong foundation in web and mobile app
                        development. I thrive in fast-paced environments where I can leverage my problem-solving skills
                        to create innovative solutions.
                    </p>
                    <p className="text-xl text-[#c3c3c0] mb-4 text-justify">
                        My passion for technology started during my early days of coding, and it has grown into a career
                        where I can apply my knowledge to real-world challenges. I take pride in writing clean, efficient code
                        and staying up-to-date with the latest industry trends.
                    </p>
                    <p className="text-xl text-[#c3c3c0] mb-4 text-justify">
                        When I❜m not coding, I enjoy contributing to open-source projects, exploring new technologies,
                        and collaborating with like-minded professionals.
                    </p>
                </div>

            </div>

            {/* Experience Section */}
            <h2 className="text-3xl font-semibold text-center text-[#3c4b54] mb-10 mt-10">Experience</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border border-[#6e6663] rounded-lg shadow-md p-6 flex items-center space-x-4 max-w-md bg-[#c3c3c0]"
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
                    </div>
                ))}
            </div>

            {/* Education Section */}
            <h2 className="text-3xl font-semibold text-center text-[#3c4b54] mb-10 mt-10">Education</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="border border-[#6e6663] rounded-lg shadow-md p-6 flex items-center space-x-4 max-w-md bg-[#c3c3c0]"
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutMe;
