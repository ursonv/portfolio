import React from 'react';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
    return (
        <div className={styles['logo-container']}>
            <div className={styles.logo}>WOOOF!</div>
            <div className={styles.slogan}>~ <span className={styles.accent}>D</span>elicious <span className={styles.accent}>D</span>og <span className={styles.accent}>F</span>ood ~</div>
        </div>
    );
};

export default Logo;
