import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const FindPartner = () => {
  const token = useSelector(state => state.auth.token)
  let redirect = useNavigate()
  return (
    <>
      {!token &&(redirect('/'))}
      <div>
          Страница "найти собеседника"
      </div>
    </>
  );
};

export default FindPartner;