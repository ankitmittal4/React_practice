// let fName = 'Ankit';
// let lName = 'Mittal';
// function greet(){
//     const greeting = "Good Morning";
//     return greeting;
// }
// export default fName;
// export {lName, greet};

import React from "react";
import Button from "@mui/material/Button";
import { add, sub, multi, div } from "./Calc";
import "C:/Users/WanaDO/Desktop/react/practice/node_modules/bootstrap/dist/css/bootstrap.min.css";
let num1 = 15;
let num2 = 5;
function App() {
  return (
    <>
      <h1 className="m-4 text-center secondary text-uppercase">
        This is My website
      </h1>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/301/300"
                class="card-img-top"
                alt=""
                height="250px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/100/100"
                class="card-img-top"
                alt=""
                height="250px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/100/101"
                class="card-img-top"
                alt=""
                height="250px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Button variant="outlined">Submit</Button>
      <button className="btn btn-success">Ankit</button>
      <h1 className="mt-5 text-center text-bg-secondary text-uppercase">
        The sum of {num1} and {num2} is : {add(num1, num2)}
      </h1> */}
      {/* <h1>The subtraction of {num1} and {num2} Numbers is : {sub(num1,num2)}</h1>
            <h1>The Multiplication of {num1} and {num2} Numbers is : {multi(num1,num2)}</h1>
            <h1>The Division of {num1} and {num2} Numbers is : {div(num1, num2)}</h1> */}
    </>
  );
}
export default App;
