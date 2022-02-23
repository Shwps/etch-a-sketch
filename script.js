const container = document.querySelector(".container");

const userInputSize = document.querySelector("#size").value;

const saveButton = document.querySelector(".save");

saveButton.addEventListener("click", () => updateGrid());

function updateGrid (){
  let gridSize = prompt("What size?");
  establishGrid(gridSize);
}


function establishGrid (gridSize){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement("div");
    container.setAttribute("style", `grid-template-columns: repeat(${gridSize}, 1fr);`)
    div.classList.add("gridElement");
    div.setAttribute("style", "background:; width:auto; height:auto; ");
    div.addEventListener("click", () => div.classList.add("drawn"));
    container.appendChild(div);
  }
}


const gridElements = document.querySelectorAll(".gridElement");


