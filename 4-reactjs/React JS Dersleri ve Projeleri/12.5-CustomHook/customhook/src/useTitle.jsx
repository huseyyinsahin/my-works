import React from 'react'
import { useEffect } from "react";

function useTitle(num) {
    useEffect(() => {
        document.title = `Sayı ${num}`;
      }, [num]);
  
}

export default useTitle