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
        <div className="bg-[#c3c3c0] shadow-md rounded-lg overflow-hidden">
            <Link href={link} className="block relative h-48" target="_blank" rel="noopener noreferrer">
                <Image src={image} alt={title} layout="fill" objectFit="cover" className="w-full h-full" />
            </Link>
            <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#071015]">{title}</h2>
                <p className="text-[#6e6663] mb-4 text-sm sm:text-base">{description}</p>
                <span className="text-[#868b94] text-xs sm:text-sm font-bold">{date}</span>
                <div className="mt-4">
                    <Link href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#3c4b54] text-[#c3c3c0] px-3 py-2 rounded text-sm sm:text-base hover:bg-[#6e6663] transition">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPreview;
