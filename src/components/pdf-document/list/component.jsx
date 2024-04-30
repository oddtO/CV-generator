import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
export default function List({ header, children }) {
  return (
    <View style={styles.listWrapper}>
      <View style={styles.header}>
        <Text>{header}</Text>
      </View>
      <View style={styles.list}>{children}</View>
    </View>
  );
}
