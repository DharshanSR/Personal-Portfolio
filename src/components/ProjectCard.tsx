import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ProjectCard = ({ id, title, description, image }: ProjectCardProps) => {
    return (
        <motion.div
            className="relative rounded-xl shadow-md bg-gradient-to-tr from-gray-100 to-gray-50 overflow-hidden hover:shadow-xl transition-all"
            style={{ lineHeight: '1.6' }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
        >
            {/* Background Shapes */}
            <div className="absolute inset-0 -z-10">
                {/* Top-Left Triangle */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 clip-triangle opacity-40"></div>
                {/* Bottom-Right Triangle */}
                {/*<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-300 via-yellow-200 to-red-300 clip-triangle opacity-50"></div>*/}
            </div>

            {/* Image Section */}
            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content Section */}
            <div className="px-6 py-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-2 text-center">
                    {description}
                </p>
            </div>

            {/* Button Section */}
            <div className="flex justify-center mt-4 mb-6">
                <Link href={`/projects/${id}`} passHref>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            color: '#ffffff',
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-l from-purple-600 via-blue-500 to-teal-500 text-white font-medium rounded-lg shadow-md focus:ring-4 focus:ring-green-700 focus:outline-none"
                    >
                        Learn More
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
