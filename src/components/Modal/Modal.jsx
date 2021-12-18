import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Profile from "../../assets/images/ProfileLogo.png";
import editIcon from "../../assets/images/edit-foto-image.png";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./modal.module.css";
import UserInfo from "./profile";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  uploadAvatar,
} from "../../redux/features/ProfileReducer";

const ModalWindow = ({ name, ...props }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        className={css.loadingBtn}>
        {isLoading ? "Loading…" : "Edit"}
      </Button>
    );
  }

  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);

  const handleEdit = () => setEdit(true);
  const handleEditClose = () => setEdit(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeImage = (e) => {
    setFile(e.target.files[0]);
    dispatch(uploadAvatar(e.target.files[0]));
  };

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
              <img
                src={`http://localhost:4000/${user.img}`}
                className={css.image}
              />
              <div className={css.editAvatar}>
                <label className="filebutton">
                  <span>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      accept="image/*"
                      onChange={handleChangeImage}
                      name="img"
                    />
                    <img src={editIcon} className={css.editIcon} />
                  </span>
                </label>
              </div>
            </div>
          </div>
          {edit ? (
            <div className={css.editBlockMain}>
              <div className={css.inputBlock}>
                <input
                  type="text"
                  className={css.editInput}
                  placeholder="name..."
                />
                <input
                  type="text"
                  className={css.editInput}
                  placeholder="surname..."
                />
              </div>
              <div className={css.buttonsBlock}>
                <Button variant="primary" onClick={handleEditClose}>
                  Close
                </Button>{" "}
                <LoadingButton />
              </div>
            </div>
          ) : (
            <UserInfo />
          )}
          <div className={css.editClick}>
            <button
              onClick={() => handleEdit(true)}
              disabled={edit}
              className={edit ? css.editButton_dis : css.editButton}
            >
              {" "}
              Редактировать{" "}
            </button>
          </div>
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
