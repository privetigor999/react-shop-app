import React from "react";
import logoPng from "./images/logo.png";
import addPng from "./images/add.png";
import cartPng from "./images/cart.png";
import likePng from "./images/like.png";
import likedItemPng from "./images/likedItem.png";
import orderPng from "./images/order.png";
import removePng from "./images/remove.png";
import searchPng from "./images/search.png";
import userPng from "./images/user.png";
import cubePng from "./images/goods/cube.png";

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <div className="headerCart">
            <h1>Корзина</h1>
            <img src={removePng} alt="remove" className="removeCart" />
          </div>

          <div className="itemsInCart">
            <div className="itemInCart">
              <img src={cubePng} alt="cube" className="itemPng" />
              <div className="infoItemInCart">
                <p>Кубик Рубика 3х3х3</p>
                <b>Цена: 1000 руб</b>
              </div>
              <img src={removePng} alt="remove" className="removeButton" />
            </div>
          </div>

          <div className="bottomInfoInCart">
            <div className="salePlusPriceInfo">
              <ul>
                <li className="listInfoInCart">
                  <span>Скидка:</span>
                  <div></div>
                  <b>0 рублей</b>
                </li>
                <li className="listInfoInCart">
                  <span>Общая стоимость:</span>
                  <div></div>
                  <b>100 рублей</b>
                </li>
              </ul>
              <button className="orderButton">
                Оформить
                <img src={orderPng} alt="order" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img src={logoPng} alt="logo" className="headerLogo" />
          <div className="headerInfo">
            <h2>Эврика!</h2>
            <p>Онлайн-магазин головоломок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li className="cartButton">
            <img src={cartPng} alt="cart" className="cartLogo" />
            <span>100 руб.</span>
          </li>
          <li>
            <img src={likedItemPng} alt="liked" className="likedLogo" />
          </li>
          <li>
            <img src={userPng} alt="user" className="userLogo" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="titlePlusSearchBlock">
          <h1>Все головоломки</h1>
          <div className="searchBlock">
            <img src={searchPng} alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img src={likePng} alt="like" className="likeItem" />
            <img src={cubePng} alt="item" className="cardItem" />
            <p>Кубик Рубика 3х3х3</p>
            <p className="madeOfItem">
              Производство: <b>Китай</b>
            </p>
            <div className="cardBottom">
              <div>
                <span>Цена:</span>
                <b>1000 руб</b>
              </div>
              <button>
                <img src={addPng} alt="add" className="addPngButton" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={cubePng} alt="item" />
            <p>Кубик Рубика 3х3х3</p>
            <p className="madeOfItem">
              Производство: <b>Китай</b>
            </p>
            <div className="cardBottom">
              <div>
                <span>Цена:</span>
                <b>1000 руб</b>
              </div>
              <button>
                <img src={addPng} alt="add" className="addPngButton" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
