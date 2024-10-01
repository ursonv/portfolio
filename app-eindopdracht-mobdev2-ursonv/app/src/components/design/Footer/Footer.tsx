import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <div className={styles['logo-container']}>
            <div className={styles.logo}>WOOOF!</div>
            <div className={styles.slogan}>~ <span className={styles.accent}>D</span>elicious <span className={styles.accent}>D</span>og <span className={styles.accent}>F</span>ood ~</div>
        </div>
      </Link>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2>Faq</h2>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="">Ordering and payment</a></li>
            <li><a href="">Delivery information</a></li>
            <li><a href="">Return Policy</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2>Menu</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">products</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2>Contact</h2>
          <ul className={styles.contactList}>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#3ADDB8" d="M12 2a10 10 0 0 0-7.071 2.929c-3.899 3.899-3.898 10.243 0 14.142 3.899 3.898 10.243 3.899 14.142 0 3.898-3.899 3.899-10.243 0-14.142a9.97 9.97 0 0 0-7.071-2.929zm0 17.758a7.758 7.758 0 0 1-5.5-2.276l-.155-.155a1 1 0 0 1-.287-.618c-.024-.648.071-1.377.305-2.112.316-1.022.86-1.934 1.595-2.669l.154-.154c.257-.257.52-.466.618-.624.095-.147.085-.484-.106-.675l-3.1-3.1c-1.172-1.172-1.172-3.072 0-4.243s3.071-1.172 4.243 0l1.89 1.89c.191.191.528.201.675.106.16-.099.367-.361.624-.618l.154-.154c.735-.735 1.647-1.28 2.669-1.595.736-.233 1.464-.329 2.112-.305a1 1 0 0 1 .618.287l.155.155c1.499 1.499 2.337 3.494 2.337 5.59 0 4.995-4.37 9.365-9.365 9.365zm0 0"></path>
                    </svg>
                    <span>+0473737381</span>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#3ADDB8" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-12.5v4.75c0 .275-.225.5-.5.5h-1c-.275 0-.5-.225-.5-.5v-4.75c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5zm-1.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                    </svg>
                    <span>info@email.be</span>
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2024 WOOOF – Webshop door Urson Vermeersch
      </div>
    </footer>
  );
};

export default Footer;
