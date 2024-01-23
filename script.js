const gridContainer = document.querySelector(".gridContainer");
const resizebtn = document.querySelector(".resizebtn");
const clearbtn = document.querySelector(".clearbtn");
let size;

let mouseDown = false;
document.addEventListener('mousedown', function(){mouseDown = true;
console.log(mouseDown)})
document.addEventListener('mouseup', function(){mouseDown = false;
console.log(mouseDown)})

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
            subGrid.addEventListener('mousedown', function(){
                    console.log("color");
                    subGrid.style.backgroundColor = "black";
            });
            subGrid.addEventListener('mouseover', function(){
                if(mouseDown == true){
                    console.log("color");
                    subGrid.style.backgroundColor = "black";
                }
            });
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
    size = prompt('enter grid size (max 100)')
    if(size >= 100){

    }
    else{
    createGrid(size);
    }
})

clearbtn.addEventListener('click', function(){
    removeGrid();
    createGrid(size);
})




