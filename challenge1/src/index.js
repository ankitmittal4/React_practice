import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const todayDate = new Date().toLocaleDateString();
const todayTime = new Date().toLocaleTimeString();

let currDate = new Date();
let year = currDate.getFullYear();
let month = currDate.getMonth() + 1;
let date = currDate.getDate();
const fullDate = `${date} - ${month} - ${year}`;

const hours = currDate.getHours();
const min = currDate.getMinutes();
const sec = currDate.getSeconds();
const fullTime = `${hours} - ${min} - ${sec}`;

const img1 = "https://picsum.photos/300/300";
const img2 = "https://picsum.photos/301/300";
const img3 = "https://picsum.photos/299/300";
const link = "https://www.youtube.com/";
ReactDOM.render(
  //Challenfe 1
  // <>
  //   <h1>Ankit Mittal Netflix Pick</h1>
  //   <p>List of 5 Best Series</p>
  //   <ol>
  //       <li>Mirzapur</li>
  //       <li>Asur</li>
  //       <li>Paatal Lok</li>
  //       <li>Family Man</li>
  //       <li>Panchayat</li>
  //   </ol>
  // </>,

  //challenge 2
  <>
    <div>
      <h1 contentEditable className="text-center">
        My name is Ankit Mittal
      </h1>
      <br></br>
      <div className="text-center ">
        <button className="btn btn-outline-primary m-4">Submit</button>
      </div>
    </div>
    <img src={img1} alt="Image" />
    <img src={img2} alt="Image" />
    <a href={link} target="_blank">
      <img src={img3} alt="Image" />
    </a>
    <h1>Today's Date is : {todayDate}</h1>
    <h1>Current Time is : {todayTime}</h1>
  </>,

  document.getElementById("root")
);
