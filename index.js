//const new = require('./test');

//console.log(new.hello());
//cohsole,log(new.bye());

//import { square, diag } from "./test";
//import * as myModul from '.test';
//console.log(square(11));
//console.log(diag(4, 3));

//import one from '.test';
//one();


const colorPalette = document.querySelector('.color-palette'); 
const output = document.querySelector('.output'); 
 
colorPalette.addEventListener("click", selectColor); 
 
function selectColor(e) { 
    if (e.target.nodeName !== "BUTTON") { 
        return; 
    } 
    const selectedColor = e.target.dataset.color; 
    output.textContent = `Selected color: ${selectedColor}`
    output.style.color = selectedColor; 
} 
createPaletteItems(); 
function createPaletteItems() { 
    const items = []; 
    for (let i = 0; i < 100; i++){ 
        const color = getRandomColor(); 
        const item = document.createElement('button'); 
        item.type = 'button'; 
        item.dataset.color = color; 
        item.style.backgroundColor = color; 
        item.classList.add('item'); 
        items.push(item); 
    } 
    colorPalette.append(...items); 
} 
 
function getRandomColor() { 
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`; 
} 
function getRandomHex() { 
    return Math.round(Math.random()*256).toString(16).padStart(2, '0') 
}

