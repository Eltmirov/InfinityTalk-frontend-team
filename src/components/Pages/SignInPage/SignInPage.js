import React from 'react';
import styles from "./signin.module.css";
import miniLogo from '../../../assets/mini-logo.png';

const SignInPage = () => {
  return (
    <div className={styles.main}>
      <div>
        <img className={styles.miniLogo} src={miniLogo}/>
      </div>
      <h3>SIGN IN</h3>
      <input className={styles.input} type="text" placeholder="Login..."/>
      <input className={styles.input}  type="password" tplaceholder="Password..."/>
      <div>
        <button type="button" className={`btn btn-outline-danger ${styles.signIn}`}>SIGN IN</button>
      </div>
    </div>
  );
};

export default SignInPage;