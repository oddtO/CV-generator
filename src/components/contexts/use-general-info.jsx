import { GeneralInfoContext } from "./general-info";
import { useContext } from "react";
export function useGeneralInfo() {
  return useContext(GeneralInfoContext);
}
