import { View, Text, usePDF, Document, Page } from "@react-pdf/renderer";
import Hello from "../pdf-document/pdf-hello/hello.jsx";
import { PDFHolder } from "../pdf-document/component.jsx";
import { useGeneralInfo } from "../contexts/use-general-info.jsx";
import { useEffect, useMemo, useRef, useState } from "react";

import { pdf } from "@react-pdf/renderer";
function getJSX(param1) {
  const MyDoc = (
    <Document>
      <Page>
        <View>
          <Text>{param1}</Text>
        </View>
      </Page>
    </Document>
  );
  return MyDoc;
}

let timerId;
export const OutputCV = (props) => {
  const { generalInfo } = useGeneralInfo();

  const [pdfBinary, setPDFbinary] = useState(null);

  const prevComponentRef = useRef(null);
  const memoData = useMemo(() => ({ data: pdfBinary }), [pdfBinary]);
  useEffect(() => {
    async function createPDF() {
      const pdfBlob = await pdf(Hello(generalInfo["first-name"])).toBlob();
      const buffer = await pdfBlob.arrayBuffer();

      prevComponentRef.current = buffer;
      setPDFbinary(new Uint8Array(buffer));
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => createPDF(), 1000);
  }, [generalInfo]);

  if (!prevComponentRef.current) return <div>Loading</div>;

  return <PDFHolder pdfData={memoData}></PDFHolder>;
};
