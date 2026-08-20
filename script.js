const container = document.querySelector('.container');
grid(16);
function grid(no_square) {
  container.innerHTML = "";
  let total;
  if (no_square <= 100) {
    if (!no_square) {
      total = 256;
    }
    else {
      total = no_square * no_square;
    }
  }
  else {
    alert('Invalid number. Enter less than 100');
    return;
  }


  let color;
  const color_picker = document.querySelector('#color_picker');
  let random_click = false;
  const random_color = document.querySelector('.random');


  color_picker.addEventListener('change', () => {
    color = color_picker.value;
    random_click = false;
  })

  random_color.addEventListener('click', () => {
    random_click = true;
  });

  function randomcolor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    color = `rgb(${red},${green},${blue})`;
  }
  let isdrawing = false;

  for (let i = 0; i < total; i++) {
    const square = document.createElement('div');
    square.classList.add("square");
    const size = 560 / no_square;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    let count = 0;
    
    square.addEventListener('mousedown', () => {
      isdrawing = true;
    }
    )

    document.addEventListener('mouseup', () => {
      isdrawing = false;
    })

    square.addEventListener('mousemove', () => {
      if (isdrawing) {
        square.classList.add('change');
        if (random_click) {
          randomcolor();
        }
        square.style.backgroundColor = color;
        count++;
        if (count <= 10) {
          square.style.opacity = (count * 10) / 100;
        }
      }

    }
    )
    container.appendChild(square);
  }
}

const new_grid = document.querySelector('.new_grid');
new_grid.addEventListener('click', () => {
  let result = prompt('Enter new number of square per side(less than 100):', '18');
  grid(result);
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  grid(16);
})



