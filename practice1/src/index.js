// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
// import fName,{lName, greet} from './App'; 
// import * as name from './App'; 

// import {add, sub, multi, div} from './Calc'
import App from './App'

// const fName = 'Ankit';
// const lName = 'Mittal';

// const heading = {
//     color: '#fa9191',
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     margin: "60px 0",
//     fontWeight: 'bold',
//     textShadow: '1px 1px 3px #000',
//     fontFamily: "'Roboto', sans-serif",
//   }
// ReactDOM.render('What do you want to show', 'where to show', 'callback func');

let num1 = 15;
let num2 = 5;
ReactDOM.render(<App/>,


    // <>
    //     <ul>
    //         <li>{fName}</li>
    //         <li>{lName}</li>
    //         <li>{greet()}</li>
    //         {/* <li>{name.default}</li>
    //         <li>{name.lName}</li>
    //         <li>{name.greet()}</li> */}
    //     </ul>
    // </>,
    // <>
    //     <h1 style={heading}>Hello Ankit Mittal</h1>
    //     <div className='img-div'>
    //         <img src='https://picsum.photos/200/300' alt='image'/>
    //         <img src='https://picsum.photos/300/300' alt='image'/>
    //         <img src='https://picsum.photos/400/300' alt='image'/>
    //     </div>
    // </>,
    // <>
    //     <h1>{`Hello my name is ${fName} ${lName}`}</h1>
    //     <h1>{`Sum of 3 and 7 is ${3+7}`}</h1>
    // </>,
    // [
    //     <h1> Hello Ankit </h1>,
    //     <p>React Tutorial</p>,
    //     <h2>React by Thapa</h2>
    // ],
    // <div>
    //     <h1>Hello Ankit Mittal</h1>
    //     <h1>This is React</h1>
    // </div>,
    // <React.Fragment>
    //     <h1>Hello Ankit Mittal</h1>
    //     <h1>This is React</h1>
    //     <h1>This is React</h1>
    //     <h1>This is React</h1>
    //     <h1>This is React</h1>
    // </React.Fragment>,
    // <>
    //     <h1>Ankit Mittal Netflix Pick</h1>
    //     <p>List of 5 Best Series</p>
    //     <ol>
    //         <li>Mirzapur</li>
    //         <li>Asur</li>
    //         <li>Paatal Lok</li>
    //         <li>Family Man</li>
    //         <li>Panchayat</li>
    //     </ol>
    // </>,
    document.getElementById('root'));



// Babel converts above code in this format :
// import { jsx as _jsx } from "react/jsx-runtime";
// ReactDOM.render(_jsx("h1", {
//   children: "  Ankit "
// }), document.getElementById('root'));

// var h1 = document.createElement('h1');
// h1.innerHTML = "Ankit Mittal";
// document.getElementById('root').appendChild(h1);
