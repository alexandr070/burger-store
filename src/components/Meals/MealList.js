import React from "react";
import Card from "../UI/Card";
import styles from "./MealList.module.css";
import MealItem from "./MealItem/MealItem";

const MEALS = [
  {
    id: "m1",
    name: "CheeseBurger",
    description: "A hamburger with a slice of melting cheese added.",
    price: 1.25,
  },
  {
    id: "m2",
    name: "Hamburger",
    description: "A basic burger with a beef patty, bun, and basic toppings.",
    price: 1.1,
  },
  {
    id: "m3",
    name: "Bacon Cheeseburger",
    description: "A cheeseburger with crispy bacon pieces added.",
    price: 2.99,
  },
  {
    id: "m4",
    name: "Veggie Burger",
    description:
      "A burger where the beef patty is replaced with a vegetable or plant-based alternative, such as a soy or mushroom patty.",
    price: 2.99,
  },
  {
    id: "m5",
    name: "Turkish Burger (Kebab)",
    description:
      "A burger where the patty is replaced with marinated meat, usually beef or chicken, and sauces and vegetables are added.",
    price: 5.99,
  },
];

const MealList = (props) => {
  const mealList = MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul> {mealList} </ul>
      </Card>
    </section>
  );
};

export default MealList;
