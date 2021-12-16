import React from 'react';
import Header from '../Header';
import FindPartner from '../FindPartner';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const FindPartnerPage = () => {
  let redirect = useNavigate()
  const token = useSelector((state) => state.auth.token);

  return(
    <>
      {token ?
        <div>
          <Header/>
          <FindPartner/>
        </div>
      :
        redirect('/')
      }
    </>
  );
};

export default FindPartnerPage;