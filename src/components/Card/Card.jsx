import React from "react";
import styles from "./Card.module.scss";
import likePng from "./../../images/like.png";
import addPng from "./../../images/add.png";

const Card = ({ title, country, price, image, id }) => {
  return (
    <div className={styles.card}>
      <img src={likePng} alt="like" className={styles.likeItem} />
      <img src={image} alt="item" className={styles.cardItem} />
      <p>{title}</p>
      <p className={styles.madeOfItem}>
        Производство: <b>{country}</b>
      </p>
      <div className={styles.cardBottom}>
        <div>
          <span>Цена:</span>
          <b>{price} руб</b>
        </div>
        <button onClick={() => alert(id)}>
          <img src={addPng} alt="add" className={styles.addPngButton} />
        </button>
      </div>
    </div>
  );
};

export default Card;
