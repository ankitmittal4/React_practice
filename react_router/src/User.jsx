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
      <p>My current location is {location.pathname}</p>
      {/* {if(location.pathname === `/users/anshu/Bsc`){
        <button>Submit</button>
      }} */}

      {location.pathname === `/users/ankit/dee` ? (
        <>
          alert("You are awesome");
          <h1>Button</h1>
          <button onClick={() => alert("You are awesome")}>Submit</button>
        </>
      ) : null}
    </>
  );
};
export default User;
