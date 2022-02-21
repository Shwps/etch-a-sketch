const container = document.querySelector(".container");

for (let i = 0; i < 16 ** 2; i++) {
  const div = document.createElement("div");
  div.classList.add("gridElement");
  div.setAttribute("style", "background:; width:auto; height:auto; ");
  div.addEventListener("mouseenter", () => div.classList.add("drawn"));
  container.appendChild(div);
}

const gridElements = document.querySelectorAll(".gridElement");
