import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
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
  const history = useHistory();
  console.log(history);
  return (
    <>
      <h1>
        Hello, This is User Page {name} {course}
      </h1>
      <p>My current location is {location.pathname}</p>
      {/* {if(location.pathname === `/users/anshu/Bsc`){
        <button>Submit</button>
      }} */}

      {location.pathname === `/user/ankit/dee` ? (
        <>
          <button onClick={() => history.goBack()}>Submit</button>
        </>
      ) : null}
    </>
  );
};
export default User;
