import React from 'react';
import styles from "./signup.module.css"
import miniLogo from "../../../assets/mini-logo.png"

const SignUpPage = () => {
  return (
    <div className={styles.main}>
      <div>
       <img className={styles.miniLogo} src={miniLogo}/>
      </div>
      <h3>SIGN UP</h3>
      <input className={styles.input} placeholder="Name..."/>
      <input className={styles.input} placeholder="Email..."/><br/>
      <input className={styles.input} placeholder="Login..."/>
      <input className={styles.input} type="password" placeholder="Password..."/><br/>
      <div><b>I speak:</b><b>I want to learn:</b></div>
       <select className={styles.input}>
        <option value="Russian">Russian</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="Arabic">Arabic</option>
        <option value="Deutsch">Deutsch</option>
      </select>
      <select className={styles.input}>
        <option value="English">English</option>
        <option value="Russian">Russian</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="Arabic">Arabic</option>
        <option value="Deutsch">Deutsch</option>
      </select>
      <div>
        <button type="button" className={`btn btn-outline-success ${styles.signUp}`}>SIGN UP</button>
      </div>
    </div>
  );
};

export default SignUpPage