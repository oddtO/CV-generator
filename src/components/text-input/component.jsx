import PropTypes from "prop-types";
import styles from "./text-input.module.scss";
export default function TextInput({
  labelText,
  name,
  type = "text",
  regex = "*",
}) {
  return (
    <label htmlFor={name} className={styles["text-input"]}>
      <span>{labelText}</span>
      <input type={type} name={name} id={name} pattern={regex} />
    </label>
  );
}

TextInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  regex: PropTypes.string,
};
