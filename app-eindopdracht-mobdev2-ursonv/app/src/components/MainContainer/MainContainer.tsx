import React from 'react';
import styles from './MainContainer.module.css';

// Definieer de props type
interface MainContainerProps {
    children: React.ReactNode;
}

// Gebruik de interface om de props te typen
const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return (
        <div className={styles['main-container']}>
            {children}
        </div>
    );
};

export default MainContainer;
