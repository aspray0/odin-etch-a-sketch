// script.js

let num = 16;// make the grid default to 16x16

const container = document.querySelector('#container'); // store container div inside container variable

function makeDivs(num) { // make a function called makeDivs with num as a parameter
  for (let i = 0; i < num; i++) { // that runs num times
    let vertDiv = document.createElement('div');// and makes a vert div each time
    for (let j = 0; j < num; j++) { //  within that div, run another loop num times
      let horiDiv = document.createElement('div');//  that makes a horizontal div each time
      vertDiv.appendChild(horiDiv);//  and appends those divs to the vert div
    }
    container.appendChild(vertDiv);// and appends that div to container
  }
}