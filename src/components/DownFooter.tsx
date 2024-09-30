import React from 'react';

const DownFooter: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center py-6 bg-gray-900 text-gray-400 mt-16 border-t border-gray-700">
            <p className="text-sm md:text-base tracking-wide">
                © {currentYear} <span className="font-semibold text-gray-300">Ravindran Dharshan</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default DownFooter;
