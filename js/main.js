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
    console.log(evt.target)
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

    
    

    

    

    

    
    


  
  
  