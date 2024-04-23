import { useState } from "react";
import TextInput from "../text-input/component";
import RemovableInputList from "../removable-input-list/component";
class JobPositionExperience {
  static biggestId = 0;
  constructor(jobTitle = "", company = "", city = "") {
    this.id = JobPositionExperience.biggestId++;
    this["job-title"] = jobTitle;
    this.company = company;
    this.city = city;
  }
}
const defaultJobPosition = new JobPositionExperience();
export default function WorkExperienceList() {
  const [jobExperiences, setJobExperiences] = useState([defaultJobPosition]);

  const inputOnChangeFactory = (experienceId) => {
    return (e) => {
      const propName = e.target.dataset.fieldName;
      const val = e.target.value;
      setJobExperiences(
        jobExperiences.map((jobExperience) => {
          if (jobExperience.id !== experienceId) return jobExperience;
          else {
            const updatedJobExperience = Object.assign(jobExperience);
            updatedJobExperience[propName] = val;
            return updatedJobExperience;
          }
        }),
      );
    };
  };

  return (
    <div>
      {jobExperiences.map((keyJobExperience) => {
        const stateChanger = inputOnChangeFactory(keyJobExperience.id);
        return (
          <RemovableInputList
            key={keyJobExperience.id}
            removeFunc={() => {
              setJobExperiences(
                jobExperiences.filter(
                  (jobExperience) => jobExperience.id !== keyJobExperience.id,
                ),
              );
            }}
          >
            <TextInput
              labelText="Job title"
              name="job-title"
              dataId={keyJobExperience.id}
              onChange={stateChanger}
              value={keyJobExperience["job-title"]}
            ></TextInput>
            <TextInput
              labelText={"Company"}
              name={"company"}
              dataId={keyJobExperience.id}
              onChange={stateChanger}
              value={keyJobExperience.company}
            ></TextInput>
            <TextInput
              labelText={"City"}
              dataId={keyJobExperience.id}
              name={"city"}
              onChange={stateChanger}
              value={keyJobExperience.city}
            ></TextInput>
          </RemovableInputList>
        );
      })}
      <button
        type="button"
        onClick={() =>
          setJobExperiences([...jobExperiences, new JobPositionExperience()])
        }
      >
        Add
      </button>
    </div>
  );
}
