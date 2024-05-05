import { useState } from "react";
import styles from "../multi-list/at-top-delete-btn.module.scss";
import MultiList from "../multi-list/component";
import { useEducation } from "../contexts/use-education";
export default function EducationList() {
  const { educations, setEducations, Education } = useEducation();
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
