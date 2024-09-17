import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
}

// Animation variants for project cards
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ProjectCard = ({ id, title, description, image }: ProjectCardProps) => {
    return (
        <motion.div
            className="border rounded-lg overflow-hidden shadow-lg bg-[#c3c3c0] transition-transform transform cursor-pointer"
            variants={cardVariants} // Apply card-level animation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the card is in view
            whileHover={{ scale: 1.05, backgroundColor: "#d0d0d0" }} // Add hover effect
        >
            <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#6e6663]">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">{description}</p>
                <Link href={`/projects/${id}`} passHref>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#6e6663",
                            transition: { duration: 0.3 },
                        }} // Smooth hover animation
                        whileTap={{ scale: 0.95 }} // Tap animation for button click
                        className="bg-[#3c4b54] text-white py-2 px-4 rounded transition cursor-pointer"
                    >
                        Read More
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
