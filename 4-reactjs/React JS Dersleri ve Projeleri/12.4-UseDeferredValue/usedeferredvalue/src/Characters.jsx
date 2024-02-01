import { useMemo, useDeferredValue } from "react";
function Characters({ input }) {
  const deferredValue = useDeferredValue(input);
  const myList = useMemo(() => {
    const myArray = [];
    for (let i = 0; i < 3000; i++) {
      myArray.push(<div key={i}>{deferredValue}</div>);
    }
    return myArray;
  }, [deferredValue]);
  return myList;
}

export default Characters;
