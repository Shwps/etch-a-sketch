const container = document.querySelector(".container");

const userInputSize = document.querySelector("#size").value;

const saveButton = document.querySelector(".save");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let gridSize = 16;

saveButton.addEventListener("click", () => updateGrid());

function updateGrid() {
  do {
    gridSize = prompt("What size?");
  } while (gridSize < 0 || gridSize > 100);
  establishGrid(gridSize);
}

function establishGrid(gridSize) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < gridSize ** 2; i++) {
    const gridElement = document.createElement("div");
    container.setAttribute(
      "style",
      `grid-template-columns: repeat(${gridSize}, 1fr);`
    );
    gridElement.classList.add("gridElement");
    gridElement.setAttribute("style", "background:; width:auto; height:auto; ");
    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown", changeColor);
    container.appendChild(gridElement);
  }
}


function changeColor (e) {
  if(e.type === "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = "black";

}

const gridElements = document.querySelectorAll(".gridElement");
