"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";

const ContactMe = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-12 px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

            {/* Contact Form */}
            <form
                className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6"
                action="#"
                method="POST"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your Name"
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
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
                        rows={4}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-md shadow hover:bg-indigo-500 transition duration-300"
                >
                    Send Message
                </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-12 flex space-x-6 text-3xl text-gray-600">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                    <FaGithub />
                </a>
                <a href="https://medium.com/@your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                    <FaMedium />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                    <FaInstagram />
                </a>
            </div>
        </section>
    );
};

export default ContactMe;
