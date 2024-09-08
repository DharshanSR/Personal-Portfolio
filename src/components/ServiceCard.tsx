import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    link: string; // Make link required
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
    return (
        <Link href={link} className="relative bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center group">
            <Image src={icon} alt={title} width={64} height={64} className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-8">{description}</p>
            <div className=" mt-12 absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiArrowRight size={32} className="text-gray-600" />
            </div>
        </Link>
    );
};

export default ServiceCard;
