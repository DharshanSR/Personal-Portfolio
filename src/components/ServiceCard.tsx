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
        <Link href={link} className="relative bg-[#c3c3c0] hover:bg-[#6e6663] text-[#000] shadow-md rounded-lg p-6 flex flex-col items-center text-center group transition-all duration-300">
            <Image src={icon} alt={title} width={64} height={64} className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-[#8f989b] mb-8">{description}</p>
            <div className="mt-12 absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiArrowRight size={32} className="text-[#c3c3c0]" />
            </div>
        </Link>
    );
};

export default ServiceCard;
