import { useState } from 'react';

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
        <div className="mb-8">
            <label htmlFor="category-filter" className="text-white font-bold mb-2 block">
                Filter by Category:
            </label>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleChange(category)}
                        className={`p-2 border rounded transition-colors duration-300 
                            ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'} 
                            hover:bg-blue-600 hover:text-white
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProjectFilter;
