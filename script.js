const gridContainer = document.querySelector(".gridContainer");
const resizebtn = document.querySelector(".resizebtn")

function createGrid(size){
    for(let i = 0; i < size; i++){
        const grid = document.createElement("div");
        grid.className = "row";
        for(let j = 0; j < size; j++){
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
}

resizebtn.addEventListener('click', function(){
    let size = prompt('enter size')
    createGrid(size);
})




