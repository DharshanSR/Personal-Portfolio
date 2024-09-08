import React from 'react';
import ServiceCard from '@/components/ServiceCard';

const services = [
    {
        title: 'Web Development',
        description: 'Building responsive and high-performing websites.',
        icon: '/assets/icons/web-development.svg', // Ensure correct path
        link: '/web-development', // Example link
    },
    {
        title: 'Mobile App Development',
        description: 'Creating user-friendly mobile applications.',
        icon: '/assets/icons/mobile-app.svg', // Ensure correct path
        link: '/mobile-app-development', // Example link
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive and engaging user interfaces.',
        icon: '/assets/icons/ui-ux-design.svg', // Ensure correct path
        link: '/ui-ux-design', // Example link
    },
    {
        title: 'SEO Optimization',
        description: 'Improving search engine rankings for better visibility.',
        icon: '/assets/icons/seo.svg', // Ensure correct path
        link: '/seo-optimization', // Example link
    },
];

const ServicePage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        link={service.link} // Pass the link prop
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
