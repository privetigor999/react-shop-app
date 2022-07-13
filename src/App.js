import React from "react";
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

const DB = [
  {
    id: uuid(),
    title: "Кубик Рубика 3х3х3",
    country: "Китай",
    price: 800,
    image: cubePng,
  },
  {
    id: uuid(),
    title: "Кубик Floppy 1x3x3",
    country: "Китай",
    price: 1000,
    image: floppyPng,
  },
  {
    id: uuid(),
    title: "Зеркальный куб",
    country: "Пакистан",
    price: 1200,
    image: mirrorPng,
  },
  {
    id: uuid(),
    title: "Головоломка Ключ",
    country: "Россия",
    price: 750,
    image: keyPng,
  },
  {
    id: uuid(),
    title: "Шар Головоломка",
    country: "Россия",
    price: 1100,
    image: ballPng,
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="titlePlusSearchBlock">
          <h1>Все головоломки</h1>
          <div className="searchBlock">
            <img src={searchPng} alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards">
          {DB.map((obj) => (
            <Card
              key={obj.id}
              id={obj.id}
              title={obj.title}
              country={obj.country}
              price={obj.price}
              image={obj.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
