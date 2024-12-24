// src/components/BlogPreview.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPreviewProps {
    title: string;
    description: string;
    date: string;
    link: string;
    image: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, description, date, link, image }) => {
    return (
        <div className="relative group w-full h-full transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden">
            {/* Card Container */}
            <div className="w-full h-full bg-white rounded-lg shadow-lg relative p-6">
                {/* 3D Background Shape (Cube or Sphere) */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-30 transform rotate-45 group-hover:rotate-45 transition-all duration-500"></div>
                    <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-full transform translate-x-16 translate-y-16 group-hover:scale-110 transition-all duration-500"></div>
                </div>

                {/* Image Section */}
                <Link href={link} target="_blank" rel="noopener noreferrer" className="block relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full rounded-lg transition-all duration-300 transform group-hover:scale-105"
                    />
                </Link>

                {/* Text Content Section */}
                <div className="relative z-10 mt-6">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    <p className="text-sm text-gray-700 mb-4">{description}</p>
                    <span className="text-xs text-gray-500">{date}</span>

                    <div className="mt-6">
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full py-2 px-6 text-sm font-semibold transition-transform transform hover:scale-110 hover:bg-gradient-to-l">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

            {/* 3D Gradient Triangle */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-300 via-yellow-200 to-red-300 clip-triangle opacity-50"></div>
        </div>
    );
};

export default BlogPreview;
