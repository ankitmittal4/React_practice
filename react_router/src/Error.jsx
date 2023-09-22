import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <h1>404 Error, Page not Found</h1>
      <p>Sorry, This page don't exist</p>
      <NavLink to="/">Go Back</NavLink>
    </>
  );
};
export default Error;
