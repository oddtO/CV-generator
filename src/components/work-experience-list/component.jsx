import styles from "../multi-list/at-top-delete-btn.module.scss";
import MultiList from "../multi-list/component";
import { useWorkExperience } from "../contexts/use-work-experience";
export default function WorkExperienceList() {
  const { jobExperiences, setJobExperiences, JobPositionExperience } =
    useWorkExperience();

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
