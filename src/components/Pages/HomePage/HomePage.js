import React from 'react';
import styles from "./home.module.css"
import logoHome from "../../../assets/logo.png"
import slogan from "../../../assets/slogan.png"

const HomePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imgDiv}>
        <img className={styles.logo} src={logoHome}/>
        <img className={styles.slogan} src={slogan}/>
      </div>
      <div>
        <button type="button" className={`btn btn-outline-danger ${styles.signIn}`}>SIGN IN</button>
        <button type="button" className={`btn btn-outline-success ${styles.signUp}`}>SIGN UP</button>
      </div>
    </div>
  );
};

export default HomePage;