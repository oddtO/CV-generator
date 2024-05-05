import PropTypes from "prop-types";
import styles from "./text-input.module.scss";
import { useEffect, useRef } from "react";

let timeoutId;
const onfocusHandler = () => {
  clearTimeout(timeoutId);
  const pdfToggler = document.querySelector("#pdf-viewer-toggler");
  pdfToggler.style.top = "250px";
};
const onblurHandler = () => {
  const pdfToggler = document.querySelector("#pdf-viewer-toggler");
  timeoutId = setTimeout(() => (pdfToggler.style.top = ""), 500);
};
export default function TextInput({
  labelText,
  name,
  onChange,
  dataId = "",
  value = "",
  type = "text",
  regex = ".*",
  togglerToDefault = false,
  togglerToDefaultText = "",
  togglerToDefaultFieldName = "",
  isDisabled = "",
}) {
  const inputRef = useRef(null);
  const togglerRef = useRef(null);
  return (
    <>
      <label htmlFor={name + dataId} className={styles["text-input"]}>
        <span>{labelText}</span>

        {type === "textarea" ? (
          <textarea
            onFocus={onfocusHandler}
            onBlur={onblurHandler}
            name={name + dataId}
            id={name + dataId}
            data-field-name={name}
            pattern={regex}
            onChange={onChange}
            value={value}
            ref={inputRef}
            disabled={isDisabled}
          ></textarea>
        ) : (
          <input
            onFocus={onfocusHandler}
            onBlur={onblurHandler}
            type={type}
            name={name + dataId}
            id={name + dataId}
            data-field-name={name}
            pattern={regex}
            onChange={onChange}
            value={value}
            ref={inputRef}
            disabled={isDisabled}
          />
        )}
      </label>

      {togglerToDefault && (
        <label
          className={styles["toggler-to-default"]}
          htmlFor={"togglerToDefault" + "-" + name + "-" + dataId}
        >
          <input
            ref={togglerRef}
            type="checkbox"
            data-field-name={togglerToDefaultFieldName}
            name={"togglerToDefault" + "-" + name + "-" + dataId}
            id={"togglerToDefault" + "-" + name + "-" + dataId}
            onChange={() => {
              const event = {
                target: inputRef,
                togglerRef: togglerRef.current,
              };
              onChange(event);
            }}
          />
          {togglerToDefaultText}
        </label>
      )}
    </>
  );
}
