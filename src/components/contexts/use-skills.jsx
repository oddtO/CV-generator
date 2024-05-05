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

const defaultSkill = new Skill();
const { Context, Provider } = createCustomContext([defaultSkill]);

function useSkills() {
  const { state, setState } = useContext(Context);
  return { skills: state, setSkills: setState, Skill };
}
export { Provider as SkillsProvider, useSkills };
