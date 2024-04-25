import "./reset.css";
import { useState } from "react";
import Main from "./components/main/component";
import OutputResume from "./components/output/component";
import "./App.scss";

function App() {
  const [isOutputVisible, setOutputVisibility] = useState(true);

  return (
    <>
      <Main></Main>
      {isOutputVisible && <OutputResume></OutputResume>}
      <button
        type="button"
        onClick={() => setOutputVisibility(!isOutputVisible)}
      >
        Show/Hide
      </button>
    </>
  );
}

export default App;
