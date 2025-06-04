

let a = 4

for (let i = 0; i < a * a; i++){
    const container = document.querySelector("#container");
    const gridBox = document.createElement("div");
    gridBox.textContent = "Box";
    gridBox.classList.add("grid-box");
    container.appendChild(gridBox);
}

