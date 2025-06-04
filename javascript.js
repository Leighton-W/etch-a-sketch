

let a = 2

for (let i = 0; i < a * a; i++){
    const gridBox = document.createElement("div");
    gridBox.textContent = "This is a box";
    gridBox.classList.add("grid-box");
    document.body.appendChild(gridBox);
}