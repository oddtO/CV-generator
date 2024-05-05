import { createCustomContext } from "./create-context";
import { useContext } from "react";
class Education {
  static biggestId = 0;
  static keyToLabelMap = new Map([
    ["school", "School or university"],
    ["degree", "Degree"],
    ["from", "Start date"],
    ["to", "End date"],
  ]);
  static keyToInputType = new Map([
    ["school", "text"],
    ["degree", "text"],
    ["from", "date"],
    ["to", "date"],
  ]);
  constructor(school = "", degree = "", from = undefined, to = undefined) {
    this.id = Education.biggestId++;
    this.school = school;
    this.degree = degree;
    this.from = from;
    this.to = to;
  }
}

const defaultEducation = new Education(
  "University of Science and Technology",
  "Bachelor",
  "2018-08-21",
  "2022-07-20",
);
const { Context, Provider } = createCustomContext([defaultEducation]);

function useEducation() {
  const { state, setState } = useContext(Context);
  return { educations: state, setEducations: setState, Education };
}
export { Provider as EducationProvider, useEducation };
