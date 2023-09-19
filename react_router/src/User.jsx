import React from "react";
import { useParams, useLocation } from "react-router-dom";
// const User = ({ match }) => {
//   return (
//     <>
//       <h1>Hello, This is User Page {match.params.name}</h1>
//     </>
//   );
// };
const User = () => {
  const { name, course } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>
        Hello, This is User Page {name} {course}
      </h1>
    </>
  );
};
export default User;
