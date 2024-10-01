import React, { useState } from 'react';
import styles from './Register.module.css';
import { register } from '../../core/modules/auth/Auth.api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const role = formData.get('role') as string;

    setIsLoading(true);

    try {
      await register({ name, email, password, role });
      setIsLoading(false);
      navigate('/login'); // Stuur de gebruiker door naar het inlogscherm na registratie
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(newPassword);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupHeader}>
        <h2>SIGN UP</h2>
        <Link to="/" className={styles.closeButton}>&times;</Link>
      </div>
      {isLoading && <div>Loading...</div>}
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        {error && <div className={styles.errorMessage}>Error: {error}</div>}
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          className={styles.inputField} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          className={styles.inputField} 
          required 
        />
        <div className={styles.passwordContainer}>
          <input 
            type={showPassword ? "text" : "password"} 
            name="password" 
            placeholder="Password" 
            className={styles.inputField} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="button" onClick={generatePassword} className={styles.generateBtn}>
            Generate
          </button>
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className={styles.showPasswordBtn}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className={styles.roleField}>
          <label htmlFor="role">Role:</label>
          <select 
            id="role" 
            name="role" 
            required 
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div className={styles.buttonsContainer}>
          <Link to="/login" className={styles.accountBtn}>Have An Account?</Link>
          <button type="submit" className={styles.signupBtn}>
            Register
          </button>
        </div>
      </form>
      <div className={styles.socialLogin}>
        <p>SIGN UP WITH</p>
        <div className={styles.socialIcons}>
          <a href="#facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#3ADDB8" width="50px" height="50px">
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/>
            </svg>
          </a>
          <a href="#instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#3ADDB8" width="50px" height="50px">
              <path d="M16 3C8.8324839 3 3 8.8324839 3 16L3 34C3 41.167516 8.8324839 47 16 47L34 47C41.167516 47 47 41.167516 47 34L47 16C47 8.8324839 41.167516 3 34 3L16 3zM16 5L34 5C40.086484 5 45 9.9135161 45 16L45 34C45 40.086484 40.086484 45 34 45L16 45C9.9135161 45 5 40.086484 5 34L5 16C5 9.9135161 9.9135161 5 16 5zM37 11A2 2 0 0 0 35 13A2 2 0 0 0 37 15A2 2 0 0 0 39 13A2 2 0 0 0 37 11zM25 14C18.936712 14 14 18.936712 14 25C14 31.063288 18.936712 36 25 36C31.063288 36 36 31.063288 36 25C36 18.936712 31.063288 14 25 14zM25 16C29.982407 16 34 20.017593 34 25C34 29.982407 29.982407 34 25 34C20.017593 34 16 29.982407 16 25C16 20.017593 20.017593 16 25 16z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
