import React from "react";
import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online Burger Joint: Burger Hub</h2>
      <p>
        "Burger Hub" is an online burger restaurant where a team of professional
        chefs prepares your favorite burgers.
      </p>
      <p>
        Fast work and high-quality ingredients, along with genuine components,
        give a delicious taste to the dishes and provide a delightful dining
        experience.
      </p>
    </section>
  );
};

export default PromoText;
