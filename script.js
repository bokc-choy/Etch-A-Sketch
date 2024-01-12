const gridContainer = document.querySelector(".gridContainer");
const resizebtn = document.querySelector(".resizebtn");

function createGrid(size){
    for(let i = 0; i < size; i++){
        const grid = document.createElement("div");
        grid.className = "row";
        for(let j = 0; j < size; j++){
            const subGrid = document.createElement("div");
            subGrid.className = "column";
            subGrid.style.width = (1/size)*650 + 'px';
            subGrid.style.height = (1/size)*650 + 'px';
            subGrid.style.borderWidth = (1/size)*2 + 'px';
            subGrid.addEventListener('mouseover', function(){
                subGrid.style.backgroundColor = "black";
            })
            grid.append(subGrid);
        }
        gridContainer.append(grid);
    }
}

function removeGrid(){
    let child = gridContainer.lastElementChild;
    while(child){
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;

    }

}

resizebtn.addEventListener('click', function(){
    removeGrid();
    let size = prompt('enter grid size (max 100)')
    if(size >= 100){

    }
    else{
    createGrid(size);
    }
})




