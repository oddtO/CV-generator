import "./reset.css";
import { useEffect, useState } from "react";
import Main from "./components/main/component";
import { OutputResume } from "./components/output/component";
import "./App.scss";
import styles from "./App.module.scss";

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
        Show/Hide
      </button>
    </>
  );
}

export default App;
