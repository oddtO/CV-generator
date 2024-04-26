import FormSection from "../form-section/component";
import TextInput from "../text-input/component";
import styles from "./form.module.scss";
import WorkExperienceList from "../work-experience-list/component";
import SkillsList from "../skills-list/component";
import EducationList from "../education-list/component";
import { useCallback, useState } from "react";
import { useGeneralInfo } from "../contexts/use-general-info";
export default function Form() {
  const { generalInfo, setGeneralInfo } = useGeneralInfo();

  const fieldChange = useCallback(
    (e) => {
      setGeneralInfo({
        ...generalInfo,
        [e.target.dataset.fieldName]: e.target.value,
      });
    },
    [generalInfo, setGeneralInfo],
  );

  return (
    <form action="" className={styles["cv-form"]}>
      <FormSection sectionName="General info">
        <TextInput
          labelText="First name"
          name="first-name"
          onChange={fieldChange}
          value={generalInfo["first-name"]}
        ></TextInput>
        <TextInput
          labelText="Last name"
          name="last-name"
          onChange={fieldChange}
          value={generalInfo["last-name"]}
        ></TextInput>
        <TextInput
          type="tel"
          regex="[\d-+]*"
          labelText="Phone number"
          name="phone-number"
          value={generalInfo["phone-number"]}
          onChange={fieldChange}
        ></TextInput>
        <TextInput
          type="email"
          labelText="Email"
          name="email"
          onChange={fieldChange}
          value={generalInfo.email}
        ></TextInput>
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
