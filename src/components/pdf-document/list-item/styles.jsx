import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  listData: {
    display: "flex",
    flexDirection: "row",
    gap: 60,
  },
  column1: {
    width: 160,
  },
  column2: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: 250,
  },
  period: {
    display: "flex",
    flexDirection: "row",
    width: 200,
  },
  enterprise: {
    fontSize: 20,
    fontWeight: "bold",
  },
  speciality: {},
  description: {
    maxWidth: 250,
  },
});
