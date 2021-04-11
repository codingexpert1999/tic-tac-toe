// DOM Elements
const grid = document.getElementById("grid");

// Game Variables
const gridBoxBorders = [
    "box border-r",
    "box border-r",
    "box",
    "box border-t border-r",
    "box border-t border-r",
    "box border-t",
    "box border-t border-r",
    "box border-t border-r",
    "box border-t"
];

// Functions
const initializeGrid = () => {
    gridBoxBorders.forEach((border, i) => {
        grid.innerHTML += `
            <div class="${border}" id="box-${i}">
                <span></span>
            </div>
        `
    });
}

const resetGridValues = () => {
    document.querySelectorAll(".box span").forEach(span => {
        span.innerText = "";
        span.classList.remove("dark-blue-text");
    })
}

initializeGrid()