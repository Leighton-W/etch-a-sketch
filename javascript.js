
const button = document.querySelector("#button");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset"
button.appendChild(resetButton);

const container = document.querySelector("#container");

function gridSettings(a){
    let gridBoxDimension = 480 / a;
    for (let i = 0; i < a * a; i++){
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridBox.style.width = `${gridBoxDimension}px`;
        gridBox.style.height = `${gridBoxDimension}px`;
        container.appendChild(gridBox);
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.background = "black";
        })
    }
}

gridSettings(16);


resetButton.addEventListener("click", () => {
    let b = prompt("Select a size (max 100)");
    b = parseInt(b);
    if (isNaN(b) || b <= 0 || b > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    container.innerHTML = "";
    gridSettings(b);
})