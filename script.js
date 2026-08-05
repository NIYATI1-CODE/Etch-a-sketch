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

  for (let i = 0; i < total; i++) {
    const square = document.createElement('div');
    square.classList.add("square");
    const size = 560 / no_square ;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;

    square.addEventListener('mouseover', () => {
      square.classList.add('change');
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

const reset =document.querySelector('.reset');
reset.addEventListener('click', ()=>
{
  grid(16);
})