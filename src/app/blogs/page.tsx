'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlogPreview from '@/components/BlogPreview';
import nextjsImage from "@/public/assests/images/unserstanding-nextjs.png";
import triangleshape from "@/public/assests/images/triangle_light.png";  // Ensure this path is correct!
import Image from 'next/image';  // Import next/image for optimized images

// Sample blog data (Added date prop)
const allBlogs = [
    {
        id: '1',
        title: 'Understanding Next.js: A Comprehensive Overview',
        description: 'A comprehensive guide to getting started with Next.js.',
        image: nextjsImage,
        link: 'https://medium.com/@username/understanding-next-js-1234567890',
        date: '2024-11-30', // Example date
    },
    {
        id: '2',
        title: 'Advanced React Patterns for Developers',
        description: 'A deep dive into advanced patterns for React.',
        image: nextjsImage,
        link: 'https://medium.com/@username/advanced-react-patterns-1234567890',
        date: '2024-11-29', // Example date
    },
    {
        id: '1',
        title: 'Understanding Next.js: A Comprehensive Overview',
        description: 'A comprehensive guide to getting started with Next.js.',
        image: nextjsImage,
        link: 'https://medium.com/@username/understanding-next-js-1234567890',
        date: '2024-11-30', // Example date
    },
    {
        id: '2',
        title: 'Advanced React Patterns for Developers',
        description: 'A deep dive into advanced patterns for React.',
        image: nextjsImage,
        link: 'https://medium.com/@username/advanced-react-patterns-1234567890',
        date: '2024-11-29', // Example date
    },
    {
        id: '1',
        title: 'Understanding Next.js: A Comprehensive Overview',
        description: 'A comprehensive guide to getting started with Next.js.',
        image: nextjsImage,
        link: 'https://medium.com/@username/understanding-next-js-1234567890',
        date: '2024-11-30', // Example date
    },
    {
        id: '2',
        title: 'Advanced React Patterns for Developers',
        description: 'A deep dive into advanced patterns for React.',
        image: nextjsImage,
        link: 'https://medium.com/@username/advanced-react-patterns-1234567890',
        date: '2024-11-29', // Example date
    },
    // Add more blogs as necessary
];

const BlogPage: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const blogsToShow = showAll ? allBlogs : allBlogs.slice(0, isMobile ? 6 : 8);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', transition: { duration: 0.3 } },
    };

    const useAnimateOnInView = () => {
        const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.2,
        });
        return { ref, inView };
    };

    return (
        <section id="blogs" className="container mx-auto px-4 py-20 relative">

            {/* Main Heading */}
            <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                    My Blogs
                </h1>
            </div>

            {/* Add Triangle Shape (Outside Container) */}
            <div className="absolute left-[-120px] top-[90%] transform -translate-y-1/2 z-20 sm:block">
                <Image
                    alt="triangle light"
                    loading="lazy"
                    width={240}
                    height={220}
                    className="max-h-[200px] max-w-[400px] w-auto aspect-auto"
                    style={{color: 'transparent'}}
                    src={triangleshape}
                />
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                {blogsToShow.map((blog) => {
                    const {ref, inView} = useAnimateOnInView();
                    return (
                        <motion.div
                            ref={ref}
                            key={blog.id}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={cardVariants}
                            whileHover="hover"
                            className="cursor-pointer rounded-lg overflow-hidden bg-white shadow-md"
                        >
                            <BlogPreview
                                title={blog.title}
                                description={blog.description}
                                link={blog.link}
                                image={blog.image}
                                date={blog.date}  // Pass the date prop
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Show More/Less Button */}
            <div className="mt-6 text-center relative z-10">
                <motion.button
                    whileHover={{scale: 1.05, backgroundColor: '#6e6663'}}
                    whileTap={{scale: 0.95}}
                    onClick={() => setShowAll(!showAll)}
                    className="px-4 py-2 rounded transition bg-gradient-to-l from-purple-600 via-blue-500 to-teal-500 text-white"
                >
                    {showAll ? 'View Less' : 'View More'}
                </motion.button>
            </div>
        </section>
    );
};

export default BlogPage;
