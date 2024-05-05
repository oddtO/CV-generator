import { useState } from "react";
import styles from "../multi-list/at-middle-delete-btn.module.scss";
import MultiList from "../multi-list/component";
import { useSkills } from "../contexts/use-skills";

export default function SkillsList() {
  const { skills, setSkills, Skill } = useSkills();
  return (
    <div className={styles["config-delete-btn"]}>
      <MultiList
        listItems={skills}
        setListItems={setSkills}
        ListItemClass={Skill}
        addButtonText="Add skill"
      ></MultiList>
    </div>
  );
}
