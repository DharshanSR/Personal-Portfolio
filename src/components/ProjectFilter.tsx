import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectFilter = ({ categories, onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
                <motion.button
                    key={category}
                    onClick={() => {
                        setSelectedCategory(category);
                        onFilterChange(category);
                    }}
                    className={`px-6 py-2 rounded-full font-semibold transition-all shadow-md text-sm 
                        ${
                        selectedCategory === category
                            ? 'bg-indigo-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-indigo-100'
                    }
                    `}
                    whileHover={{ scale: 1.05 }}
                >
                    {category}
                </motion.button>
            ))}
        </div>
    );
};

export default ProjectFilter;