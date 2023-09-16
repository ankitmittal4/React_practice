import React from "react";
import { useParams } from "react-router-dom";
// const User = ({ match }) => {
//   return (
//     <>
//       <h1>Hello, This is User Page {match.params.name}</h1>
//     </>
//   );
// };
const User = () => {
  const { name, course } = useParams();
  return (
    <>
      <h1>
        Hello, This is User Page {name} {course}
      </h1>
    </>
  );
};
export default User;
