// script.js

let num = 16; // make the grid default to 16x16

function resetGrid() { // make function resetGrid
  num = Number(prompt('Please enter a number >=1 and <=100 for the rows and columns of the new grid.'));// which prompts the user for a number between 1 and 100
  if (!((num >= 1) && (num <= 100))) { // if entry is not a number between 1 and 100
    alert('Please enter a number greater than or equal to 1 and less than or equal to 100.'); // alert that number needs to be between 1 and 100
  } else { // else
    while (container.firstChild) { // clear horiDivs and vertDivs
      container.removeChild(container.firstChild);
    };
    makeDivs(num);// call makeDivs function w/ user input as parameter
  }
}

const button = document.querySelector('button'); // select button

button.addEventListener("click", resetGrid); // add eventListener for click that runs a function

const container = document.querySelector('#container'); // store container div inside container variable

function makeDivs(num) { // make a function called makeDivs with num as a parameter
  for (let i = 0; i < num; i++) { // that runs num times
    let vertDiv = document.createElement('div'); // and makes a vert div each time
    vertDiv.classList.add('vert'); // add class vert to vertDiv
    for (let j = 0; j < num; j++) { //  within that div, run another loop num times
      let horiDiv = document.createElement('div'); //  that makes a horizontal div each time
      horiDiv.classList.add('hori'); // add class hori to horiDiv
      let black = 0; // initialize black variable
      horiDiv.addEventListener('mouseenter', () => { // add an eventListener for mouse entry that runs a function
        let red = Math.floor(Math.random() * 256); // make variable for random value for red color
        let green = Math.floor(Math.random() * 256); // make variable for random value for green color
        let blue = Math.floor(Math.random() * 256); // make variable for random value for blue color
        black += 25.5; // increase by 10% of 255 for each mouseenter event
        horiDiv.style.cssText = `background: rgb(${red - black}, ${green - black}, ${blue - black})`; // change div's color to random color, but 10% darker with each pass
      });
      vertDiv.appendChild(horiDiv); //  and appends those divs to the vert div
    }
    container.appendChild(vertDiv); // and appends that vert div to container
  }
}

makeDivs(num);