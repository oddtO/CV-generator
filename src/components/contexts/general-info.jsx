import { createContext, useMemo, useState } from "react";

export const GeneralInfoContext = createContext({
  "first-name": "",
  "last-name": "",
  "phone-number": "",
  email: "",
});

export function GeneralInfoProvider({ children }) {
  const [generalInfo, setGeneralInfo] = useState({
    "first-name": "hello",
    "last-name": "",
    "phone-number": "",
    email: "",
  });

  const contextObj = useMemo(() => {
    return { generalInfo, setGeneralInfo };
  }, [generalInfo, setGeneralInfo]);
  return (
    <GeneralInfoContext.Provider value={contextObj}>
      {children}
    </GeneralInfoContext.Provider>
  );
}
