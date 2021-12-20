import React, { useState } from 'react';
import styles from './signup.module.css';
import miniLogo from '../../../assets/mini-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../../redux/features/Auth';
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const dispatch = useDispatch();
	let navigate = useNavigate();

  const successSingUp = useSelector((state) => state.auth.successSingUp);
	const error = useSelector((state) => state.auth.error);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (ev) => {
    setName(ev.target.value);
  };

  const handleChangeEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleChangeLogin = (ev) => {
    setLogin(ev.target.value);
  };

  const handleChangePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = () => {
    dispatch(createUser(name, email, login, password));
    setName('');
    setEmail('');
    setLogin('');
    setPassword('');
  };

  return (
    <div className={styles.main}>
      <div>
        <img className={styles.miniLogo} src={miniLogo}/>
      </div>
      <h3>SIGN UP</h3>
      <input
        className={styles.input}
        placeholder='Name...'
        value={name}
        onChange={handleChangeName}
      />
      <input
        className={styles.input}
        placeholder='Email...'
        value={email}
        onChange={handleChangeEmail}
      />
      <br />
      <input
        className={styles.input}
        placeholder='Login...'
        value={login}
        onChange={handleChangeLogin}
      />
      <input
        className={styles.input}
        type='password'
        placeholder='Password...'
        value={password}
        onChange={handleChangePassword}
      />
      <br />
      <div>
        <b>I speak:</b>
        <b>I want to learn:</b>
      </div>
      <select className={styles.input}>
        <option value='Russian'>Russian</option>
        <option value='English'>English</option>
        <option value='Spanish'>Spanish</option>
        <option value='French'>French</option>
        <option value='Arabic'>Arabic</option>
        <option value='Deutsch'>Deutsch</option>
      </select>
      <select className={styles.input}>
        <option value='English'>English</option>
        <option value='Russian'>Russian</option>
        <option value='Spanish'>Spanish</option>
        <option value='French'>French</option>
        <option value='Arabic'>Arabic</option>
        <option value='Deutsch'>Deutsch</option>
      </select>
			<div>{error &&('Ошибка авторизации!')}</div>
      <div>
        <button
          type='button'
          className={`btn btn-outline-success ${styles.signUp}`}
          onClick={handleSubmit}
        >
          SIGN UP
        </button>
				{successSingUp && (navigate('/signIn'))}
      </div>
    </div>
  );
};

export default SignUpPage;
