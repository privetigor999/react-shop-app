import React, { useState } from "react";

import styles from "./Card.module.scss";
import likePng from "./../../images/like.png";
import addPng from "./../../images/add.png";
import addedPng from "./../../images/added.png";

const Card = ({
  title,
  country,
  price,
  image,
  id,
  onClickAdd,
  onClickLike,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const handleClickAdd = () => {
    onClickAdd({ id, title, price, image });
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <img
        src={likePng}
        alt="like"
        className={styles.likeItem}
        onClick={onClickLike}
      />
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
        <img
          src={isAdded ? addedPng : addPng}
          alt="add"
          className={styles.addPngButton}
          onClick={handleClickAdd}
        />
      </div>
    </div>
  );
};

export default Card;
