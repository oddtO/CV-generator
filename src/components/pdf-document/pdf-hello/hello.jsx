import { Document, Page, View, Text, pdf } from "@react-pdf/renderer";
import { styles } from "../styles";
export default function Hello(text) {
  const jsx = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{text}</Text>
        </View>
        <View style={styles.section}>
          <Text>{text}</Text>
        </View>
      </Page>
    </Document>
  );

  return jsx;
}
