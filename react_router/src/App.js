import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Search from "./Search";
import Menu from "./Menu";
import Services from "./Services";
import Error from "./Error";
import User from "./User";

const App = () => {
  return (
    <>
      <Menu></Menu>
      <Routes className="menu-style">
        <Route exact path="/" Component={About} />
        {/* <Route exact path="/" element={<About />} /> */}
        {/* <Route exact path="/" render={() => <About name="About" />} /> */}
        <Route exact path="/contact" Component={Contact} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/services/:category" element={<Services />} />
        <Route exact path="/search" element={<Search />} />
        {/* <Route exact path="/explore/:category" element={<Services />} /> */}
        {/* <Route exact path="/user" element={<User />} /> */}
        <Route exact path="/user/:name/:course" element={<User />} />
        {/* <Route element={Error} /> */}
        <Route path="/" />
      </Routes>
    </>
  );
};

export default App;
