import React from 'react'

const CopyRight = () => {
    return (
        <div className="bg-[#E5E7EB] text-white text-center py-20">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p className="text-sm">
                This website and its content are protected by copyright law. Unauthorized reproduction, distribution, or use of any content from this site is prohibited.
            </p>
        </div>
    )
}

export default CopyRight;
