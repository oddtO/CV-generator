import { useState } from "react";
import styles from "../multi-list/at-top-delete-btn.module.scss";
import MultiList from "../multi-list/component";
class Education {
  static biggestId = 0;
  static keyToLabelMap = new Map([
    ["school", "School or university"],
    ["degree", "Degree"],
    ["from", "From"],
    ["to", "To"],
  ]);
  static keyToInputType = new Map([
    ["school", "text"],
    ["degree", "text"],
    ["from", "date"],
    ["to", "date"],
  ]);
  constructor(school = "", degree = "", from = undefined, to = undefined) {
    this.id = Education.biggestId++;
    this.school = school;
    this.degree = degree;
    this.from = from;
    this.to = to;
  }
}

const defaultEducation = new Education();
export default function EducationList() {
  const [educations, setEducations] = useState([defaultEducation]);
  return (
    <div className={styles["config-delete-btn"]}>
      <MultiList
        listItems={educations}
        setListItems={setEducations}
        ListItemClass={Education}
        addButtonText="Add education"
      ></MultiList>
    </div>
  );
}
