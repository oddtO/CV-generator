import { StyleSheet } from "@react-pdf/renderer";

const headerPadding = 5;
const headerMargin = 60;
export const styles = StyleSheet.create({
  listWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 20,
    gap: 10,
    marginLeft: headerMargin,
    marginRight: headerMargin,
  },
  header: {
    textAlign: "center",
    backgroundColor: "#dcdcfa",
    paddingTop: headerPadding,
    paddingBottom: headerPadding,
    fontSize: 25,

    color: "darkblue",
    fontWeight: "ultrabold",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
