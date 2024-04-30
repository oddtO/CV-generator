import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
export default function ListItem({
  period,
  enterprise,
  speciality,
  description = "",
}) {
  return (
    <View style={styles.listData}>
      <View style={styles.column1}>
        <View style={styles.period}>
          <Text>{period}</Text>
        </View>
      </View>
      <View style={styles.column2}>
        <View style={styles.enterprise}>
          <Text>{enterprise}</Text>
        </View>
        <View style={styles.speciality}>
          <Text>{speciality}</Text>
        </View>
        {description && (
          <View style={styles.description}>
            <Text>{description}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
