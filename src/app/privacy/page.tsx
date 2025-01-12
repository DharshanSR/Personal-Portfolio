import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js

const PrivacyPolicyPage = () => {
    return (
        <div
            id="privacy-policy"
            className="bg-[#E5E7EB] text-black max-w-5xl mx-auto p-8 text-base animate-fadeIn py-20"
        >
            {/* Breadcrumb */}
            <nav
                className="text-sm text-gray-500 mb-6 mt-6 font-medium"
                aria-label="breadcrumb"
            >
                <ol className="flex space-x-2 flex-wrap">
                    <li>
                        <Link href="/" className="text-blue-500 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li>
                        <Link href="/about" className="text-blue-500 hover:underline">
                            About Us
                        </Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li aria-current="page" className="text-purple-500">
                        Privacy Policy
                    </li>
                </ol>
            </nav>

            <h1 className="text-3xl font-bold text-center mb-6 mt-6 animate-slideUp">
                Privacy Policy
            </h1>
            <p className="mb-4 text-center sm:text-left">Last updated: January 11, 2025</p>
            <p className="mb-4">
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="mb-4">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the{' '}
                <a
                    href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Free Privacy Policy Generator
                </a>.
            </p>

            {/* Rest of the content */}
            <h2 className="text-2xl font-semibold mt-6 mb-4 animate-slideUp">Interpretation and Definitions</h2>
            <h3 className="text-xl font-semibold animate-slideUp">Interpretation</h3>
            <p className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold animate-slideUp">Definitions</h3>
            <p className="mb-4">For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6">
                <li className="animate-fadeIn"> <strong>Account:</strong> A unique account created for You to access our Service. </li>
                <li className="animate-fadeIn"> <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party. </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 animate-slideUp">Use of Your Personal Data</h3>
            <p className="mb-4">
                The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc pl-6">
                <li className="animate-fadeIn">To provide and maintain our Service.</li>
                <li className="animate-fadeIn">To manage Your Account.</li>
                <li className="animate-fadeIn">For the performance of a contract.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 animate-slideUp">Children's Privacy</h3>
            <p className="mb-4">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under 13 years of age.
            </p>
        </div>
    );
};

export default PrivacyPolicyPage;
