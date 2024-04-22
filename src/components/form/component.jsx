import FormSection from "../form-section/component";
import TextInput from "../text-input/component";
import inputStyles from "../text-input/text-input.module.scss";

export default function Form() {
  return (
    <form action="">
      <FormSection sectionName="Personal info">
        <TextInput labelText="First name" name="first-name"></TextInput>
        <TextInput labelText="Last name" name="last-name"></TextInput>
        <TextInput
          type="tel"
          regex="[\d-+]*"
          labelText="Phone number"
          name="phone-number"
        ></TextInput>
      </FormSection>
    </form>
  );
}
