import React, { useState, useEffect } from "react";

const App2 = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    // document.title = `You clciked me ${num} times`;
    alert("Hi");
  }, [num]);
  const press = () => {
    setNum(num + 1);
  };
  const pressbtn = () => {
    setNums(nums + 1);
  };
  return (
    <>
      <button onClick={press}>Click Me {num}</button>
      <br></br>
      <button onClick={pressbtn}>Click Me {nums}</button>
    </>
  );
};
export default App2;
