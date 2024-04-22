import styles from "./text-input.module.scss";
export default function TextInput({ labelText, name }) {
  return (
    <label htmlFor={name} className={styles["text-input"]}>
      <span>{labelText}</span>
      <input type="text" name={name} id={name} />
    </label>
  );
}
