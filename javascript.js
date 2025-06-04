

let a = 4

for (let i = 0; i < a * a; i++){
    const gridBox = document.createElement("div");
    gridBox.textContent = "This is a box";
    gridBox.setAttribute("style", "color: blue", "border: dotted");
    document.body.appendChild(gridBox);

}