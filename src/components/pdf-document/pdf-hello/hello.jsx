import { Document, Page, Image, View, Text, pdf } from "@react-pdf/renderer";
import ContactItem from "../contact/component";
import { styles } from "./resume-style";
import PhoneIcon from "../../../assets/phone-icon.png";
import EmailIcon from "../../../assets/email-icon.png";
export default function Hello({ text }) {
  const jsx = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.intro}>
          <View style={styles.name}>
            <Text>Jake Tran</Text>
          </View>
          <View style={styles.contactData}>
            <ContactItem imgSrc={PhoneIcon} text="+11111111"></ContactItem>
            <ContactItem
              imgSrc={EmailIcon}
              text="email@email.com"
            ></ContactItem>
          </View>
        </View>
      </Page>
    </Document>
  );

  return jsx;
}
