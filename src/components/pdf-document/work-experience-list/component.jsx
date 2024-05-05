import List from "../list/component";
import ListItem from "../list-item/component";

export default function WorkExperienceList({ data }) {
  return (
    <List header="Work Experience">
      {data.map((workExperienceItem) => (
        <ListItem
          key={workExperienceItem.id}
          from={workExperienceItem.from}
          to={
            workExperienceItem.stillWorking ? "present" : workExperienceItem.to
          }
          enterprise={workExperienceItem.company}
          speciality={workExperienceItem["job-title"]}
          description={
            workExperienceItem.description ? workExperienceItem.description : ""
          }
        />
      ))}
    </List>
  );
}
