import List from "../list/component";
import ListItem from "../list-item/component";

export default function EducationList({ data }) {
  return (
    <List header="Education">
      {data.map((educationItem) => (
        <ListItem
          key={educationItem.id}
          from={educationItem.from}
          to={educationItem.to}
          enterprise={educationItem.school}
          speciality={educationItem.degree}
        />
      ))}
    </List>
  );
}
