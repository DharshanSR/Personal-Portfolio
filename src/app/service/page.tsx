import React from 'react';
import ServiceCard from '@/components/ServiceCard';

const services = [
    {
        title: 'Web Development',
        description: 'Building responsive and high-performing websites.',
        icon: '/assets/icons/web-development.svg',
        link: '/web-development',
    },
    {
        title: 'Mobile App Development',
        description: 'Creating user-friendly mobile applications.',
        icon: '/assets/icons/mobile-app.svg',
        link: '/mobile-app-development',
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive and engaging user interfaces.',
        icon: '/assets/icons/ui-ux-design.svg',
        link: '/ui-ux-design',
    },
    {
        title: 'SEO Optimization',
        description: 'Improving search engine rankings for better visibility.',
        icon: '/assets/icons/seo.svg',
        link: '/seo-optimization',
    },
];

const ServicePage: React.FC = () => {
    return (
        <div id="services" className="container mx-auto px-4 py-20 bg-[#5a5855]">
            <h1 className="text-5xl font-extrabold mb-10 text-center text-[#c4c6c4]">My Expertise</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        link={service.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
