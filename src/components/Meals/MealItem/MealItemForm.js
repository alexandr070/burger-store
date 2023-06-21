import { useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;

    props.onAddToCart(+inputAmount);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "100",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
