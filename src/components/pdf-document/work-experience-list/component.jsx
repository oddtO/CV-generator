import List from "../list/component";
import ListItem from "../list-item/component";

export default function WorkExperienceList({ data }) {
  return (
    <List header="Work Experience">
      {data.map((workExperienceItem, index) => (
        <ListItem
          key={index}
          period={workExperienceItem.period}
          enterprise={workExperienceItem.enterprise}
          speciality={workExperienceItem.speciality}
          description={
            workExperienceItem.description ? workExperienceItem.description : ""
          }
        />
      ))}
    </List>
  );
}
