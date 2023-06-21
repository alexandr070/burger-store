import React from "react";
import burgerImage from "../../assets/burger.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Burger Hub</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={burgerImage} alt="Burgers" />
      </div>
    </React.Fragment>
  );
};

export default Header;
