const gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 16; i++){
    const grid = document.createElement("div");
    grid.className = "row";
    for(let j = 0; j < 16; j++){
        const subGrid = document.createElement("div");
        subGrid.className = "column";
        subGrid.addEventListener('mouseover', function(){
            subGrid.style.backgroundColor = "red";
        })
        subGrid.addEventListener('mouseout', function(){
            subGrid.style.backgroundColor = "grey";
        })
        grid.append(subGrid);
    }
    gridContainer.append(grid);
}






