 /*----- constants -----*/


const WORD_BANK = ['ATMOSPHERE','ELECTROMAGNETIC', 'GALAXY', 'UNIVERSE', 'GRAVITY', 'NEBULA', 'SPACECRAFT', 'SUPERNOVA', 'EXOPLANET', 'GAMMARAY'];
const HINTS = ['The gases held by gravity around Earth and around other planets.', 'relating to the interrelation of electric currents or fields and magnetic fields.', 'A collection of thousands to billions of stars held together by gravity.', '4', '5', '6', '7', '8', '9', '10'];
 /*----- constants -----*/

  /*----- state variables -----*/
let winningWord;
let numberLives;
let wrongGuesses;
let secretWord;
let gameStatus;
let gameHint;
  
  /*----- cached elements  -----*/
const letterEls = document.getElementById('letters');
const answerBoxEls = document.getElementById('answer-spaces');
const hintButton = document.getElementById('hint-btn');
const spaceMan = document.querySelector('img');
const numLiveEl = document.getElementById("numberLives");
const message = document.querySelector('.msg');
const playButton = document.querySelector('.notify-btn');
// const letterStyle = document.querySelectorAll('#letters' > 'button');


  /*----- event listeners -----*/
letterEls.addEventListener('click', handleClick) 
answerBoxEls.addEventListener('click', handleClick)
hintButton.addEventListener('click', handleHint)
document.getElementById('letters').addEventListener('click', handleClick)
playButton.addEventListener('click', init)
  /*----- functions -----*/
  
function init() {
    let idx = Math.floor(Math.random() * WORD_BANK.length);
    secretWord = WORD_BANK[idx].split('');
    gameHint = HINTS[idx];
    wrongGuesses = [];
    wordStatus = secretWord.map(ltr => ' _ ');
    gameStatus = null;
    numberLives = 6;
    document.getElementById('hint').textContent = "";
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
        message.textContent = "Unfortunately, this isn't your day, we're so sorry, but prepare to board spacecraft for return to earth."
    } else if(gameStatus === "W") {
        message.textContent = "STELLAR, you've conquered the galaxy and have been crowned by Elon Musk as Supreme leader of Mars!"
    } else {
        message.textContent = ""
    }
}

function handleHint() {
    document.getElementById('hint').textContent = gameHint;

}

// function renderButtonStyle() {
//     letterStyle.forEach()
// }













