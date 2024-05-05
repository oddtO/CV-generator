import { useContext } from "react";
import { createCustomContext } from "./create-context";

class Skill {
  static biggestId = 0;
  static keyToLabelMap = new Map([["skill", "Skill"]]);
  static keyToInputType = new Map([["skill", "text"]]);
  constructor(skill = "") {
    this.id = Skill.biggestId++;
    this.skill = skill;
  }
}

const defaultSkills = [
  new Skill("HTML"),
  new Skill("CSS"),
  new Skill("JS"),
  new Skill("React"),
];
const { Context, Provider } = createCustomContext(defaultSkills);

function useSkills() {
  const { state, setState } = useContext(Context);
  return { skills: state, setSkills: setState, Skill };
}
export { Provider as SkillsProvider, useSkills };
