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
            className="mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex flex-wrap gap-6 items-center justify-center">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => handleChange(category)}
                        className={`relative flex items-center justify-center px-8 py-2 font-bold text-lg rounded-xl transition-all shadow-lg
                            ${
                            selectedCategory === category
                                ? 'bg-gradient-to-br from-blue-500 via-green-500 to-purple-500 text-white shadow-xl'
                                : 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 hover:from-blue-500 hover:via-green-500 hover:to-purple-500 hover:text-white'
                        }`}
                        whileHover={{
                            scale: 1.1,
                            rotate: -1,
                            transition: { type: 'spring', stiffness: 200 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Decorative Glow */}
                        {selectedCategory === category && (
                            <motion.div
                                className="absolute inset-0 rounded-xl blur-2xl opacity-20 bg-gradient-to-br from-blue-500 via-green-500 to-purple-500"
                                layoutId="active-glow"
                            ></motion.div>
                        )}
                        <span className="relative z-10">{category}</span>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectFilter;
