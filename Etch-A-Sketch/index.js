// set the default size to 16
const START_SIZE = 16
const START_COLOR = '#000000'


let grid = document.querySelector('#grid-container')
let createBtn = document.querySelector('#create')
let resetBtn = document.querySelector('#reset')
let sizeDisplay = document.querySelector('#size-display')
let sizeSlider = document.getElementById('size')
let size = sizeSlider.value
let colorPicker = document.querySelector('#color-picker')
let color = START_COLOR

createBtn.addEventListener('click', generateGrid(size))
resetBtn.addEventListener('click', reset)
sizeSlider.addEventListener('input', (e) => {
    updateSize(e.target.value)
})
colorPicker.addEventListener('input', (e) => {
    updateColor(e.target.value)
})


updateSize(size)

function updateColor(newColor){
    color = colorPicker.value
    console.log(color)
}

function changeColor(e){
        e.target.style.background = `${color}`
}

function eraser(e){
    if (e.type === 'mouseover' && !mouseDown) return
    else
        e.target.style.background = 'white'
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
    size = START_SIZE
    grid.innerHTML = ''
    generateGrid(size)
    sizeDisplay.innerHTML = `${START_SIZE} x ${START_SIZE}`
}