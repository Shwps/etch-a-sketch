const drawSurface = document.querySelector(".drawSurface");

const changeSize = document.querySelector(".changeSize");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let gridSize = 16;

changeSize.addEventListener("click", () => updateGrid());

function updateGrid() {
  do {
    gridSize = prompt("What size?");
  } while (gridSize < 1 || gridSize > 100);
  establishGrid(gridSize);
}

function establishGrid(gridSize) {
  while (drawSurface.firstChild) {
    drawSurface.removeChild(drawSurface.firstChild);
  }
  for (let i = 0; i < gridSize ** 2; i++) {
    const gridElement = document.createElement("div");
    drawSurface.setAttribute(
      "style",
      `grid-template-columns: repeat(${gridSize}, 1fr);`
    );
    gridElement.classList.add("gridElement");
    gridElement.setAttribute("style", "background:; width:auto; height:auto; ");
    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown", changeColor);
    drawSurface.appendChild(gridElement);
  }
}


function changeColor (e) {
  if(e.type === "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = "black";

}

const gridElements = document.querySelectorAll(".gridElement");

window.onload = () => {
  establishGrid(16);
}