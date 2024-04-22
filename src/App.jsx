import "./reset.css";
import { useState } from "react";
import GeneratorForm from "./components/generator-form/component";
import OutputResume from "./components/output/component";
import "./App.scss";

function App() {
  const [isOutputVisible, setOutputVisibility] = useState(true);

  return (
    <>
      <GeneratorForm></GeneratorForm>
      {isOutputVisible && <OutputResume></OutputResume>}
      <button>Show/Hide</button>
    </>
  );
}

export default App;
