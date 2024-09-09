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
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link href={link} className="block relative h-48">
                <Image src={image} alt={title} layout="fill" objectFit="cover" className="w-full h-full" />
            </Link>
            <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500 hover:underline">{title}</h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{description}</p>
                <span className="text-gray-400 text-xs sm:text-sm">{date}</span>
                <div className="mt-4">
                    <Link href={link} className="inline-block bg-blue-500 text-white px-3 py-2 rounded text-sm sm:text-base hover:bg-blue-600 transition">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPreview;
