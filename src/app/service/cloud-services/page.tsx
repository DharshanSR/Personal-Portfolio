"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";

import AWSIcon from '@/public/assests/icons/aws-svgrepo-com.svg';
import DockerIcon from '@/public/assests/icons/docker-svgrepo-com.svg';
import AWSS3Bucket from '@/public/assests/icons/amazon-s3.svg';
import AWSEC2Instance from '@/public/assests/icons/EC2.svg';
import AzureIcon from '@/public/assests/icons/azure-icon-svgrepo-com.svg';

import CallToAction from "@/components/CallToAction";
import WhyChoosePortfolio from "@/components/WhyChoosePortfolio";
import { SiGooglecloud, SiMicrosoftazure, SiKubernetes, SiDigitalocean, SiCloudflare, SiTerraform, SiFirebase } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';

const FullStackDevelopment = () => {
    // Create refs for in-view detection
    const refHero = useRef(null);
    const refOverview = useRef(null);
    const refTechnologies = useRef(null);
    const refWhyChoose = useRef(null);

    // Detect if elements are in view
    const isHeroInView = useInView(refHero);
    const isOverviewInView = useInView(refOverview);
    const isTechnologiesInView = useInView(refTechnologies);
    const isWhyChooseInView = useInView(refWhyChoose);

    return (
        <div className="min-h-screen bg-[#2A2A3C]">
            {/* Navbar */}
            <div className="p-9 sticky top-0 z-50">
                <Navbar/>
            </div>

            {/* Hero Section */}
            <motion.section
                ref={refHero}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative bg-gradient-to-r from-[#2A2A3C] to-[#1F1F2E] text-white py-24 md:py-32 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f1d] to-[#1f1f2e] opacity-30"></div>

                {/* Cloud Development Code Snippets */}
                <div className="absolute inset-0 flex justify-center items-center">
                    {/* AWS Code Snippet */}
                    <div className="absolute top-10 left-16 z-0 text-[#FF9900] opacity-70 font-mono text-lg md:text-xl animate-pulse">
            <pre>
                {`import boto3

ec2 = boto3.client('ec2')
instances = ec2.describe_instances()
print(instances)`}
            </pre>
                    </div>

                    {/* Google Cloud Code Snippet */}
                    <div className="absolute top-10 left-3/4 transform -translate-x-1/2 z-0 text-[#4285F4] opacity-70 font-mono text-lg md:text-xl animate-pulse">
            <pre>
                {`from google.cloud import storage

storage_client = storage.Client()
bucket = storage_client.get_bucket('my-bucket')
blobs = bucket.list_blobs()
for blob in blobs:
    print(blob.name)`}
            </pre>
                    </div>

                    {/* Azure Code Snippet */}
                    <div className="absolute bottom-32 right-16 z-0 text-[#0078D4] opacity-70 font-mono text-lg md:text-xl animate-pulse">
            <pre>
                {`from azure.identity import DefaultAzureCredential
from azure.mgmt.compute import ComputeManagementClient

credential = DefaultAzureCredential()
compute_client = ComputeManagementClient(credential, 'my-subscription-id')
virtual_machines = compute_client.virtual_machines.list_all()
for vm in virtual_machines:
    print(vm.name)`}
            </pre>
                    </div>

                    {/* Docker Code Snippet */}
                    <div className="absolute bottom-10 left-30 transform -translate-x-1/2 z-0 text-[#2496ED] opacity-70 font-mono text-lg md:text-xl animate-pulse">
            <pre>
                {`FROM python:3.8-slim

WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
CMD ["python", "app.py"]`}
            </pre>
                    </div>
                </div>

                {/* Intro Animation with Minimalistic Styling */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                    className="relative flex flex-col items-center px-6 md:px-12 z-10"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight transform-gpu transition-all duration-1000 hover:scale-110 hover:text-indigo-500">
                        Cloud Development & Solutions
                    </h2>

                    {/* Subheading with Smooth Fade-In */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHeroInView ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                        className="mt-6 text-lg md:text-xl max-w-6xl mx-auto text-gray-300 leading-relaxed"
                        style={{ lineHeight: "2.0" }}
                    >
                        Explore the power of cloud platforms like AWS, Google Cloud, Azure, and Docker. I design scalable, secure,
                        and efficient systems to transform your business with cloud-native solutions.
                    </motion.p>

                    {/* Call to Action Button with Hover Effect */}
                    <motion.a
                        href="#contact"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
                        className="mt-8 px-6 py-3 bg-indigo-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </motion.section>

            {/* Cloud Development Overview Section */}
            <motion.section
                ref={refOverview}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isOverviewInView ? 1 : 0, y: isOverviewInView ? 0 : 50 }}
                transition={{ duration: 0.6 }}
                className="py-20 max-w-7xl mx-auto px-6 md:px-12"
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-5xl font-extrabold text-indigo-500">Empowering Innovation with Cloud Solutions</h3>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed" style={{ lineHeight: "2.0" }}>
                        Build robust, scalable, and secure cloud-native solutions using the best of cloud computing technologies to
                        drive innovation in your business.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <div className="relative md:w-1/2">
                        <Image
                            src={fsdImage}
                            alt="Cloud Development Process"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Right: Content */}
                    <div
                        className="md:w-1/2 space-y-8 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-indigo-600"
                        style={{ lineHeight: "2.0" }}
                    >
                        {/* Feature 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50 }}
                            transition={{ duration: 0.4 }}
                            className="flex gap-4"
                        >
                            <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Scalable Infrastructure</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Design cloud systems that scale seamlessly to meet growing business demands, ensuring reliability and
                                    cost-efficiency.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50 }}
                            transition={{ duration: 0.4 }}
                            className="flex gap-4"
                        >
                            <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Cloud Security</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Implement best practices for securing cloud environments, ensuring that data and infrastructure are safe and
                                    compliant.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50 }}
                            transition={{ duration: 0.4 }}
                            className="flex gap-4"
                        >
                            <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Automation & CI/CD</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Streamline development workflows with cloud automation and continuous integration/deployment pipelines.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50 }}
                            transition={{ duration: 0.4 }}
                            className="flex gap-4"
                        >
                            <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Multi-cloud Solutions</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Leverage the strengths of multiple cloud providers to create resilient and flexible cloud architectures.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>


            {/* Technologies Section */}
            <motion.section
                ref={refTechnologies}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isTechnologiesInView ? 1 : 0, y: isTechnologiesInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="bg-[#14141F] text-black py-20 mt-10 mb-10"
            >
                <h3 className="text-center text-4xl font-bold mb-4 text-blue-600">Technologies I Use in Cloud Services</h3>
                <p className="text-center max-w-6xl mx-auto mb-12 text-white" style={{ lineHeight: "1.8" }}>
                    I leverage a range of robust tools and platforms to build effective cloud solutions. Utilizing
                    services like AWS for infrastructure, Azure for seamless integration, and Google Cloud for data
                    analytics, I ensure scalable and secure applications. Additionally, I incorporate containerization
                    technologies such as Docker and orchestration tools like Kubernetes to enhance deployment efficiency
                    and manageability in cloud environments.
                </p>


                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    <Image src={AWSIcon} alt="React Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={AWSS3Bucket} alt="Node.js Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={AzureIcon} alt="React Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={AWSEC2Instance} alt="Node.js Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={DockerIcon} alt="React Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                </div>
            </motion.section>
            <WhyChoosePortfolio refProp={refWhyChoose} isInView={isWhyChooseInView}/>
            <CallToAction/>
            {/* Footer */}
            <DownFooter arrowBgColor="#4299E1" />
        </div>
    );
};

export default FullStackDevelopment;
