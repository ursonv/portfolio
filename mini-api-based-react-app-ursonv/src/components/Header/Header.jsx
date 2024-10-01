import React from 'react';
import style from './Header.module.css'
import { Link } from 'react-router-dom';
import ROUTES from '../../consts/Routes';

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.header__nav}>
                <li className={style.header__nav_item}><Link to={ROUTES.home} className={style.header__nav_link}>Home</Link></li>
            </nav>
        </header>
    );
};

export default Header;