import styles from "./main.module.scss";
import Intro from "../intro/component";

export default function Main() {
  return (
    <div className={styles["form-wrapper"]}>
      <Intro></Intro>
    </div>
  );
}
