import styles from "./main.module.scss";
import Intro from "../intro/component";
import Form from "../form/component";
export default function Main() {
  return (
    <div className={styles["form-wrapper"]}>
      <Intro></Intro>
      <Form></Form>
    </div>
  );
}
