const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const color = document.querySelector(".color");
const button = document.getElementById("btn");

function randomColor() {
    return Math.floor(Math.random() * hex.length);
}

button.addEventListener("click", function() {
    let hexVal = "#";
    for(let i =0; i<6; i++){
        hexVal += hex[randomColor()];
    }

    document.body.style.backgroundColor = hexVal;
    color.textContent = hexVal;
})
