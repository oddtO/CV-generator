import { View, Image, Text } from "@react-pdf/renderer";
import { styles } from "./styles";

export default function ContactItem({ imgSrc, text }) {
  return (
    <View style={styles.contactItem}>
      <Image style={styles.contactImg} src={imgSrc}></Image>
      <Text style={styles.contactText}>{text}</Text>
    </View>
  );
}
