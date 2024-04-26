import { Page, View, Text, pdf } from "@react-pdf/renderer";
import { styles } from "../styles";
import { useGeneralInfo } from "../../contexts/use-general-info";
export default function Hello({ text }) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{text}</Text>
      </View>
    </Page>
  );
}
