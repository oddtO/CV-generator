import List from "../list/component";
import ListItem from "../list-item/component";

export default function EducationList({ data }) {
  return (
    <List header="Education">
      {data.map((educationItem, index) => (
        <ListItem
          key={index}
          period={educationItem.period}
          enterprise={educationItem.enterprise}
          speciality={educationItem.speciality}
        />
      ))}
    </List>
  );
}
