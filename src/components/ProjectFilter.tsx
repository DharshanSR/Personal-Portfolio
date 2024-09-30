import { useState } from 'react';
import { motion } from 'framer-motion';

interface FilterProps {
    categories: string[];
    onFilterChange: (category: string) => void;
}

const ProjectFilter = ({ categories, onFilterChange }: FilterProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const handleChange = (category: string) => {
        setSelectedCategory(category);
        onFilterChange(category);
    };

    return (
        <motion.div
            className="mb-8"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <motion.div className="flex flex-wrap gap-2 items-center justify-center">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => handleChange(category)}
                        className={`p-2 border rounded transition-colors duration-300 
                    ${selectedCategory === category ? 'bg-gradient-to-r from-blue-500 via-pink-500 to-red-500' : 'bg-white'} 
                    text-gray-800 hover:text-white hover:bg-blue-600`}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3}}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>
        </motion.div>

    );
};

export default ProjectFilter;
