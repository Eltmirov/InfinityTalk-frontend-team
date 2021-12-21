import React from 'react';
import styles from './cards.module.css';
import { Link } from 'react-router-dom';
import insta from "../../assets/images/instagram.png"
import teleg from "../../assets/images/telegram.png"
import whats from "../../assets/images/whatsapp.png"


const CardsItem = ({ name, img, description, whatsapp, instagram, telegram}) => {
  return (
    <div className="mb-3">
      <div className="row g-0 justify-content-center">
        <div className="col-md-2 m-2 text-center">
          <img className={`rounded-circle ${styles.img}`}
               src={img}
               alt="..."/>
          <div className={styles.Link}>
            <Link to="/">SEND</Link>
          </div>
        </div>
        <div className={`col-md-8 m-2 ${styles.textContent}`}>
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{name}</h5>
            <p className="card-text">
              {description}
            </p>
          </div>
          <div>
            <div className="mt-4 text-center">
              <a href="#"><img src={insta} className={styles.ikon} alt="..."/>{instagram}</a>
              <a href="#"><img src={whats} className={styles.ikon} alt="..."/>{whatsapp}</a>
              <a href="#"><img src={teleg} className={styles.ikon} alt="..."/>{telegram}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CardsItem;