import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js

const Page = () => {
    return (
        <div className="max-w-5xl mx-auto p-8 py-20">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6 mt-6" aria-label="breadcrumb">
                <ol className="flex space-x-2 flex-wrap">
                    <li>
                        <Link href="/" className="text-blue-500 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li>
                        <Link href="/about-us" className="text-blue-500 hover:underline">
                            About Us
                        </Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li aria-current="page" className="text-gray-800">
                        Terms of Service
                    </li>
                </ol>
            </nav>

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-6">
                Terms of Service
            </h1>
            <p className="text-lg text-gray-700">Last Updated: January 2025</p>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
                <p className="mt-4 text-gray-600">
                    By using this website, you agree to comply with and be bound by the following terms and conditions.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Use of the Website</h2>
                <p className="mt-4 text-gray-600">
                    You may not use the website for unlawful purposes. Any violation may result in termination of your access to the services.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Account Responsibility</h2>
                <p className="mt-4 text-gray-600">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Limitation of Liability</h2>
                <p className="mt-4 text-gray-600">
                    Our liability is limited to the maximum extent permitted by applicable law. We are not responsible for any damages arising from the use of this website.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Termination</h2>
                <p className="mt-4 text-gray-600">
                    We reserve the right to suspend or terminate your access to the website if you violate these terms.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Changes to Terms</h2>
                <p className="mt-4 text-gray-600">
                    We may update these terms at any time. Please review this page regularly for any changes.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
                <p className="mt-4 text-gray-600">
                    If you have any questions about these terms, please contact us at{' '}
                    <a href="mailto:example@example.com" className="text-blue-500 hover:underline">
                        example@example.com
                    </a>.
                </p>
            </section>
        </div>
    );
};

export default Page;
