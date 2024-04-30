import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  listData: {
    display: "flex",
    flexDirection: "row",
    gap: 60,
  },
  column1: {},
  column2: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  period: {},
  enterprise: {
    fontSize: 20,
    fontWeight: "bold",
  },
  speciality: {},
  description: {
    maxWidth: 250,
  },
});
