import styles from "./removable-input-list.module.scss";
export default function RemovableInputList({ removeFunc, children }) {
  return (
    <div className={styles["input-list"]}>
      {children}
      <button
        type="button"
        onClick={removeFunc}
        className={styles.remover}
      ></button>
    </div>
  );
}
