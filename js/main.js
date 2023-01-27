
const WORD_BANK = ['ATMOSPHERE','ELECTROMAGNETIC', 'GALAXY', 'UNIVERSE', 'GRAVITY', 'NEBULA', 'SPACECRAFT', 'SUPERNOVA', 'EXOPLANET', 'GAMMARAY'];
const HINTS = ['The gases held by gravity around Earth and around other planets.', 'Relating to the interrelation of electric currents or fields and magnetic fields.', 'A collection of thousands to billions of stars held together by gravity.', 'All existing matter and space considered as a whole; the cosmos.', 'The force that attracts a body toward the center of the earth, or toward any other physical body having mass.', 'A cloud of gas and dust in outer space, visible in the night sky either as an indistinct bright patch or as a dark silhouette against other luminous matter.', 'A vehicle used for traveling in space.', 'A star that suddenly increases greatly in brightness because of a catastrophic explosion that ejects most of its mass.', 'Any planet beyond our solar system. Most orbit other stars, but free-floating exoplanets, called rogue planets, orbit the galactic center and are untethered to any star.', 'Electromagnetic radiation of the shortest wavelength and highest energy.'];

let winningWord;
let numberLives;
let wrongGuesses;
let secretWord;
let gameStatus;
let gameHint;
  
const audio = document.getElementById("song"); 
const letterEls = document.getElementById('letters');
const answerBoxEls = document.getElementById('answer-spaces');
const hintButton = document.getElementById('hint-btn');
const spaceMan = document.querySelector('img');
const numLiveEl = document.getElementById("numberLives");
const message = document.querySelector('.msg');
const playButton = document.querySelector('.notify-btn');
const buttonColor = document.querySelectorAll('.wrapper > #letters > button');

song.volume = 0.1

letterEls.addEventListener('click', handleClick) 
answerBoxEls.addEventListener('click', handleClick)
hintButton.addEventListener('click', handleHint)
document.getElementById('letters').addEventListener('click', handleClick)
playButton.addEventListener('click', init)

function init() {
    audio.play();
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

function renderMessage() {
    if (gameStatus === "L") {
        message.textContent = "Unfortunately, this isn't your day, we're so sorry, but prepare to board spacecraft for return to earth."
    } else if(gameStatus === "W") {
        message.textContent = "STELLAR, you've conquered the galaxy and have been crowned Supreme Leader of Mars by Elon Musk personally!"
    } else {
        message.textContent = ""
    }
}

function handleHint() {
    document.getElementById('hint').textContent = gameHint;
}

function renderButtonStyle() {
    letterStyle.forEach()
}

function renderButtonStyle() {
    buttonColor.forEach(function(btn) {
      const letter = btn.textContent;
      if (wrongGuesses.includes(letter)) {
        btn.className = 'Incorrect';
      } else if (wordStatus.includes(letter)) {
        btn.className = 'Correct';
      } else {
        btn.className = ''
      }
    });
  }

  function render() {
    renderMan();
    renderMessage();
    renderButtonStyle(); 
}











