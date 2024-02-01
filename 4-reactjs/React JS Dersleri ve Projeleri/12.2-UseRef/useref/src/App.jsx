import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0)
  const renderCount = useRef(0);
  // {current:0}
  const inputRef = useRef();

  useEffect(() => {
    // setRenderCount((prev)=>prev+1)
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value='hüseyin';
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Benim Adım {name}</div>
      <div>{renderCount.current} defa render oldu</div>
      <button onClick={focusInput}>focus</button>
    </div>
  );
}

export default App;
