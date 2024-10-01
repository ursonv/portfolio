import React from 'react';
import style from './PrimaryButton.module.css';

interface PrimaryButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
    return (
        <button className={style.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default PrimaryButton;
