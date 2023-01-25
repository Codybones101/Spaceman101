 /*----- constants -----*/


const WORD_BANK = ['APPLE','STONE', 'CIRCLE', 'BACON', 'POINT', 'HOUSE', 'GROOM', 'SHOE', 'BREAD', 'ACORN'];

 /*----- constants -----*/

  /*----- state variables -----*/
let winningWord;
let numberLives;
let wrongGuesses;
let secretWord;
let gameStatus;
  
  /*----- cached elements  -----*/
const letterEls = document.getElementById('letters');
const answerBoxEls = document.getElementById('answer-spaces');
const hintClick = document.getElementById('hint-btn');
const spaceMan = document.querySelector('img');
const numLiveEl = document.getElementById("numberLives");
const message = document.querySelector('.msg');
const playButton = document.querySelector('.notify-btn');


  /*----- event listeners -----*/
letterEls.addEventListener('click', handleClick) 
answerBoxEls.addEventListener('click', handleClick)
hintClick.addEventListener('click', handleClick)
document.getElementById('letters').addEventListener('click', handleClick)
playButton.addEventListener('click', init)
  /*----- functions -----*/
  
function init() {
    secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)].split('');
    wrongGuesses = [];
    wordStatus = secretWord.map(ltr => ' _ ');
    gameStatus = null;
    numberLives = 4;
    render();
}

init();


function handleClick (evt) {
    const letter = evt.target.textContent
    if(gameStatus || evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter) || wordStatus.includes(letter)) return;
 
    if(secretWord.includes(letter)) {
        secretWord.forEach((char, idx) => {
            if(char === letter) wordStatus[idx] = letter
        })
        if(wordStatus.join('') === secretWord.join('')) {
            gameStatus = "W"
        }
    } else {
        wrongGuesses.push(letter);
        if (numberLives > 0) {
            numberLives = numberLives -1;
        } 
        if (numberLives === 0) {
            gameStatus = "L"
        } 
    }
    render();
}

function renderLivesLeft () {
    numLiveEl.textContent = `Lives remaining: ${numberLives}`;
}

function renderMan() {
    answerBoxEls.textContent = wordStatus.join('')
    spaceMan.src = `img/spaceman-${wrongGuesses.length}.jpg`;
    renderLivesLeft();
}

function render() {
    renderMan()
    renderMessage()
}


function renderMessage() {
    if (gameStatus === "L") {
        message.textContent = "You Loss!"
    } else if(gameStatus === "W") {
        message.textContent = "You win!"
    } else {
        message.textContent = ""
    }
}













