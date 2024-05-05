import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import { format } from "date-fns";

const dateFormat = "MMMM yyyy";

function printDate(date) {
  if (!date) return "???";
  if (date === "present") return date;

  return format(date, dateFormat);
}
export default function ListItem({
  from = "",
  to = "",
  enterprise = "",
  speciality = "",
  description = "",
}) {
  return (
    <View style={styles.listData}>
      <View style={styles.column1}>
        <View style={styles.period}>
          <Text>{printDate(from) + " - " + printDate(to)}</Text>
        </View>
      </View>
      <View style={styles.column2}>
        <View style={styles.enterprise}>
          <Text>{enterprise}</Text>
        </View>
        <View style={styles.speciality}>
          <Text>{speciality}</Text>
        </View>
        {description ? (
          <View style={styles.description}>
            <Text>{description}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
