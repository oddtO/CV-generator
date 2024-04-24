import { useState } from "react";
import styles from "../multi-list/at-top-delete-btn.module.scss";
import MultiList from "../multi-list/component";
class JobPositionExperience {
  static biggestId = 0;
  static keyToLabelMap = new Map([
    ["job-title", "Job title"],
    ["company", "Company"],
    ["from", "From"],
    ["to", "To"],
    ["description", "Your responsibilities"],
  ]);
  static keyToInputType = new Map([
    ["job-title", "text"],
    ["company", "text"],
    ["from", "date"],
    ["to", "date"],
    ["description", "textarea"],
  ]);
  constructor(
    jobTitle = "",
    company = "",
    from = undefined,
    to = undefined,
    description = "",
  ) {
    this.id = JobPositionExperience.biggestId++;
    this["job-title"] = jobTitle;
    this.company = company;
    this.from = from;
    this.to = to;
    this.description = description;
  }
}

const defaultJobPosition = new JobPositionExperience();
export default function WorkExperienceList() {
  const [jobExperiences, setJobExperiences] = useState([defaultJobPosition]);
  return (
    <div className={styles["config-delete-btn"]}>
      <MultiList
        listItems={jobExperiences}
        setListItems={setJobExperiences}
        ListItemClass={JobPositionExperience}
        addButtonText="Add experience"
      ></MultiList>
    </div>
  );
}
