import { useState } from "react";
import styles from "./skills-list.module.scss";
import MultiList from "../multi-list/component";
class Skill {
  static biggestId = 0;
  static keyToLabelMap = new Map([["skill", "Skill"]]);
  constructor(skill = "") {
    this.id = Skill.biggestId++;
    this.skill = skill;
  }
}

const defaultSkill = new Skill();
export default function SkillsList() {
  const [skills, setSkills] = useState([defaultSkill]);
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
