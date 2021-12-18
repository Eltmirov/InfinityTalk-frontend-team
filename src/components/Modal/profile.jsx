import React, { useEffect } from 'react';
import css from './modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../redux/features/ProfileReducer';

const UserInfo = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <div>
          <div className={css.userInfoBlock}>
              <p className={css.userInfo}> Имя:   {user.name}</p>
              <p className={css.userInfo}> E-mail: {user.email}</p>
          </div>
    </div>
  );
};

export default UserInfo;