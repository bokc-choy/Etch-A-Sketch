const gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 16; i++){
    const grid = document.createElement("div");
    grid.className = "row";
    grid.textContent = "r";
    for(let j = 0; j < 16; j++){
        const subGrid = document.createElement("div");
        subGrid.className = "column";
        subGrid.textContent = "r";
        grid.append(subGrid);
    }
    gridContainer.append(grid);
}




