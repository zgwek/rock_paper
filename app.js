const compPickDisplay = document.getElementById('computer-pick')
const userPickDisplay = document.getElementById('user-pick')
const resultDisplay = document.getElementById('result-display')
const allPicks = document.querySelectorAll('button')
let userPick 
let compPick
let result
allPicks.forEach(allPicks => allPicks.addEventListener('click', (e) => {
   userPick = e.target.id
   userPickDisplay.innerHTML = userPick
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice() {
    const randNum = Math.floor(Math.random() * allPicks.length)
    compPick = allPicks[randNum].id
    compPickDisplay.innerHTML = compPick
    // if (randNum === 1 ){
    //     compPick = 'rock'
    // }
    // if (randNum === 2 ){
    //     compPick = 'paper'
    // }
    // if (randNum === 3 ){
    //     compPick = 'scissors'
    // }
    
}

function getResult() {

    if (compPick === userPick ){
        result = 'draw'
    }
    else if (compPick === 'rock' && userPick === 'scissors'){
        result = 'Computer Wins';
    }else if (compPick === 'scissors' && userPick === 'paper'){
        result = 'Computer Wins';
    }else if (compPick === 'paper' && userPick === 'rock'){
        result = 'Computer Wins';
    } else {
        result = 'User Wins'
    }
    resultDisplay.innerHTML = result;
}

