import React from "react";
import { useParams } from "react-router-dom";
const Services = () => {
  const { category } = useParams();
  return (
    <>
      <h1>Hello, This is Services Page in {category}</h1>
    </>
  );
};
export default Services;
