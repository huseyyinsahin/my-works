import React from "react";
import { useState, useEffect } from "react";
import useTitle from "./useTitle";

function TitleOne() {
  const [num, setNumm] = useState(0);
  useTitle(num);
 
  return (
    <div>
      <button onClick={() => setNumm(num + 1)}>Sayı - {num}</button>
    </div>
  );
}

export default TitleOne;
