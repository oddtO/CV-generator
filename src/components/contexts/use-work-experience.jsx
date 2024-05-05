import { useContext } from "react";
import { createCustomContext } from "./create-context";
class JobPositionExperience {
  static biggestId = 0;
  static keyToLabelMap = new Map([
    ["job-title", "Job title"],
    ["company", "Company"],
    ["from", "From"],
    ["to", "To"],
    ["description", "Your responsibilities"],
  ]);
  static keyToInputType = new Map([
    ["job-title", "text"],
    ["company", "text"],
    ["from", "date"],
    ["to", "date"],
    ["description", "textarea"],
  ]);

  static keyToDefaultTogglerLabel = new Map([["to", "still working"]]);
  static keyToDefaultTogglerField = new Map([["to", "stillWorking"]]);

  static togglerKeys = new Set(
    JobPositionExperience.keyToDefaultTogglerField.values(),
  );
  constructor(
    jobTitle = "",
    company = "",
    from = undefined,
    to = undefined,
    description = "",
    stillWorking = false,
  ) {
    this.id = JobPositionExperience.biggestId++;
    this["job-title"] = jobTitle;
    this.company = company;
    this.from = from;
    this.to = to;
    this.description = description;
    this.stillWorking = stillWorking;
  }
}

const defaultJobPosition = new JobPositionExperience();

const { Context, Provider } = createCustomContext([defaultJobPosition]);

function useWorkExperience() {
  const { state, setState } = useContext(Context);
  return {
    jobExperiences: state,
    setJobExperiences: setState,
    JobPositionExperience,
  };
}
export { Provider as WorkExperienceProvider, useWorkExperience };
