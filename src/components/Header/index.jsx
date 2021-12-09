import React from 'react';
import css from './header.module.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.png'
import Profile from '../../assets/images/Profile.png'

const Header = () => {
  return (
    <div className={css.main}>
      <div className={css.logo}>
        <img src={logo}/>
      </div>
      <div className={css.navbar}>
          <NavLink to='/interlocutor' className={css.findInterlocutor}> Найти сосебедника  </NavLink>
          <NavLink to='/teacher' className={css.findTeacher}> Найти учителя  </NavLink>
          <NavLink to='/message' className={css.messages}> Сообщения  </NavLink>
      </div>
      <div className={css.profileBlock}>
        <img src={Profile}/> s
      </div>

    </div>
  );
};

export default Header;