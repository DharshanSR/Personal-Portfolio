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
            // You can handle form submission logic here, such as sending an API request.
        } else {
            console.log('Form has errors', errors);
        }
    };

    return (
        <section className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
            <motion.div
                className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-3 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
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
                            className={`mt-1 block w-full p-3 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
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
                            className={`mt-1 block w-full p-3 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
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
                            className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
