const main = document.querySelector('.main');
let containers= [];
let squarePerSide=16;
let mode=1;


function checkAndRender(squarePerSide) {
    existingGrid=document.querySelector('.container');
    if(existingGrid){
        existingGrid.remove();
        renderGrid(squarePerSide);
    }
    else {
        renderGrid(squarePerSide);
    }
}

let colorPicker = document.querySelector('#color-picker-input');
let colorPicked = colorPicker.value;
colorPicker.addEventListener('input', ()=>{
    colorPicked = colorPicker.value;
})

let colorPickerText = document.querySelector('#color-picker-label');
colorPickerText.addEventListener('click', ()=> {
    mode = 1;
})
colorPicker.addEventListener('click', ()=> {
    mode = 1;
})

let eraser = document.querySelector('.eraser-symbol');
eraser.addEventListener('click', ()=> {
    mode = 0;
})
let eraserText = document.querySelector('#eraser-label');
eraserText.addEventListener('click', ()=> {
    mode = 0;
})


function renderGrid(squarePerSide){
    let container = document.createElement('div');
    container.classList.add('container');
    container.style.cssText = 'display:flex; flex-direction:column; width:512px; height:512px; gap:0px; flex-shrink:0; box-shadow: 0px 0px 6px'
    // container.style.gap = `${Math.sqrt(squarePerSide)}px`;

    for (let i = 0; i < squarePerSide; i++) {

        containers[i] = document.createElement('div');

        for (let j = 0; j < squarePerSide; j++) {
            let div = document.createElement('div');
            div.classList.add(`class-${i}${j}`);
            div.classList.add('grid-item');
            // div.textContent=`${i},${j}`;
            containers[i].appendChild(div);
            div.style.cssText = 'background:#eee; flex: 1 1 32px;'
        }

        container.appendChild(containers[i]);
        containers[i].style.cssText = `display:flex; flex: 1 1 32px; gap:0px;`
        // containers[i].style.gap = `${Math.sqrt(squarePerSide)}`;
    }
    main.prepend(container);

    const gridItems= document.querySelectorAll('.grid-item');

    let rstLabel=document.querySelector('#reset-label');

    rstLabel.addEventListener('click', ()=> {
        gridItems.forEach((item) => {
            item.style.background = '#eee';
            mode = 1;
        })
    })

    let rstSymbol=document.querySelector('.reset-symbol');

    rstSymbol.addEventListener('click', ()=> {
        gridItems.forEach((item) => {
            item.style.background = '#eee';
            mode = 1;
        })
    })

    let isDrawing= false;
    container.addEventListener('mousedown', ()=> {
        isDrawing = true;
    })
    
    gridItems.forEach((item) => {
        item.addEventListener('mousedown', () =>{
            if(mode==1){
                // item.style.transition = '0.3s ease'
                item.style.background = `${colorPicked}`;
                isDrawing = true;
            }
            else if(mode==0){
                item.style.background = '#eeeeee';
                isDrawing = true; 
            }
        })

        item.addEventListener('mousemove', () =>{
            if(mode==1){
                if(isDrawing) {
                    // item.style.transition = '0.3s ease'
                    item.style.background = `${colorPicked}`;
                }
            }
            else if(mode==0){
                if(isDrawing) {
                    // item.style.transition = '0.3s ease'
                    item.style.background = '#eeeeee';
                }
            }
          
        })

        item.addEventListener('mouseup', () =>{
            isDrawing = false; 
        })
    })
}
renderGrid(squarePerSide);

let btn=document.querySelector('#btn');
btn.addEventListener('click', ()=> {
    let squarePerSide=prompt("Enter number of squares per side for grid");
    checkAndRender(squarePerSide);
})

const gridItems= document.querySelectorAll('.grid-item');

let rstLabel=document.querySelector('#reset-label');

rstLabel.addEventListener('click', ()=> {
    gridItems.forEach((item) => {
        item.style.background = '#eee';
        mode = 1;
    })
})

let rstSymbol=document.querySelector('.reset-symbol');

rstSymbol.addEventListener('click', ()=> {
    gridItems.forEach((item) => {
        item.style.background = '#eee';
        mode = 1;
    })
})

