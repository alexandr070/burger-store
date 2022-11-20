import React from "react";
import sushiImage from "../../assets/sushi.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>Япона Кухня</h1>
        <button>Корзина</button>
      </header>
      <div>
        <img src={sushiImage} />
      </div>
    </React.Fragment>
  );
};

export default Header;
