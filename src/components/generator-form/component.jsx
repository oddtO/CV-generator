import styles from "./generator-form.module.scss";

export default function GeneratorForm() {
  console.log(styles);
  return <div className={styles["form-wrapper"]}></div>;
}
