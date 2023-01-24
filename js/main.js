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
const spaceMan = document.querySelector('img')




  /*----- event listeners -----*/
letterEls.addEventListener('click', handleClick) 
answerBoxEls.addEventListener('click', handleClick)
hintClick.addEventListener('click', handleClick)
document.getElementById('letters').addEventListener('click', handleClick)
  /*----- functions -----*/
  



  function init () {
    secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)].split('');
    wrongGuesses = [];
    wordStatus = secretWord.map(ltr => ' _ ');
    gameStatus = null;
    render () 
  }

  init();


  function handleClick (evt) {
      const letter = evt.target.textContent
    if(gameStatus || evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter) || secretWord.includes(letter)) return;
    console.log(evt.target.textContent)
    if(secretWord.includes(letter)) {
       secretWord.forEach((char, idx) => {
        if(char === letter) wordStatus[idx] = letter
       } )
    } else {
        wrongGuesses.push(letter)
    }
    
    render();
  }
    





  function render () {
    answerBoxEls.textContent = wordStatus.join('')
    spaceMan.src = `img/spaceman-${wrongGuesses.length}.jpg`;
  }

  
//     renderAnswerBoxes()
//   }

//   function renderAnswerBoxes() {
//     let strsecretWord = secretWord.toString();
//     for (let i = 0; i < secretWord.length; i++) {
//         answerBoxEls.innerHTML = `<div id="answer-letter">hello</div>`
    
//         }
//     };

    
    

    

    

    

    
    


  
  
  