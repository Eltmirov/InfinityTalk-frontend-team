import React, { useEffect, useState } from 'react';
import css from './modal.module.css'
import { Button, Offcanvas } from 'react-bootstrap';
import Profile from '../../assets/images/Profile.png';
import ProfileIcon from '../../assets/images/profileIcon.png';
import editIcon from '../../assets/images/editIcon.png';
import starIcon from '../../assets/images/StarIcon.png';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ name, ...props }) => {
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user);

  /* заготовка для вывода с бэка.  Названия переменных не окончательны,  просто обозначил их. */

  // useEffect(() => {
  //   dispatch(loadUserInfo)
  // }, [dispatch]);

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className={css.modalBtn}>
        <img src={Profile}/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={css.profileIcon}>
            <img src={ProfileIcon}/>
          </div>
          <img src={editIcon} className={css.editIcon}/>
          {/*{user.map((info) => {*/}
            <div className={css.userInfoBlock}>
              <img src={starIcon} className={css.starIcon}/>
              <span> dsdd</span>
            </div>
          {/*})}*/}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

function ShowModal() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <Modal key={idx} placement={placement} name={placement}/>
      ))}
    </>
  );
}


export default ShowModal;