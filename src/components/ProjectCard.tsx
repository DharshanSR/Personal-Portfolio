import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
}

const ProjectCard = ({ id, title, description, image }: ProjectCardProps) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg bg-[#c3c3c0]">
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
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#6e6663]">{title}</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">{description}</p>
                <Link
                    href={`/projects/${id}`}
                    passHref
                >
                    <button className="bg-[#3c4b54] text-white py-2 px-4 rounded hover:bg-[#6e6663] transition">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
