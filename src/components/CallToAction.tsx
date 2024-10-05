import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { useInView } from 'framer-motion'; // Import useInView for viewport animations
import person1 from "@/public/assests/images/contact1.png";
import person2 from "@/public/assests/images/contact2.png";

const CallToAction = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

    return (
        <motion.div
            ref={ref}
            className="bg-gray-100 py-20 text-center px-4 flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Entry animation
            transition={{ duration: 0.5 }}
        >
            {/* Left Image */}
            <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <Image
                    src={person1} // Replace with your left image path
                    alt="Talking on the phone"
                    width={100} // Set a much smaller fixed width
                    height={100} // Set a much smaller fixed height
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center w-full md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    Transform Your Ideas into Reality
                </h2>
                <p className="text-sm md:text-base mb-6 max-w-6xl mx-auto text-gray-600">
                    My mission is to collaborate with you, ensuring that every step of the journey is smooth and aligned with your goals.
                    Let’s embark on this exciting journey together!
                </p>
                <Link href="/#contact-me"> {/* Use the hash to link to the ID */}
                    <motion.button
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }} // Scale animation on hover
                    >
                        Start Your Journey with Me
                    </motion.button>
                </Link>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <Image
                    src={person2} // Replace with your right image path
                    alt="Talking on the phone"
                    width={100} // Set a much smaller fixed width
                    height={100} // Set a much smaller fixed height
                />
            </div>
        </motion.div>
    );
};

export default CallToAction;
