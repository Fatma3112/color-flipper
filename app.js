const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const butten = document.getElementById("btn");

butten.addEventListener( "click"  ,function() {

    let colorsBack = getRandomColor(); 
    document.body.style.backgroundColor = colors[colorsBack];
    color.textContent = colors[colorsBack];

})

function getRandomColor() {
    return Math.floor(Math.random() *colors.length);
}
