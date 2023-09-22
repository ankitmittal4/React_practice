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

      <NavLink
        exact="true"
        to="/services/machine Learning"
        activeclassname="active_class"
      >
        Services
      </NavLink>
      <br></br>
      <NavLink exact="true" to="/search" activeclassname="active_class">
        Search
      </NavLink>

      <br></br>

      <NavLink
        exact="true"
        to="/user/ankit/B.Tech"
        activeclassname="active_class"
      >
        User
      </NavLink>
      <br></br>
      {/* <NavLink exact="true" to="/error" activeclassname="active_class">
        Error
      </NavLink> */}
    </>
  );
};
export default Menu;
