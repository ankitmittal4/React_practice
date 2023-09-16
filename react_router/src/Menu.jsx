import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <NavLink exact="true" to="/" activeclassname="active_class">
        About Us
      </NavLink>
      <br></br>
      <NavLink exact="true" to="/contact" activeclassname="active_class">
        Contact Us
      </NavLink>
      <br></br>
      <NavLink exact="true" to="/services" activeclassname="active_class">
        Services
      </NavLink>
      <br></br>
      <NavLink exact="true" to="/user" activeclassname="active_class">
        User
      </NavLink>
      <br></br>
    </>
  );
};
export default Menu;
