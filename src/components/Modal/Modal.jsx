import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Modal } from 'react-bootstrap';
import Profile from "../../assets/images/ProfileLogo.png";
import ProfileIcon from "../../assets/images/profileIcon.png";
import editIcon from "../../assets/images/edit-foto-image.png";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./modal.module.css";

// import { useDispatch, useSelector } from "react-redux";
// import EditModal from './EditModal';

const user = [
  {
    name: "Hamzat",
    email: "hamzat_intocode@mail.ru",
  },
];

const ModalWindow = ({ name, ...props }) => {

  const [edit, setEdit] = useState(false);

  const handleEdit = () =>  setEdit(true);
  const handleEditClose = () => setEdit(false)

  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user);

  /* заготовка для вывода с бэка.  Названия переменных не окончательны,  просто обозначил их. */

  // useEffect(() => {
  //   dispatch(loadUserInfo)
  // }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className={css.modalBtn}>
        <img src={Profile} className={css.profileModal} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={css.profileMain}>
            <div className={css.profileImg}>
              <img src={ProfileIcon} className={css.image}/>
              <div>
                <span
                  onClick={() => handleEdit(true)}
                  className={css.editButton}
                >
                  <img src={editIcon} className={css.editIcon} />

                </span>
              </div>
            </div>
          </div>
          {edit &&
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Редактирование профиля</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Добавить аватар</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <input placeholder="Your name..."/>
                <input placeholder="Your e-mail..."/>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleEditClose}>Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>}

          {user.map((item) => {
            return (
              <div className={css.userInfoBlock}>
                <p className={css.userInfo}> {item.name} </p>
                <p className={css.userInfo}> {item.email} </p>
              </div>
            );
          })}

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

function ShowModal() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <ModalWindow key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default ShowModal;
