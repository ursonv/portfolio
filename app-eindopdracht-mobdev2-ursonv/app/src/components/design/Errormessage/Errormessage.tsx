import React from 'react';
import style from './Errormessage.module.css'; 

interface ErrormessageProps {
  error: string;
}

const Errormessage: React.FC<ErrormessageProps> = ({ error }) => {
  return (
    <div className={style.errorMessageContainer}>
      <p>{error}</p>
    </div>
  );
};

export default Errormessage;
