import PropTypes from "prop-types";
export default function FormSection({ children, sectionName }) {
  return (
    <fieldset>
      <legend>{sectionName}</legend>
      {children}
    </fieldset>
  );
}

FormSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  children: PropTypes.element,
};
