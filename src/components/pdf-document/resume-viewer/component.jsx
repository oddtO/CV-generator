import { Document, Page, Image, View, Text, pdf } from "@react-pdf/renderer";
import { styles } from "./resume-style";
import GeneralInfo from "../general-info/component";
import SkillsList from "../skills-list/component";
import EducationList from "../education-list/component";
import WorkExperienceList from "../work-experience-list/component";

export default function ResumeViewer({
  generalInfo,
  skills,
  education,
  workExperience,
}) {
  const jsx = (
    <Document>
      <Page size="A4" style={styles.page}>
        <GeneralInfo
          firstName={generalInfo["first-name"]}
          lastName={generalInfo["last-name"]}
          phoneNumber={generalInfo["phone-number"]}
          email={generalInfo.email}
        ></GeneralInfo>
        <SkillsList data={skills}></SkillsList>
        <EducationList data={education}></EducationList>
        <WorkExperienceList data={workExperience}></WorkExperienceList>
      </Page>
    </Document>
  );

  return jsx;
}
