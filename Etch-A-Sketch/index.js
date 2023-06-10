// set the default size to 16
const START_SIZE = 16
const START_COLOR = '#000000'


let grid = document.querySelector('#grid-container')
let resetBtn = document.querySelector('#reset')
let sizeDisplay = document.querySelector('#size-display')
let sizeSlider = document.getElementById('size')
let size = sizeSlider.value
let colorPicker = document.querySelector('#color-picker')
let color = START_COLOR

resetBtn.addEventListener('click', reset)
sizeSlider.addEventListener('input', (e) => {
    updateSize(e.target.value)
})

colorPicker.addEventListener('input', (e) => {
    updateColor(e.target.value)
})

function updateColor(newColor){
    color = newColor
    console.log(color)
}

function changeColor(e){
        e.target.style.background = `${color}`
}

function updateSize(size){
    console.log(size)
    grid.innerHTML = ''
    generateGrid(size)
    sizeDisplay.innerHTML = `${size} x ${size}`
}

function generateGrid(size){    
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
           let cell = document.createElement('div')
            cell.classList.add('cell')
            cell.addEventListener('mousedown', changeColor)
            cell.addEventListener('mouseover', changeColor)
            grid.appendChild(cell)
        }
    }
}

function reset(){
    grid.innerHTML = ''
    size = START_SIZE
    sizeDisplay.innerHTML = `${START_SIZE} x ${START_SIZE}`
    sizeSlider.value = START_SIZE
    generateGrid(size)
}

window.onload = () =>{
    reset()
}