// script.js

let num = 16; // make the grid default to 16x16

const container = document.querySelector('#container'); // store container div inside container variable

function makeDivs(num) { // make a function called makeDivs with num as a parameter
  for (let i = 0; i < num; i++) { // that runs num times
    let vertDiv = document.createElement('div'); // and makes a vert div each time
    vertDiv.classList.add('vert'); // add class vert to vertDiv
    for (let j = 0; j < num; j++) { //  within that div, run another loop num times
      let horiDiv = document.createElement('div'); //  that makes a horizontal div each time
      horiDiv.classList.add('hori'); // add class hori to horiDiv
      horiDiv.addEventListener('mouseenter', () => { // add an eventListener for mouse entry that runs a function
        horiDiv.style.cssText = 'background: black;';// that changes that div's bg color to black
      });
      vertDiv.appendChild(horiDiv); //  and appends those divs to the vert div
    }
    container.appendChild(vertDiv); // and appends that div to container
  }
}


makeDivs(num);