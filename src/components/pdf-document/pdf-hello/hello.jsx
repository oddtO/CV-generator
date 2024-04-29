import { Document, Page, Image, View, Text, pdf } from "@react-pdf/renderer";
import { styles } from "./resume-style";
import GeneralInfo from "../general-info/component";
export default function Hello({ text }) {
  const jsx = (
    <Document>
      <Page size="A4" style={styles.page}>
        <GeneralInfo
          firstName={text}
          lastName={"Tran"}
          phoneNumber={"+1111111"}
          email={"email@notrealemail.com"}
        ></GeneralInfo>
      </Page>
    </Document>
  );

  return jsx;
}
