import { StyleSheet } from "@react-pdf/renderer";

const contactSize = 20;
const imgSize = contactSize + 10;

export const styles = StyleSheet.create({
  contactItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: contactSize / 4,
  },

  contactImg: {
    width: imgSize,
    height: imgSize,
    objectFit: "contain",
  },

  contactText: {
    fontSize: contactSize,
  },
});
