function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="./images/logo.png" alt="logo" className="headerLogo" />
          <div className="headerInfo">
            <h2>Эврика!</h2>
            <p>Онлайн-магазин головоломок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img src="./images/cart.png" alt="cart" className="cartLogo" />
            <span>100 руб.</span>
          </li>
          <li>
            <img src="./images/user.png" alt="user" className="userLogo" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все головоломки</h1>
        <div className="cards">
          <div className="card">
            <img src="./images/goods/cube.png" alt="item" />
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
                <img
                  src="./images/add.png"
                  alt="add"
                  className="addPngButton"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="./images/goods/cube.png" alt="item" />
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
                <img
                  src="./images/add.png"
                  alt="add"
                  className="addPngButton"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
