const container = document.querySelector('#container')
const gridBox = document.querySelector('.grid-box')
let cell = [];
const cells = document.querySelector('cell')
const btn = document.querySelector('.clear-grid')
const selectColor = document.querySelector('.select-color')




buildGrid = (size) => {
    gridBox.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
    gridBox.style.gridTemplateRows = (`repeat(${size}, 1fr)`);
    let addNewCells = size * size;
    for (i = 0; i < addNewCells; i++){
        cell[i] = document.createElement('div');
        cell[i].classList.add('cell');
        gridBox.appendChild(cell[i])
        filler()
        
        
    }
} 



reset = () => {
    while(gridBox.firstChild) {
        gridBox.removeChild(gridBox.firstChild)
    }

}


filler = () => {cell[i].addEventListener('mouseover', function(e){
        e.target.style.background = `rgb(${color()},${color()},${color()})`
})}

colorFiller = () => { cell[i].addEventListener('mouseover', function(e){
e.target.style.background = `${selectColor.value}`;
})}


       

getNewSize = () => {
    size = prompt('What size do you want the new canvas? (Please input a number between 1-100)')
    while(size > 100 || size == '') {
    alert('Please select a value between 1-100')
    size = prompt('New Size?')
    }
    return parseInt(size)
    }




    color = () => {
    return Math.floor((Math.random() * 255))
}

btn.addEventListener('click', function getAnswer (){
    reset()
    getNewSize()
    buildGrid(size)

})

buildGrid(16);