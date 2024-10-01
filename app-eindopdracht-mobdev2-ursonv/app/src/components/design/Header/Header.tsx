import React, { useEffect } from 'react';
import { useUserContext, UserProvider } from '../../auth/userProvider'; 
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import * as Storage from '../../../core/storage';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = Storage.getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, [setUser]);

  const handleLogout = () => {
    setUser(null);
    Storage.saveAuthToken(null);
    Storage.saveUser(null);
    navigate('/');
  };
  
  return (
    <UserProvider>
      <div className={styles['promo-bar']}>
        Unlock a <span className={styles['accent']}>woofie</span> great deal: get <span className={styles['accent']}>50% off</span> your first two packages!
      </div>
      <header className={styles.header}>
        <div className={styles['top-section']}>
          <Link to="/">
            <Logo />
          </Link>

          <div className={styles['user-info']}>

            {user ? (
              <>
                <Link to="/profile" className={styles.navIcons}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path id="ic_account_box_24px" d="M3,5V19a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5a2.006,2.006,0,0,0-2-2H5A2,2,0,0,0,3,5ZM15,9a3,3,0,1,1-3-3A3,3,0,0,1,15,9ZM6,17c0-2,4-3.1,6-3.1S18,15,18,17v1H6Z" transform="translate(-3 -3)"/>
                  </svg>
                </Link>
                <span>Welcome, {user ? user.name : "Unauthorized login"}!</span>
                <button onClick={handleLogout} className={styles.logoutButton}>LOG OUT</button>
                <Link to="/favorites" className={styles.navIcons}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18.35" viewBox="0 0 20 18.35">
                  <path id="verlanglijst" d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" transform="translate(-2 -3)"/>
                  </svg>
                </Link>
                <Link to="/shoppingcart" className={styles.navIcons}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path id="ic_local_grocery_store_24px" d="M7,18a2,2,0,1,0,2,2A2,2,0,0,0,7,18ZM1,2V4H3l3.6,7.59L5.25,14.04A1.933,1.933,0,0,0,5,15a2.006,2.006,0,0,0,2,2H19V15H7.42a.248.248,0,0,1-.25-.25l.03-.12L8.1,13h7.45a1.991,1.991,0,0,0,1.75-1.03l3.58-6.49A.977.977,0,0,0,21,5a1,1,0,0,0-1-1H5.21L4.27,2H1ZM17,18a2,2,0,1,0,2,2A2,2,0,0,0,17,18Z" transform="translate(-1 -2)"/>
                  </svg>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.loginlink}>login</Link>
                <Link to="/register" className={styles.registerlink}>register</Link>

              </>
            )}

          </div>
        </div>
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {user && user.role === 'seller' && <Link to="/dashboard">Dashboard</Link>}
          <Link to="/contact">Contact</Link>


        </nav>
      </header>
    </UserProvider>
  );
};

export default Header;
