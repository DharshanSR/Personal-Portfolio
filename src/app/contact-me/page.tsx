'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const validateField = (name: string, value: string) => {
        let errorMessage = '';
        switch (name) {
            case 'name':
                if (value.trim() === '') {
                    errorMessage = 'Name is required.';
                }
                break;
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    errorMessage = 'Invalid email address.';
                }
                break;
            case 'message':
                if (value.trim() === '') {
                    errorMessage = 'Message cannot be empty.';
                }
                break;
            default:
                break;
        }
        setErrors({ ...errors, [name]: errorMessage });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message && !errors.name && !errors.email && !errors.message) {
            console.log('Form submitted successfully', formData);
        } else {
            console.log('Form has errors', errors);
        }
    };

    return (
        <section id="contact-me" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-10">
            <motion.div
                className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Contact Form */}
                <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-inner">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Me</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-2 block w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                                    errors.name ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-2 block w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Your Email"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`mt-2 block w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                                    errors.message ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Your Message"
                                rows={5}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <div className="flex justify-center">
                            <motion.button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </div>

                {/* Address, Phone, and Email */}
                <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-inner">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Get in Touch</h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <span className="font-semibold text-lg text-gray-700">Address:</span>
                            <p className="ml-2 text-gray-600">1234 Your Street, City, Country</p>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-lg text-gray-700">Phone:</span>
                            <p className="ml-2 text-gray-600">+123 456 7890</p>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-lg text-gray-700">Email:</span>
                            <p className="ml-2 text-gray-600">youremail@example.com</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
