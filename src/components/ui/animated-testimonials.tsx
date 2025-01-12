"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({
                                         testimonials,
                                         autoplay = false,
                                     }: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => index === active;

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

    return (
        <section id="testimonials" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                    Testimonials
                </h2>
                <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg">
                    Insights from professionals I've collaborated with.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-[450px]">
                    <AnimatePresence>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.src}
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: -100,
                                    rotate: randomRotateY(),
                                }}
                                animate={{
                                    opacity: isActive(index) ? 1 : 0.7,
                                    scale: isActive(index) ? 1 : 0.95,
                                    z: isActive(index) ? 0 : -100,
                                    rotate: isActive(index) ? 0 : randomRotateY(),
                                    zIndex: isActive(index)
                                        ? 999
                                        : testimonials.length + 2 - index,
                                    y: isActive(index) ? [0, -80, 0] : 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: 100,
                                    rotate: randomRotateY(),
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 origin-bottom"
                            >
                                <Image
                                    src={testimonial.src}
                                    alt={testimonial.name}
                                    width={300}
                                    height={300}
                                    draggable={false}
                                    className="h-full w-full rounded-3xl object-cover object-center"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center gap-6 lg:gap-12 text-center lg:text-left">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-black">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-neutral-500 font-semibold">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="text-sm sm:text-base md:text-lg text-gray-500 mt-4 dark:text-neutral-300">
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <button
                            onClick={handlePrev}
                            className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group"
                        >
                            <IconArrowLeft
                                className="h-5 w-5 text-black dark:text-neutral-400 group-hover:rotate-12 transition-transform duration-300"
                            />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group"
                        >
                            <IconArrowRight
                                className="h-5 w-5 text-black dark:text-neutral-400 group-hover:-rotate-12 transition-transform duration-300"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
