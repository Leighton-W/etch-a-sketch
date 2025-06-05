
const button = document.querySelector("#button");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset"
button.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    alert("Button Pressed");
})



let a = 16;
let gridBoxDimension = 480 / a;

for (let i = 0; i < a * a; i++){
    const container = document.querySelector("#container");
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridBox.style.width = `${gridBoxDimension}px`;
    gridBox.style.height = `${gridBoxDimension}px`;
    container.appendChild(gridBox);
    gridBox.addEventListener("mouseover", () => {
        gridBox.style.background = "black";
    })
}