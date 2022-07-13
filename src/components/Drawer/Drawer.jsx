import React from "react";
import styles from "./Drawer.module.scss";
import orderPng from "./../../images/order.png";
import removePng from "./../../images/remove.png";
import cubePng from "./../../images/goods/cube.png";

const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.headerCart}>
          <h1>Корзина</h1>
          <img src={removePng} alt="remove" className={styles.removeCart} />
        </div>

        <div className={styles.itemsInCart}>
          <div className={styles.itemInCart}>
            <img src={cubePng} alt="cube" className={styles.itemPng} />
            <div className={styles.infoItemInCart}>
              <p>Кубик Рубика 3х3х3</p>
              <b>Цена: 1000 руб</b>
            </div>
            <img src={removePng} alt="remove" className={styles.removeButton} />
          </div>
        </div>

        <div className={styles.bottomInfoInCart}>
          <div className={styles.salePlusPriceInfo}>
            <ul>
              <li className={styles.listInfoInCart}>
                <span>Скидка:</span>
                <div></div>
                <b>0 рублей</b>
              </li>
              <li className={styles.listInfoInCart}>
                <span>Общая стоимость:</span>
                <div></div>
                <b>100 рублей</b>
              </li>
            </ul>
            <button className={styles.orderButton}>
              Оформить
              <img src={orderPng} alt="order" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
