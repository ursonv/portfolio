import React from 'react';
import styles from './Title.module.css';

// Definieer de props type
interface TitleProps {
    text: string;
}

// Gebruik de interface om de props te typen
const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
                {text}
                <span className={styles.underline}></span>
            </h1>
        </div>
    );
};

export default Title;
