import FormSection from "../form-section/component";
import TextInput from "../text-input/component";
import styles from "./form.module.scss";
import WorkExperienceList from "../work-experience-list/component";
import SkillsList from "../skills-list/component";
import EducationList from "../education-list/component";
export default function Form() {
  return (
    <form action="" className={styles["cv-form"]}>
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
      <FormSection sectionName="Education">
        <EducationList></EducationList>
      </FormSection>
      <FormSection sectionName="Work experience">
        <WorkExperienceList></WorkExperienceList>
      </FormSection>
      <FormSection sectionName="Skills">
        <SkillsList></SkillsList>
      </FormSection>
    </form>
  );
}
