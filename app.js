const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const simpleBtn = document.getElementById('simple-btn');
const hexBtn = document.getElementById('hex-btn');
const colorDisplay = document.querySelector(".color");

simpleBtn.addEventListener('click', function() {
    const randomNumber = getRandomNumber(colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    colorDisplay.textContent = colors[randomNumber];
});

hexBtn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    document.body.style.backgroundColor = hexColor;
    colorDisplay.textContent = hexColor;
});

function getRandomNumber(max) {
    return Math.floor(Math.random() * max); // Generate a random index between 0 and max - 1
}
