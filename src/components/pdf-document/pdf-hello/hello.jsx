import { Document, Page, Image, View, Text, pdf } from "@react-pdf/renderer";
import { styles } from "./resume-style";
import GeneralInfo from "../general-info/component";
import SkillsList from "../skills-list/component";
import EducationList from "../education-list/component";
import WorkExperienceList from "../work-experience-list/component";
const mockEducationData = [
  {
    speciality: "Bachelors in Economics",
    enterprise: "London City University",
    period: "08/2020 – present",
  },
  {
    speciality: "Bachelors in Economics",
    enterprise: "London City University",
    period: "08/2020 – present",
  },
];

const mockWorkExpData = [
  {
    speciality: "UX & UI Designer",
    enterprise: "Umbrella Inc",
    period: "08/2020 – present",
    description:
      "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
  },
  {
    speciality: "UX & UI Designer",
    enterprise: "Umbrella Inc",
    period: "08/2020 – present",
    description:
      "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
  },
];

const mockSkills = [
  "javascript",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
  "react",
  "leadership",
];
export default function Hello({ text }) {
  const jsx = (
    <Document>
      <Page size="A4" style={styles.page}>
        <GeneralInfo
          firstName={text}
          lastName={"Tran"}
          phoneNumber={"+1111111"}
          email={"email@notrealemail.com"}
        ></GeneralInfo>
        <SkillsList data={mockSkills}></SkillsList>
        <EducationList data={mockEducationData}></EducationList>
        <WorkExperienceList data={mockWorkExpData}></WorkExperienceList>
      </Page>
    </Document>
  );

  return jsx;
}
