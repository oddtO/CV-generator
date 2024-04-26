import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "../pdf-document/component";
import { useGeneralInfo } from "../contexts/use-general-info";
import { memo } from "react";
// Create Document Component
export function OutputCV() {
  const { generalInfo, setGeneralInfo } = useGeneralInfo();
  return (
    <PDFViewer>
      <MyDocument text={generalInfo["first-name"]}></MyDocument>
    </PDFViewer>
  );
}
