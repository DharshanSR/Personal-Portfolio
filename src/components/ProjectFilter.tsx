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
            <div className="flex flex-wrap gap-2 items-center justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleChange(category)}
                        className={`p-2 border rounded transition-colors duration-300 
                            ${selectedCategory === category ? 'bg-[#071015] text-white' : 'bg-[#8f989b] text-[#071015] font-bold'} 
                            hover:bg-[#6e6663] hover:text-white
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
