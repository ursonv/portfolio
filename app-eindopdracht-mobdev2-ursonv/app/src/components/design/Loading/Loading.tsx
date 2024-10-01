import React from 'react';
import style from './Loading.module.css';

const Loading: React.FC = () => {
    return (
        <section className={style['loading-container']}>
            <div className={style['loading-text']}>Loading</div>
        </section>
    );
};

export default Loading;
