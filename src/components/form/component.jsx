import FormSection from "../form-section/component";
import TextInput from "../text-input/component";

export default function Form() {
  return (
    <form action="">
      <FormSection sectionName="Personal info">
        <TextInput labelText="name" name="name"></TextInput>
      </FormSection>
    </form>
  );
}
