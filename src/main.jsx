import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GeneralInfoProvider } from "./components/contexts/use-general-info";
import { SkillsProvider } from "./components/contexts/use-skills";
import { EducationProvider } from "./components/contexts/use-education";
import { WorkExperienceProvider } from "./components/contexts/use-work-experience.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WorkExperienceProvider>
      <EducationProvider>
        <SkillsProvider>
          <GeneralInfoProvider>
            <App />
          </GeneralInfoProvider>
        </SkillsProvider>
      </EducationProvider>
    </WorkExperienceProvider>
  </React.StrictMode>,
);
