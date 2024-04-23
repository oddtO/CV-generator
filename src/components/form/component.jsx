import FormSection from "../form-section/component";
import TextInput from "../text-input/component";

import WorkExperienceList from "../work-experience-list/component";

export default function Form() {
  return (
    <form action="">
      <FormSection sectionName="General info">
        <TextInput labelText="First name" name="first-name"></TextInput>
        <TextInput labelText="Last name" name="last-name"></TextInput>
        <TextInput
          type="tel"
          regex="[\d-+]*"
          labelText="Phone number"
          name="phone-number"
        ></TextInput>
        <TextInput type="email" labelText="Email" name="email"></TextInput>
      </FormSection>
      <FormSection sectionName="Work experience">
        <WorkExperienceList></WorkExperienceList>
      </FormSection>
    </form>
  );
}
