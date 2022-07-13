import React from "react";
import styles from "./Header.module.scss";
import logoPng from "./../../images/logo.png";
import cartPng from "./../../images/cart.png";
import likedItemPng from "./../../images/likedItem.png";
import userPng from "./../../images/user.png";

const Header = ({ onClickCart }) => {
  return (
    <header>
      <div className={styles.headerLeft}>
        <img src={logoPng} alt="logo" className={styles.headerLogo} />
        <div className={styles.headerInfo}>
          <h2>Эврика!</h2>
          <p>Онлайн-магазин головоломок</p>
        </div>
      </div>

      <ul className={styles.headerRight}>
        <li className={styles.cartButton} onClick={onClickCart}>
          <img src={cartPng} alt="cart" className={styles.cartLogo} />
          <span>1000 руб.</span>
        </li>
        <li>
          <img src={likedItemPng} alt="liked" className={styles.likedLogo} />
        </li>
        <li>
          <img src={userPng} alt="user" className={styles.userLogo} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
