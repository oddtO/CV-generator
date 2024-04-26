import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { styles } from "./styles";
import Hello from "./pdf-hello/hello";
import { memo } from "react";

export function MyDocument({ text }) {
  return (
    <Document>
      <Hello text={text}></Hello>
    </Document>
  );
}
