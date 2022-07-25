import { PlusCircle } from "phosphor-react";
import styles from "./AddNewTask.module.css";

export function AddNewTask() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a new task"
      />
      <button className={styles.btnSubmit} type="submit">
        Add <PlusCircle size={16} />
      </button>
    </form>
  );
}
