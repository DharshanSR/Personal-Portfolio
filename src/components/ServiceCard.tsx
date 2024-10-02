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
            className="relative flex flex-col items-center text-center group transition-all duration-300"
        >
            <div className="relative mb-6">
                {/* Image with overlay on hover */}
                <Image
                    src={icon}
                    alt={title}
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-gray-300 group-hover:border-blue-600 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {title}
            </h2>
            <p className="text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                {description}
            </p>

            {/* Arrow transition on hover */}
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiArrowRight size={28} className="text-blue-600" />
            </div>
        </Link>
    );
};

export default ServiceCard;
