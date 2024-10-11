'use client';

import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FaLinkedin, FaGithub, FaTwitter, FaEnvelope} from 'react-icons/fa';
import Modal from '@/components/ContactModal';
import AutoCloseModal from "@/components/AutoCloseModal";
import {motion} from 'framer-motion';
import Image from 'next/image';
import contactImage from "@/public/assests/images/contactme.png";

// Define the form schema using Yup
const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('First name is required')
        .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
        .max(15, 'First name must be at most 15 characters'),
    lastName: yup
        .string()
        .required('Last name is required')
        .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
        .max(15, 'Last name must be at most 15 characters'),
    email: yup
        .string()
        .required('Email is required')
        .email('Must be a valid email'),
    mobile: yup
        .string()
        .required('Mobile number is required')
        .matches(/^\+?[1-9]\d{10,15}$/, 'Must be a valid international mobile number'),
    message: yup
        .string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be at most 1000 characters'),
});

interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ title: string; message: string; type: 'success' | 'error' }>({
        title: '',
        message: '',
        type: 'success',
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setModalContent({
                    title: 'Success!',
                    message: result.message || 'Your message has been sent successfully.',
                    type: 'success',
                });
                setModalOpen(true);
                reset();
            } else {
                // If backend returns validation errors
                if (result.errors) {
                    const errorMessages = result.errors.map((err: any) => `${err.field}: ${err.message}`).join(' | ');
                    setModalContent({
                        title: 'Error!',
                        message: errorMessages || 'Failed to send the message.',
                        type: 'error',
                    });
                } else {
                    setModalContent({
                        title: 'Error!',
                        message: result.message || 'Failed to send the message.',
                        type: 'error',
                    });
                }
                setModalOpen(true);
            }
        } catch (err) {
            console.error('Error sending message:', err);
            setModalContent({
                title: 'Error!',
                message: 'An unexpected error occurred. Please try again later.',
                type: 'error',
            });
            setModalOpen(true);
        } finally {
            setLoading(false);
        }
    };

    // Automatically close the modal after 5 seconds
    const handleModalClose = () => {
        setModalOpen(false);
    };

    // Define motion variants for hover and animation
    const socialIconVariants = {
        hover: {scale: 1.2, rotate: 15, transition: {type: 'spring', stiffness: 300}},
        rest: {scale: 1, rotate: 0},
    };

    return (
        <section className="py-20 bg-[#14141F]">
            <div className="container mx-auto px-4">
                <motion.h2
                    id="contact-me"
                    className="text-4xl md:text-5xl text-center font-extrabold text-white mb-12 mt-12"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Contact Me
                </motion.h2>

                <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Information Section */}
                    <motion.div
                        className="md:w-1/2 bg-purple-700 text-white p-8 flex flex-col justify-center"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        {/* Image Section */}
                        <div className="flex flex-col md:flex-row space-x-4 mb-6">
                            <motion.div
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5}}
                                whileHover={{scale: 1.05}} // Added hover zoom effect
                            >
                                <div className="relative">
                                    <Image
                                        src={contactImage}
                                        alt="Description of image 1"
                                        className="rounded-lg"
                                        width={800}
                                        height={500}
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center">
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                        <h3 className="text-4xl font-extrabold mb-4 text-center">Reach Out to Me</h3>
                        <p className="mb-6 text-lg leading-loose">
                            I’m eager to collaborate on forward-thinking projects. Whether you have a big idea or simply want to connect, let's team up and create something impactful! Together, we can push boundaries and bring innovative visions to life.
                        </p>


                        {/* Social Media Icons Section */}
                        <div className="flex space-x-6 items-center">
                            <motion.a
                                href="https://www.linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-4xl transition duration-300 ease-in-out"
                                variants={socialIconVariants}
                                whileHover="hover"
                                initial="rest"
                            >
                                <FaLinkedin className="text-white hover:text-[#0077B5]"/>
                            </motion.a>
                            <motion.a
                                href="https://github.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-4xl transition duration-300 ease-in-out"
                                variants={socialIconVariants}
                                whileHover="hover"
                                initial="rest"
                            >
                                <FaGithub className="text-white hover:text-[#333]"/>
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="text-4xl transition duration-300 ease-in-out"
                                variants={socialIconVariants}
                                whileHover="hover"
                                initial="rest"
                            >
                                <FaTwitter className="text-white hover:text-[#1DA1F2]"/>
                            </motion.a>
                            <motion.a
                                href="mailto:youremail@example.com"
                                aria-label="Email"
                                className="text-4xl transition duration-300 ease-in-out"
                                variants={socialIconVariants}
                                whileHover="hover"
                                initial="rest"
                            >
                                <FaEnvelope className="text-white hover:text-[#D14836]"/>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Contact Form Section */}
                    <div className="md:w-1/2 p-8 bg-gray-900">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-200">First
                                        Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="John"
                                        {...register('firstName')}
                                        className={`mt-2 p-3 block w-full border text-black ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        aria-invalid={errors.firstName ? 'true' : 'false'}
                                        aria-describedby="firstName-error"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm mt-1" id="firstName-error">
                                            {errors.firstName.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex-1 mt-4 sm:mt-0">
                                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-200">Last
                                        Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Doe"
                                        {...register('lastName')}
                                        className={`mt-2 p-3 block w-full border text-black ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        aria-invalid={errors.lastName ? 'true' : 'false'}
                                        aria-describedby="lastName-error"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm mt-1" id="lastName-error">
                                            {errors.lastName.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-200">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john.doe@example.com"
                                    {...register('email')}
                                    className={`mt-2 p-3 block w-full border text-black ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    aria-invalid={errors.email ? 'true' : 'false'}
                                    aria-describedby="email-error"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1" id="email-error">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="mobile"
                                       className="block text-sm font-bold text-gray-200">Mobile</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    placeholder="+1234567890"
                                    {...register('mobile')}
                                    className={`mt-2 p-3 block w-full border text-black ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    aria-invalid={errors.mobile ? 'true' : 'false'}
                                    aria-describedby="mobile-error"
                                />
                                {errors.mobile && (
                                    <p className="text-red-500 text-sm mt-1" id="mobile-error">
                                        {errors.mobile.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="message"
                                       className="block text-sm font-bold text-gray-200">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Your message..."
                                    {...register('message')}
                                    className={`mt-2 p-3 block w-full border text-black ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    aria-invalid={errors.message ? 'true' : 'false'}
                                    aria-describedby="message-error"
                                    rows={5}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1" id="message-error">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-50% bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'Message Sent'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal for Success and Error Messages */}
            <Modal
                isOpen={modalOpen}
                onClose={handleModalClose}
                title={modalContent.title}
                message={modalContent.message}
                type={modalContent.type}
            />

            {/* Auto-close the modal after 5 seconds */}
            {modalOpen && (
                <AutoCloseModal
                    onClose={handleModalClose}
                    duration={5000} // 5000 milliseconds = 5 seconds
                />
            )}
        </section>
    );
};

export default ContactForm;
