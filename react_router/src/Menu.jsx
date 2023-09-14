import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <NavLink exact to="/" activeclassname="active_class">
        About Us
      </NavLink>
      <NavLink exact to="/contact" activeclassname="active_class">
        Contact Us
      </NavLink>
      <br></br>
    </>
  );
};
export default Menu;
