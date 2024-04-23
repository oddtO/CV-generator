import PropTypes from "prop-types";
import styles from "./text-input.module.scss";
export default function TextInput({
  labelText,
  name,
  onChange,
  dataId = "",
  value = "",
  type = "text",
  regex = ".*",
}) {
  return (
    <label htmlFor={name + dataId} className={styles["text-input"]}>
      <span>{labelText}</span>
      <input
        type={type}
        name={name + dataId}
        id={name + dataId}
        data-field-name={name}
        pattern={regex}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}

TextInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  regex: PropTypes.string,
};
