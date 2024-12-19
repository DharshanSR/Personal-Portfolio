'use client';

// 1. Install GSAP and Tailwind CSS if not already installed
// npm install gsap tailwindcss

// 2. Create a hero section component in Next.js

// File: components/HeroSection.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
            );

            gsap.fromTo(
                subtitleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
            );

            gsap.fromTo(
                svgRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.9 }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center">
            <div className="text-center">
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
                >
                    Welcome to My Portfolio
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl text-gray-300"
                >
                    Crafting innovative web solutions with AI and Cloud.
                </p>
            </div>
            <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                className="absolute top-0 left-0 w-full h-full opacity-50"
            >
                <defs>
                    <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#4ADE80" />
                        <stop offset="100%" stopColor="#2DD4BF" />
                    </radialGradient>
                </defs>
                <circle cx="400" cy="300" r="300" fill="url(#gradient)" />
            </svg>
        </section>
    );
};

export default HeroSection;