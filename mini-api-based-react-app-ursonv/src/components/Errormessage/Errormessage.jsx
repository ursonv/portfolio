import React from 'react';
import style from "./Errormessage.module.css"

const Errormessage = ({error}) => {
    return (
        <section className={style.wrapper}>
           <h1 className={style.title}>Sorry, there seems to have been an error. Please try again or submit the error to the IT department.</h1> 
           <p>{error}</p>
        </section>
    );
};

export default Errormessage;