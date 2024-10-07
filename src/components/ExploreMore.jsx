// ExploreMore.js
import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { useInView } from 'framer-motion'; // Import useInView for viewport animations

const ExploreMore = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

    return (
        <motion.div
            ref={ref}
            className="bg-gray-100 py-20 text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Entry animation
            transition={{ duration: 0.5 }}
        >
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Do you want to see more about the blogs I wrote?
            </h4>
            <p className="text-lg md:text-xl mb-6 max-w-6xl mx-auto text-gray-600">
                Explore a wide range of topics and insights from my writing journey.
            </p>
            <Link href="/#blogs"> {/* Use the hash to link to the ID */}
                <motion.button
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }} // Scale animation on hover
                >
                    Explore Blogs
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default ExploreMore;
