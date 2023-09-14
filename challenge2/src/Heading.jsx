import React from 'react'

let cssStyle = {}
// const currTime = new Date().getHours();
const currTime = new Date(2023,8,4,12).getHours();
let greeting = "";
if(currTime >= 1 && currTime < 12){
  greeting = "Good Morning";
  cssStyle.color = 'green';
}
else if(currTime >= 12 && currTime < 19){
  greeting = "Good Afternoon";
  cssStyle.color = 'orange';
}
else{
  greeting = "Good Night";
  cssStyle.color = 'grey';
}


function Heading(){
    return (
    <div className='box'>
        <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>)   
}
export default Heading;