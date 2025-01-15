import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

const ProjectCard = ({ id, title, description, image }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const image = imageRef.current;
        const text = textRef.current;

        const handleMouseEnter = () => {
            // Lift and rotate the card
            gsap.to(card, {
                scale: 1.05,
                rotate: 2,
                y: -10,
                duration: 0.5,
                ease: "power3.out",
            });
            // Zoom in the image slightly
            gsap.to(image, {
                scale: 1.1,
                duration: 0.5,
                ease: "power3.out",
            });
            // Fade in and lift the text
            gsap.to(text, {
                y: -10,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
            });
        };

        const handleMouseLeave = () => {
            // Reset card
            gsap.to(card, {
                scale: 1,
                rotate: 0,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            });
            // Reset image
            gsap.to(image, {
                scale: 1,
                duration: 0.5,
                ease: "power3.out",
            });
            // Reset text
            gsap.to(text, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
            });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden transition-transform"
        >
            <div className="relative w-full h-48">
                <Image
                    ref={imageRef}
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-6" ref={textRef}>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
                <Link href={`/projects/${id}`}>
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600">
                        View Details
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
