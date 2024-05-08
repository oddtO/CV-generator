import { View, Text, usePDF, Document, Page } from "@react-pdf/renderer";
import ResumeViewer from "../pdf-document/resume-viewer/component.jsx";
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

  const { jobExperiences } = useWorkExperience();
  const getDoc = useCallback(
    () => (
      <ResumeViewer
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
  useEffect(() => {
    async function createPDF() {
      updateInstance(getDoc());
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => createPDF(), 1000);
  }, [generalInfo, skills, updateInstance, getDoc]);

  useEffect(() => {
    if (instance.loading) return;

    setCurPDFinstance(instance);
  }, [instance, curPDFinstance]);
  if (!curPDFinstance)
    return <div style={{ color: "white" }}>Loading PDF viewer</div>;

  return <PDFHolder pdfData={curPDFinstance}></PDFHolder>;
};
