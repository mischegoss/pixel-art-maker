// Select color input

const colorPicker = document.getElementById('colorPicker')

// Select size input

const selectedWidth = document.getElementById('inputWidth').value;
const selectedHeight = document.getElementById('inputHeight').value;

//Target canvas

const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()


document.getElementById('sizePicker').addEventListener('submit', function() {
    // prevent page refresh on submit
    event.preventDefault();

    // get input data and draw grid
    let selectedWidth = document.getElementById('inputWidth').value;
    let selectedHeight = document.getElementById('inputHeight').value;
    makeGrid(selectedWidth, selectedHeight);
  })


    function makeGrid(height, width) {
      
        let grid = '';
    
        // loop over each row
        for (let i = 0; i < height; i++) {
            grid += '<tr class="row-' + i + '">';
            // loop for each cell
            for (let j = 0; j < width; j++) {
                grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
            }
            grid += '</tr>';
        }
        // add grid into table element
        canvas.innerHTML = grid;
    
        // Add click event to grid cells once the table grid has been created
        //addClickEventToCells();
    }



makeGrid(15,15)




