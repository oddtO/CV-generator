import styles from "./output.module.scss";
import { OutputCV } from "../output-cv/component";
import { memo } from "react";
export function OutputResume({ isHidden }) {
  return (
    <div
      className={styles["output-wrapper"]}
      style={{ zIndex: isHidden ? -1 : 1 }}
    >
      <OutputCV></OutputCV>
    </div>
  );
}
