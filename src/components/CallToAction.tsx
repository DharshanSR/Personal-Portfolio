import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import person1 from "@/public/assests/images/contact1.png";
import person2 from "@/public/assests/images/contact2.png";

const CallToAction = () => {
    return (
        <section className="relative bg-[#2A2A3C] py-20 px-6 overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full opacity-20 blur-3xl -z-10"></div>

            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Left Section: Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                        Let’s Build Something Incredible
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        Partner with me to bring your ideas to life. Whether it's building cutting-edge applications or
                        solving challenging problems, let's make it happen together.
                    </p>
                    <Link href="/#contact-me">
                        <motion.button
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                        >
                            Get Started Today
                        </motion.button>
                    </Link>
                </div>

                {/* Right Section: Images */}
                <div className="relative flex justify-center items-center">
                    <motion.div
                        className="absolute -top-8 left-0 w-36 h-36 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 shadow-xl overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Image
                            src={person1}
                            alt="Person 1"
                            layout="fill"
                            objectFit="cover"
                        />
                    </motion.div>
                    <motion.div
                        className="absolute top-8 right-0 w-36 h-36 rounded-full bg-gradient-to-br from-green-500 to-blue-400 shadow-xl overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Image
                            src={person2}
                            alt="Person 2"
                            layout="fill"
                            objectFit="cover"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default CallToAction;
  