import React from 'react';
import style from './Footer.module.css'
import { Link } from 'react-router-dom';
import ROUTES from '../../consts/Routes';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <nav className={style.footer__nav}>
                <li className={style.footer__nav_item}><Link to={ROUTES.home}>Home</Link></li>
            </nav>
            <p className={style.footer__copyright}>Opdracht Mini API mobdev - Urson Vermeersch</p>
        </footer>
    );
};

export default Footer;