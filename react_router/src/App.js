import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Services from "./Services";
import Error from "./Error";
import User from "./User";

const App = () => {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/explore" element={<Services />} />
        {/* <Route exact path="/user" element={<User />} /> */}
        <Route exact path="/user/:name/:course" element={<User />} />
        <Route compt={<Error />} />
      </Routes>
    </>
  );
};

export default App;
