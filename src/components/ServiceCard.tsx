import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
    return (
        <Link href={link} className="relative bg-[#f5f5f2] hover:bg-[#44403c] text-[#000] shadow-lg rounded-lg p-6 flex flex-col items-center text-center group transition-all duration-300 transform hover:scale-105">
            <Image
                src={icon}
                alt={title}
                width={500}
                height={500}
                className="mb-4"
            />

            <h2 className="text-xl font-semibold mb-2 text-[#1b1c1d] group-hover:text-[#f5f5f2] transition-colors duration-300">
                {title}
            </h2>
            <p className="text-[#6e6663] mb-8 group-hover:text-[#e5e7eb] transition-colors duration-300">
                {description}
            </p>
            <div className="mt-12 absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiArrowRight size={32} className="text-[#f5f5f2]" />
            </div>
        </Link>
    );
};

export default ServiceCard;
