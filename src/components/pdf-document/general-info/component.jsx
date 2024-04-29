import { styles } from "./styles";
import { View, Text } from "@react-pdf/renderer";
import ContactItem from "../contact/component";
import PhoneIcon from "../../../assets/phone-icon.png";
import EmailIcon from "../../../assets/email-icon.png";

export default function GeneralInfo({
  firstName,
  lastName,
  phoneNumber,
  email,
}) {
  return (
    <View style={styles.intro}>
      <View style={styles.name}>
        <Text>{firstName + " " + lastName}</Text>
      </View>
      <View style={styles.contactData}>
        <ContactItem imgSrc={PhoneIcon} text={phoneNumber}></ContactItem>
        <ContactItem imgSrc={EmailIcon} text={email}></ContactItem>
      </View>
    </View>
  );
}
