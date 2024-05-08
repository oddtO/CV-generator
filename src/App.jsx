import "./reset.css";
import { useEffect, useState } from "react";
import Main from "./components/main/component";
import { OutputResume } from "./components/output/component";
import "./App.scss";
import styles from "./App.module.scss";
import PdfIcon from "./assets/pdf-svgrepo-com (1).svg";
const isMobileWidth = window.matchMedia(styles.mobile).matches;
// const isMobileWidth = true;
function App() {
  const [isOutputVisible, setOutputVisibility] = useState(!isMobileWidth);

  return (
    <>
      <Main></Main>
      <OutputResume isHidden={!isOutputVisible}></OutputResume>
      <button
        id="pdf-viewer-toggler"
        type="button"
        onClick={() => setOutputVisibility(!isOutputVisible)}
      >
        <img src={PdfIcon} alt="toggle pdf viewer" />
      </button>
    </>
  );
}

export default App;
