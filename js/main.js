 /*----- constants -----*/


const WORD_BANK = ['APPLE','STONE', 'CIRCLE', 'BACON', 'POINT', 'HOUSE', 'GROOM', 'SHOE', 'BREAD', 'ACORN'];







 /*----- constants -----*/


 


 



  /*----- state variables -----*/
  let winningWord;
  let numberLives;
  let wrongGuesses;
  let secretWord;
    
  
    




  /*----- cached elements  -----*/
const letterEls = document.getElementById('letters');
const answerBoxEls = document.getElementById('answer-spaces');
const hintClick = document.getElementById('hint-btn');



  /*----- event listeners -----*/
letterEls.addEventListener('click', handleClick) 
answerBoxEls.addEventListener('click', handleClick)
hintClick.addEventListener('click', handleClick)

  /*----- functions -----*/
  



  function init () {
    secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
    render () 
  }

  init();


  function handleClick (evt) {
    console.log('OH YEAH')
  }

  function render () {
    renderAnswerBoxes()
  }

  function renderAnswerBoxes() {
    let strsecretWord = secretWord.toString();
    for (let i = 0; i < secretWord.length; i++) {
        answerBoxEls.innerHTML = `<div id="answer-letter">hello</div>`
    
        }
    };
    

    

    

    

    
    


  
  
  