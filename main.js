var originalButton = document.getElementById('original-button');
var mysteryButton = document.getElementById('mystery-button');

//random number function
function randomNumber(num) {
    return Math.floor(Math.round() * num);
}

// color changing function
function colorChange(event) {
    var randomColor = "rgb(" + randomNumber(255) + "," + randomNumber(255) + "," + randomNumber(255) + ")";
    Event.target.style.backgroundColor = randomColor;
}

originalButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;