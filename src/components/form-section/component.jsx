import PropTypes from "prop-types";
import styles from "./form-section.module.scss";
export default function FormSection({ children, sectionName }) {
  return (
    <fieldset className={styles.section}>
      <legend>{sectionName}</legend>
      {children}
    </fieldset>
  );
}

FormSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};
