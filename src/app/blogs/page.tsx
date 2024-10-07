'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlogPreview from '@/components/BlogPreview';
import nextjsImage from "@/public/assests/images/unserstanding-nextjs.png";

// Sample blog data
const allBlogs = [
    {
        id: '1',
        title: 'Understanding Next.js',
        description: 'A comprehensive guide to getting started with Next.js.',
        date: '2024-09-01',
        image: nextjsImage,
        link: 'https://medium.com/@username/understanding-next-js-1234567890',
    },
    {
        id: '2',
        title: 'TypeScript with React',
        description: 'Learn how to use TypeScript with React to build type-safe applications.',
        date: '2024-09-02',
        image: '/assets/images/typescript-react.jpg',
        link: 'https://medium.com/@username/typescript-with-react-0987654321',
    },
    {
        id: '1',
        title: 'Understanding Next.js',
        description: 'A comprehensive guide to getting started with Next.js.',
        date: '2024-09-01',
        image: '/assets/images/nextjs-guide.jpg',
        link: 'https://medium.com/@username/understanding-next-js-1234567890',
    },
    {
        id: '2',
        title: 'TypeScript with React',
        description: 'Learn how to use TypeScript with React to build type-safe applications.',
        date: '2024-09-02',
        image: '/assets/images/typescript-react.jpg',
        link: 'https://medium.com/@username/typescript-with-react-0987654321',
    },
    {
        id: '1',
        title: 'Understanding Next.js',
        description: 'A comprehensive guide to getting started with Next.js.',
        date: '2024-09-01',
        image: '/assets/images/nextjs-guide.jpg',
        link: 'https://medium.com/@username/understanding-next-js-1234567890',
    },
    {
        id: '2',
        title: 'TypeScript with React',
        description: 'Learn how to use TypeScript with React to build type-safe applications.',
        date: '2024-09-02',
        image: '/assets/images/typescript-react.jpg',
        link: 'https://medium.com/@username/typescript-with-react-0987654321',
    },
    // Add more blog posts here
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

    // Animation variants for blog cards and hover effects
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', transition: { duration: 0.3 } },
    };

    // Custom hook for intersection observer to trigger animation on view
    const useAnimateOnInView = () => {
        const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.2,
        });
        return { ref, inView };
    };

    return (
        <div id="blogs" className="container mx-auto px-4 py-20">
            <h1 className="text-5xl font-extrabold text-[#c4c6c4] text-center mb-16">Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {blogsToShow.map((blog) => {
                    const { ref, inView } = useAnimateOnInView();
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
                                date={blog.date}
                                link={blog.link}
                                image={blog.image}
                            />
                        </motion.div>
                    );
                })}
            </div>
            <div className="mt-6 text-center">
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#6e6663' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    className="bg-[#3c4b54] text-[#c3c3c0] px-4 py-2 rounded transition"
                >
                    {showAll ? 'View Less' : 'View More'}
                </motion.button>
            </div>
        </div>
    );
};

export default BlogPage;
