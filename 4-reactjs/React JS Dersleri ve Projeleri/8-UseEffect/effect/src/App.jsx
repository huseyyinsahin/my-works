import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [can, setCan] = useState(0);
  const [tuba, setTuba] = useState(0);

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz");
  }, []);

  useEffect(() => {
    console.log("herzaman çalışır");
  });

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve can değerinde değişiklik olunca"
    );
  }, [can]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve tuba değerinde değişiklik olunca"
    );
  }, [tuba]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve can ,tuba değerinde değişiklik olunca"
    );
  }, [can, tuba]);

  return (
    <div className="App">
      <div className="first-div">
        <button onClick={() => setCan(can + 1)}>Can ++</button>
        <div>Can: {can}</div>
      </div>
      <div className="">
        <button onClick={() => setTuba(tuba + 1)}>tuba ++</button>
        <div>tuba: {tuba}</div>
      </div>
    </div>
  );
}

export default App;
