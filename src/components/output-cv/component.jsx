import { View, Text, usePDF, Document, Page } from "@react-pdf/renderer";
import Hello from "../pdf-document/pdf-hello/hello.jsx";
import { PDFHolder } from "../pdf-document/component.jsx";
import { useGeneralInfo } from "../contexts/use-general-info.jsx";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { pdf } from "@react-pdf/renderer";
import { useSkills } from "../contexts/use-skills.jsx";
import { useEducation } from "../contexts/use-education.jsx";
import { useWorkExperience } from "../contexts/use-work-experience.jsx";

let timerId;
export const OutputCV = (props) => {
  const { generalInfo } = useGeneralInfo();

  const { skills } = useSkills();
  const { educations } = useEducation();
  // const [pdfBinary, setPDFbinary] = useState(null);

  const { jobExperiences } = useWorkExperience();
  const getDoc = useCallback(
    () => (
      <Hello
        generalInfo={generalInfo}
        skills={skills}
        education={educations}
        workExperience={jobExperiences}
      />
    ),
    [generalInfo, skills, educations, jobExperiences],
  );
  const [instance, updateInstance] = usePDF({
    document: getDoc(),
  });
  const [curPDFinstance, setCurPDFinstance] = useState(null);
  // const memoData = useMemo(() => ({ data: pdfBinary }), [pdfBinary]);
  useEffect(() => {
    async function createPDF() {
      // const pdfBlob = await pdf(Hello(generalInfo["first-name"])).toBlob();

      updateInstance(getDoc());
      // const pdfBlob = await pdf(
      //   <Hello text={generalInfo["first-name"]} />,
      // ).toBlob();
      // const buffer = await pdfBlob.arrayBuffer();
      //
      // prevComponentRef.current = buffer;
      // setPDFbinary(new Uint8Array(buffer));
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => createPDF(), 1000);
  }, [generalInfo, skills, updateInstance, getDoc]);

  useEffect(() => {
    if (instance.loading) return;

    setCurPDFinstance(instance);
  }, [instance, curPDFinstance]);
  if (!curPDFinstance) return <div>Loading</div>;

  return <PDFHolder pdfData={curPDFinstance}></PDFHolder>;
};
