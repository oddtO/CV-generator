import { Font, StyleSheet } from "@react-pdf/renderer";
import RobotoRegular from "../../../assets/Roboto-Regular.ttf";
import RobotoThin from "../../../assets/Roboto-Thin.ttf";
import RobotoBold from "../../../assets/Roboto-Bold.ttf";
Font.register({
  family: "Roboto",
  fonts: [
    { src: RobotoRegular },
    { src: RobotoThin, fontWeight: "thin" },
    { src: RobotoBold, fontWeight: "bold" },
  ],
});
export const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    fontFamily: "Roboto",
    fontWeight: "thin",
  },
});
