import { StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  intro: {
    backgroundColor: "darkblue",
    color: "white",
    display: "flex",
    justifyContent: "center",
    gap: 10,
    height: 140,
  },

  name: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },

  contactData: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
