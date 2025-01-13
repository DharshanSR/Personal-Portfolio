'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GrAlarm, GrSearch } from "react-icons/gr";
import img from '@/public/assests/images/image (1).png';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

// Sample blog data
const blogs = [
    {
        id: 1,
        title: 'Tips and DIY Inspiration for Creative Minds',
        description:
            'Discover a universe of boundless imagination in the World of Creative Art, where canvases weave stories, sculptures breathe life...Discover a universe of boundless imagination in the World of Creative Art, where canvases weave stories, sculptures breathe life...',
        date: '12 Jun, 2022',
        image: img,
        link: 'https://medium.com/@yourprofile/tips-and-diy',
        featured: true,
        category: 'Creativity',
    },
    {
        id: 2,
        title: 'Wild Photography Technology',
        description:
            'Discover a universe of boundless imagination in the World of Creative Art, where canvases weave stories, sculptures breathe life...',
        date: '24 Jun, 2023',
        image: img,
        link: 'https://dev.to/yourprofile/wild-photography',
        category: 'Photography',
    },
    {
        id: 3,
        title: 'Unveiling the Power of Three-Dimensional Art',
        date: '24 Jun, 2023',
        image: img,
        link: 'https://medium.com/@yourprofile/3d-art',
        category: '3D Art',
    },
    {
        id: 4,
        title: 'Tips and Trends for Elevating Your Art Display',
        date: '24 Jun, 2023',
        image: img,
        link: 'https://dev.to/yourprofile/art-display-tips',
        category: 'Art',
    },
    {
        id: 5,
        title: 'Discovering Hidden Gems Around the World',
        date: '24 Jun, 2023',
        image: img,
        link: 'https://medium.com/@yourprofile/hidden-gems',
        category: 'Travel',
    },
];

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const featuredBlog = blogs.find((blog) => blog.featured);
    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        const matchesSearch =
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ['All', ...new Set(blogs.map((blog) => blog.category))];

    // GSAP animations
    useEffect(() => {
        // Featured Blog Animations
        gsap.fromTo(
            '.featured-image',
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.featured-blog',
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            '.featured-details',
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.featured-blog',
                    start: 'top 80%',
                },
            }
        );

        // Latest Blog Cards Animation
        gsap.fromTo(
            '.card',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.latest-blogs',
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section id="blog" className="text-gray-800 container mx-auto px-4 sm:px-6 py-16 sm:py-20 overflow-x-hidden">
            {/* Blog Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-5xl sm:text-4xl md:text-5xl font-extrabold mb-4">My Blogs</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                    Explore my thoughts, tips, and inspirations on technology, creativity, and innovation.
                </p>
            </div>

            {/* Featured Blog Section */}
            {featuredBlog && (
                <div className="flex flex-col lg:flex-row items-center mb-12 featured-blog">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <Image
                            src={featuredBlog.image}
                            alt={featuredBlog.title}
                            width={600}
                            height={400}
                            className="rounded-2xl border-4 border-blue-600 shadow-lg featured-image"
                        />
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 featured-details">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{featuredBlog.title}</h2>
                        <p className="text-gray-600 mb-4">{featuredBlog.description}</p>
                        <p className="text-gray-400 text-sm flex items-center gap-2 mb-6">
                            <GrAlarm /> {featuredBlog.date}
                        </p>
                        <Link
                            href={featuredBlog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                            Read More
                        </Link>
                    </div>
                </div>
            )}

            {/* Filters and Search Description */}
            <div className="text-center mb-8">
                <p className="text-gray-600">
                    Browse through various categories to find blogs tailored to your interests.
                    Whether you're looking for <span className="font-semibold">Creativity</span>,
                    <span className="font-semibold"> Photography</span>,
                    <span className="font-semibold"> 3D Art</span>, <span className="font-semibold">Travel</span>,
                    or more, our collection has something for everyone. Use the dropdown or search bar to narrow down your options!
                </p>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                <div className="mb-4 sm:mb-0">
                    <select
                        className="border border-gray-300 rounded-md p-2"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="relative">
                    <GrSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="pl-10 border border-gray-300 rounded-md p-2 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Latest Posts Section */}
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Latest Posts</h3>
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 latest-blogs">
                    {filteredBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden card hover:transform hover:scale-105 hover:shadow-xl cursor-pointer transition duration-300">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2">{blog.title}</h4>
                                <p className="text-gray-600 mb-4">{blog.description}</p>
                                <p className="text-gray-400 text-sm flex items-center gap-2">
                                    <GrAlarm /> {blog.date}
                                </p>
                                <Link
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-sm mt-2 block">
                                    <Button className="bg-purple-800 hover:bg-purple-500">Read More</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Read More Button */}
            <div className="text-center mt-8">
                <Link
                    href="https://medium.com/@yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
                    View More on Medium
                </Link>
            </div>
        </section>
    );
};

export default BlogPage;
