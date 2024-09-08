import Link from 'next/link';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
}

const ProjectCard = ({ id, title, description, image }: ProjectCardProps) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img
                src={image}
                alt={title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">{description}</p>
                <Link
                    href={`/projects/${id}`}
                    className="text-blue-500 hover:underline text-sm sm:text-base"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
