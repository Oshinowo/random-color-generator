var originalButton = document.getElementById('original-button');
var mysteryButton = document.getElementById('mystrey-button');

//random number function
function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

// color changing function
function colorChange() {
    var randomColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    event.target.style.backgroundColor = randomColor;
}

originalButton.onclick = colorChange;
mysteryButton.onmousemove = colorChange;