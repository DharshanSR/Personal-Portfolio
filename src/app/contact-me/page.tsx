'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage: React.FC = () => {
    return (
        <div id="contact-me" className="min-h-screen flex flex-col items-center justify-center py-20 bg-[#2A2A3C]">
            <ContactForm />
        </div>
    );
};

export default ContactPage;
