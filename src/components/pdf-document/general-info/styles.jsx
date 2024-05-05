import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  intro: {
    backgroundColor: "darkblue",
    color: "white",
    display: "flex",
    justifyContent: "center",
    gap: 10,
    height: 140,
    fontWeight: "normal",
  },

  name: {
    fontSize: 40,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  contactData: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
