import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
