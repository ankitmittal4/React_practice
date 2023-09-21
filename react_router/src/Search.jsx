import React, { useState } from "react";
import Sresult from "./Sresult";
const Seacrh = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          className="input"
          placeholder="Search Anything"
          value={img}
          onChange={inputEvent}
        ></input>
      </div>
      {img === "" ? null : <Sresult name={img} />}
    </>
  );
};
export default Seacrh;
