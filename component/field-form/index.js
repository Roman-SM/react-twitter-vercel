import styles from "./index.module.css";
import { useState, memo } from "react";

function Component({ placeholder, button, onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    if (value === "") return null;

    if (onSubmit) {
      onSubmit(value);
    } else {
      throw new Error("onSubmit props is undefined");
    }

    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Перевірка на натискання клавіші Enter
      e.preventDefault(); // Запобігаємо додатковому переходу на новий рядок у textarea
      handleSubmit(); // Відправляємо дані, як при натисканні кнопки
    }
  };

  const isDisabled = value.length === 0;

  return (
    <div className={styles.fieldForm}>
      <textarea
        onChange={handleChange}
        value={value}
        rows={2}
        placeholder={placeholder}
        className={styles.fieldForm__field}
        onKeyDown={handleKeyDown} // Додаємо обробник події на натискання клавіші
      ></textarea>
      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        className={styles.fieldForm__button}
      >
        {button}
      </button>
    </div>
  );
}

export default memo(Component);
