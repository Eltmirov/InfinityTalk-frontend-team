import React from 'react';
import styles from "./signup.module.css"
import miniLogo from "../../../assets/mini-logo.png"

const SignUpPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imgDiv}>
       <img className={styles.miniLogo} src={miniLogo}/>
      </div>
      <h3>SIGN UP</h3>
      <input className={styles.input} placeholder="Name..."/>
      <input className={styles.input} placeholder="Email..."/><br/>
      <input className={styles.input} placeholder="Login..."/>
      <input className={styles.input} placeholder="Password..."/><br/>
      <input className={styles.input} placeholder="I speak..."/>
      <input className={styles.input} placeholder="I want to learn..."/>
      <div>
        <button type="button" className={`btn btn-outline-success ${styles.signUp}`}>SIGN UP</button>
      </div>
    </div>
  );
};

export default SignUpPage;