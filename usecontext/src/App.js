// import logo from "./logo.svg";
import React, { createContext } from "react";
import "./App.css";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Ankit"}>
        <LastName.Provider value={"Mittal"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };
