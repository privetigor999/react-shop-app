import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import searchPng from "./images/search.png";
import cubePng from "./images/goods/cube.png";
import floppyPng from "./images/goods/floppy.png";
import mirrorPng from "./images/goods/mirror.png";
import keyPng from "./images/goods/key.png";
import ballPng from "./images/goods/ball.png";

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
  const [cartOpened, setCartOpened] = useState(false);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  const removeItemFromCart = (id) => {
    const itemRemoved = cartItems.filter((cartItem) => id !== cartItem.id);
    setCartItems(itemRemoved);
  };
  console.log(cartItems);
  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          removedItem={removeItemFromCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="titlePlusSearchBlock">
          <h1>Все головоломки</h1>
          <div className="searchBlock">
            <img src={searchPng} alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards">
          {items.map((item) => (
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
  );
}

export default App;
