import { Text, View } from "@react-pdf/renderer";
import List from "../list/component";
import { styles } from "./styles";

export default function SkillsList({ data }) {
  return (
    <List header="Skills">
      <View style={styles.inliner}>
        {data.map((skill) => (
          <Text key={skill.id}>{skill.skill}</Text>
        ))}
      </View>
    </List>
  );
}
