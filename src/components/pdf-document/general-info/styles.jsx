import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  intro: {
    backgroundColor: "darkblue",
    color: "white",
    display: "flex",
    justifyContent: "center",
    gap: 10,
    minHeight: 120,
    height: "auto",
    fontWeight: "normal",
    paddingBottom: 20,
    paddingTop: 20,
  },

  name: {
    fontSize: 40,
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
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
