// Select color input

const colorPicker = document.getElementById('colorPicker')

// Select size input

const selectedWidth = document.getElementById('inputWidth').value;
const selectedHeight = document.getElementById('inputHeight').value;

//Target canvas

const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()

//Add event listener on submit 
document.getElementById('sizePicker').addEventListener('submit', function() {   
    event.preventDefault();
//Grabs the value of width and height
    let selectedWidth = document.getElementById('inputWidth').value;
    let selectedHeight = document.getElementById('inputHeight').value;
//Calls makeGrid() to create grid
    makeGrid(selectedWidth, selectedHeight);
//Calls function to add coloring 
    addColorPickertoBoxes();
  })



function makeGrid(height, width) {
  //By default, I want the grid to be empty 
        let grid = '';

        for (let i = 0; i < height; i++) {
            grid += '<tr class="row-' + i + '">';
            // loop for each box and add class to target to create coloring
            for (let j = 0; j < width; j++) {
                grid += '<td class="colorBox"></td>';
            }
            grid += '</tr>'   
      
    canvas.innerHTML = grid;
    
        }
        
    }

    function addColorPickertoBoxes() {
    //Grabs all the created boxes 
    const colorBoxes = document.getElementsByClassName('colorBox');
    for (let i = 0; i < colorBoxes.length; i++) {
        colorBoxes[i].addEventListener("click", function (event) {
            let selectedBox = event.target;
            selectedBox.style.backgroundColor = colorPicker.value;
        });
    }
    }

function startGame() {
makeGrid(15,15)
addColorPickertoBoxes()
}

startGame();



