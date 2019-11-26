var choices = document.getElementsByClassName("choices");
var rock = 'images/rps.png';
var paper = 'images/paper.png';
var scissors = 'images/scissors.png';
var computerChoices = ["rock", "paper", "scissors"];
var result = document.getElementById('result');

function play(i) {
    var userChoice = i.target.id;
    var imgUserChoice = i.target.src;
    var computerChoice = getComputerChoice();
    showUserChoice(imgUserChoice);
    showCChoice(computerChoice);
    var winner = determineWinner(userChoice, computerChoice)
    showWinner(winner)
}

function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * computerChoices.length));
    var choice = computerChoices[randomNumber];
    return choice; 
}


for(var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", play);
}

function showUserChoice(c) {
    document.getElementById('userChoice').src = c
}

function showCChoice(i) {
    if (i === 'rock') {
        document.getElementById('computerChoice').src = rock;
    } else if (i === 'paper') {
        document.getElementById('computerChoice').src = paper;
    } else if (i === 'scissors') {
        document.getElementById('computerChoice').src = scissors;
    }
}

function determineWinner(u, c) {
    if (u === c) {
        return "draw"
    } else if (u === 'rock') {
        if (c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (u === 'paper') {
        if (c === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (u === 'scissors') {
        if (c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(w) {
    if (w === 'player') {
        result.innerHTML = 'You Win!'
    } else if (w === 'computer') {
        result.innerHTML = 'You Lose!'
    } else if (w === 'draw') {
        result.innerHTML = "It's a tie!"
    }
}


// var colors = ["red", "blue", "green", "purple", "orange"];
// var btn = document.getElementById('btn');

// btn.addEventListener("click", changeColor);

// function changeColor() {
//   document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
// };