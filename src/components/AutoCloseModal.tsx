// components/AutoCloseModal.tsx

import { useEffect } from 'react';

interface AutoCloseModalProps {
    onClose: () => void;
    duration: number; // Duration in milliseconds
}

const AutoCloseModal: React.FC<AutoCloseModalProps> = ({ onClose, duration }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return null;
};

export default AutoCloseModal;
