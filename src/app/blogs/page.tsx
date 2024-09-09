'use client';

import React, { useState, useEffect } from 'react';
import BlogPreview from '@/components/BlogPreview';

const allBlogs = [
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // This runs on the client-side only
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize); // Add resize listener

        return () => window.removeEventListener('resize', handleResize); // Cleanup listener
    }, []);

    // Determine the number of blogs to show based on the state
    const blogsToShow = showAll ? allBlogs : allBlogs.slice(0, 8);
    const blogsToShowOnMobile = showAll ? allBlogs : allBlogs.slice(0, 4);

    return (
        <div id="blogs" className="container mx-auto px-4 py-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {(isMobile ? blogsToShowOnMobile : blogsToShow).map((blog) => (
                    <BlogPreview
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                        link={blog.link}
                        image={blog.image}
                    />
                ))}
            </div>
            <div className="mt-6 text-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    {showAll ? 'View Less' : 'View More'}
                </button>
            </div>
        </div>
    );
};

export default BlogPage;
