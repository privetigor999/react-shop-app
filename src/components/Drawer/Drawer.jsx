import React from "react";
import styles from "./Drawer.module.scss";
import orderPng from "./../../images/order.png";
import removePng from "./../../images/remove.png";
import emptyCartPng from "./../../images/emptyCart.png";
import backPng from "./../../images/back.png";

const Drawer = ({ onClose, removedItem, items = [] }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.headerCart}>
          <h1>Корзина</h1>
          <img
            src={removePng}
            alt="remove"
            className={styles.removeCart}
            onClick={onClose}
          />
        </div>

        {items.length > 0 ? (
          <div className={styles.itemsInCart}>
            {items.map((obj) => (
              <div className={styles.itemInCart}>
                <img src={obj.image} alt="cube" className={styles.itemPng} />
                <div className={styles.infoItemInCart}>
                  <p>{obj.title}</p>
                  <b>Цена: {obj.price} руб</b>
                </div>
                <img
                  src={removePng}
                  alt="remove"
                  className={styles.removeButton}
                  onClick={() => removedItem(obj.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <div className={styles.emptyCartBlock}>
              <img src={emptyCartPng} alt="empty" />
              <h2>Корзина пустая</h2>
              <p>Добавьте товар у карточки и возвращайтесь в корзину</p>
            </div>
          </div>
        )}

        <div className={styles.bottomInfoInCart}>
          {items.length > 0 ? (
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
          ) : (
            <button className={styles.backButton} onClick={onClose}>
              <img src={backPng} />
              Назад
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
