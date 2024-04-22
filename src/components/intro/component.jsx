import styles from "./intro.module.scss";
export default function Intro() {
  return (
    <div className={styles.intro}>
      <h1>
        <span className={styles["gradient-text"]}>CV</span> generator
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus
        adipisci animi sit officiis! Aliquam deserunt at officia, quia quis iure
        delectus. Eaque incidunt beatae culpa quasi enim, quam reiciendis.
      </p>
    </div>
  );
}
