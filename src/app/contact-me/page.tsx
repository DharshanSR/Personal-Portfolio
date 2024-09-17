"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";

const ContactMe = () => {
    return (
        <section id="contact-me" className="container min-h-screen flex flex-col lg:flex-row items-center bg-[#6B7579] text-white">
            {/* Left Side: Image/Intro Section */}
            <div className="lg:w-1/2 flex items-center justify-center bg-indigo-700 py-16 px-8">
                <div className="space-y-8 text-center lg:text-left">
                    <h2 className="text-5xl font-bold">Get In Touch</h2>
                    <p className="text-lg">
                        I'm excited to work with passionate individuals and teams. Feel free to reach out and let’s start a conversation!
                    </p>
                    <div className="mt-6 space-x-6 text-3xl flex justify-center lg:justify-start">
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaGithub />
                        </a>
                        <a href="https://medium.com/@your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaMedium />
                        </a>
                        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Side: Contact Form Section */}
            <div className="lg:w-1/2 bg-white py-16 px-8 flex items-center justify-center">
                <form className="w-full max-w-lg space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Full Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
