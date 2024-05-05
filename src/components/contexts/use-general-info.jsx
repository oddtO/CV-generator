import { useContext } from "react";
import { createCustomContext } from "./create-context";
import GeneralInfo from "../pdf-document/general-info/component";

const { Context, Provider } = createCustomContext({
  "first-name": "",
  "last-name": "",
  "phone-number": "",
  email: "",
});

function useGeneralInfo() {
  const { state, setState } = useContext(Context);
  return { generalInfo: state, setGeneralInfo: setState };
}
export { Provider as GeneralInfoProvider, useGeneralInfo };
