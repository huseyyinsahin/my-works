import { useState } from "react";
import Characters from "./Characters";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <Characters input={input} />
    </>
  );
}

export default App;
