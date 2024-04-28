import { View, Text, usePDF, Document, Page } from "@react-pdf/renderer";
import Hello from "../pdf-document/pdf-hello/hello.jsx";
import { PDFHolder } from "../pdf-document/component.jsx";

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

export const OutputCV = (props) => {
  const [curInstance, updateInstance] = usePDF({
    document: Hello("hello"),
  });

  if (curInstance.loading) return <div>Loading</div>;
  if (curInstance.error)
    return <div>Something went wrong: {curInstance.error}</div>;
  return <PDFHolder pdfUrl={curInstance.url}></PDFHolder>;
};
