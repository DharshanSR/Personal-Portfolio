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
        <Link
            href={link}
            className="relative bg-white hover:bg-blue-600 text-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center group transition-all duration-300 transform hover:shadow-2xl"
        >
            <Image
                src={icon}
                alt={title}
                width={500}
                height={500}
                className="mb-4 rounded-lg transition-transform duration-300 group-hover:scale-105"
            />

            <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                {title}
            </h2>
            <p className="text-gray-700 mb-8 group-hover:text-gray-300 transition-colors duration-300">
                {description}
            </p>
            <div className="mt-12 absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiArrowRight size={32} className="text-gray-800 group-hover:text-white" />
            </div>
        </Link>
    );
};

export default ServiceCard;
