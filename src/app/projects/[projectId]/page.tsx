'use client';

import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer'; // Import Footer component

const ProjectDetailsPage = ({ params }: { params: { projectId: string } }) => {
    const router = useRouter();
    const project = projects.find((proj) => proj.id === params.projectId);

    if (!project) return notFound();

    return (
        <>
            <div className="container mx-auto px-4 py-12 text-white">
                {/* Back Button */}
                <button
                    onClick={() => router.push('/projects')}
                    className="text-blue-500 underline hover:text-blue-300 mb-6 text-sm sm:text-base"
                >
                    &larr; Back to Projects
                </button>

                {/* Detailed Image */}
                <div className="w-full mb-8">
                    <img src={project.image} alt={project.title} className="w-full rounded-lg object-cover h-60 sm:h-80 md:h-96" />
                </div>

                {/* Detailed Description */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-gray-400 mb-8 text-sm sm:text-base">{project.detailedDescription}</p>

                {/* Technologies Used */}
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Technologies Used</h2>
                    <ul className="list-disc list-inside mb-4">
                        {project.technologies.map((tech, idx) => (
                            <li key={idx} className="text-gray-400 text-sm sm:text-base">{tech}</li>
                        ))}
                    </ul>
                </div>

                {/* GitHub and Live Demo Links */}
                <div className="mb-8">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-300 block mb-2 text-sm sm:text-base">
                        GitHub Repo
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-300 text-sm sm:text-base">
                        Live Demo
                    </a>
                </div>

                {/* More Images */}
                <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">More Images</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.moreImages.map((img, idx) => (
                            <img key={idx} src={img} alt={`${project.title} Image ${idx + 1}`} className="w-full h-auto rounded-lg object-cover" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default ProjectDetailsPage;
