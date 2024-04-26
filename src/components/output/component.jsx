import styles from "./output.module.scss";
import { OutputCV } from "../output-cv/component";
import { memo } from "react";
export function OutputResume() {
  return (
    <div className={styles["output-wrapper"]}>
      <OutputCV></OutputCV>
    </div>
  );
}
