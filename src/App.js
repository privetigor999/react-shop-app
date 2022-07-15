import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./index.module.scss";
import uuid from "react-uuid";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import searchPng from "./images/search.png";
import clearPng from "./images/remove.png";
import cubePng from "./images/goods/cube.png";
import floppyPng from "./images/goods/floppy.png";
import mirrorPng from "./images/goods/mirror.png";
import keyPng from "./images/goods/key.png";
import ballPng from "./images/goods/ball.png";

const AppContext = createContext({});

const items = [
  {
    id: uuid(),
    title: "Кубик Рубика 3х3х3",
    country: "Китай",
    price: 800,
    image: cubePng,
  },
  {
    id: uuid(),
    title: "Кубик Floppy 1х3х3",
    country: "Китай",
    price: 950,
    image: floppyPng,
  },
  {
    id: uuid(),
    title: "Зеркальный Куб",
    country: "Корея",
    price: 1100,
    image: mirrorPng,
  },
  {
    id: uuid(),
    title: "Головоломка Ключ",
    country: "Россия",
    price: 600,
    image: keyPng,
  },
  {
    id: uuid(),
    title: "Шар Головоломка",
    country: "Россия",
    price: 1200,
    image: ballPng,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setCartItems([...cartItems, obj]);
    }
  };

  const removeItemFromCart = (id) => {
    const itemRemoved = cartItems.filter((cartItem) => id !== cartItem.id);
    setCartItems(itemRemoved);
  };

  return (
    <AppContext.Provider value={cartItems}>
      <div className={styles.wrapper}>
        {cartOpened && (
          <Drawer
            onClose={() => setCartOpened(false)}
            items={cartItems}
            removedItem={removeItemFromCart}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className={styles.content}>
          <div className={styles.titlePlusSearchBlock}>
            <h1>
              {searchValue
                ? `Поиск по запросу: «${searchValue}»`
                : "Все головоломки"}
            </h1>
            <div className={styles.searchBlock}>
              <img src={searchPng} alt="search" className={styles.searchPng} />
              {searchValue && (
                <img
                  src={clearPng}
                  alt="clear"
                  className={styles.clearInputButton}
                  onClick={() => setSearchValue("")}
                />
              )}
              <input
                onChange={(event) => setSearchValue(event.target.value)}
                type="text"
                value={searchValue}
                placeholder="Поиск..."
              />
            </div>
          </div>
          <div className={styles.cards}>
            {items
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  country={item.country}
                  price={item.price}
                  image={item.image}
                  onClickAdd={(obj) => onAddToCart(obj)}
                />
              ))}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
