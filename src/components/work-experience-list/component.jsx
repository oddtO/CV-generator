import { useState } from "react";
import styles from "./work-experience-list.module.scss";
import MultiList from "../multi-list/component";
class JobPositionExperience {
  static biggestId = 0;
  static keyToLabelMap = new Map([
    ["job-title", "Job title"],
    ["company", "Company"],
    ["city", "City"],
  ]);
  constructor(jobTitle = "", company = "", city = "") {
    this.id = JobPositionExperience.biggestId++;
    this["job-title"] = jobTitle;
    this.company = company;
    this.city = city;
  }
}

const defaultJobPosition = new JobPositionExperience();
export default function WorkExperienceList() {
  const [jobExperiences, setJobExperiences] = useState([defaultJobPosition]);
  return (
    <div className={styles["work-exp"]}>
      <MultiList
        listItems={jobExperiences}
        setListItems={setJobExperiences}
        ListItemClass={JobPositionExperience}
        addButtonText="Add experience"
      ></MultiList>
    </div>
  );
}
