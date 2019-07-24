const originalButton = document.getElementById('original-button');
const mysteryButton = document.getElementById('mystery-button');

//random number function
function rgb(num) {
    return Math.floor(Math.round() * num);
}

// color changing function
function colorChange() {
    const randomColor = "rgb(" + rgb(255) + "," + rgb(255) + "," + rgb(255) + ")";
    event.target.style.backgroundColor = randomColor;
}