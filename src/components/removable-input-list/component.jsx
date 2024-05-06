import { useEffect, useRef } from "react";
import styles from "./removable-input-list.module.scss";
import { CSSTransition } from "react-transition-group";
export default function RemovableInputList({ removeFunc, children }) {
  const divRef = useRef();
  return (
    <div className={styles["input-list"]} ref={divRef}>
      {children}
      <button
        type="button"
        onClick={() => {
          // const animEndCb = () => {
          //   divRef.current.removeEventListener("animationend", animEndCb);
          //   removeFunc();
          // };
          // divRef.current.addEventListener("animationend", animEndCb);

          const animDuration = 200;
          divRef.current.animate(
            [
              { transform: "scaleY(1)", marginBottom: "0.5em" },
              {
                transform: "scaleY(0)",
                marginBottom: getComputedStyle(divRef.current).getPropertyValue(
                  "--animation-btn-slide",
                ),
              },
            ],
            { duration: animDuration, fill: "forwards" },
          );
          setTimeout(() => {
            removeFunc();
          }, animDuration + 5);
        }}
        className={styles.remover}
      ></button>
    </div>
  );
}
