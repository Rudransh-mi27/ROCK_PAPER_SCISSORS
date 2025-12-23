const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userchoice
let computerchoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e)=>{
    userchoice=e.target.id
    userChoiceDisplay.innerHTML = userchoice
    generateComputerChoice()
    resultDeclare()
}))

function generateComputerChoice (){
    const randomNumber=Math.floor(Math.random()*3 +1)
    

    if(randomNumber===1){
        computerchoice = "rock"
    }
     if(randomNumber===2){
        computerchoice = "paper"
    }
     if(randomNumber===3){
        computerchoice = "scissros"
    }
    computerChoiceDisplay.innerHTML = computerchoice
}

function resultDeclare() {
    if(computerchoice===userchoice){
      result="it`s a Draw"
    }
    if(computerchoice==='rock' && userchoice === 'paper'){
      result="You won!"
    }
    if(computerchoice==='rock' && userchoice === 'scissros'){
      result="You lost!"
    }
    if(computerchoice==='paper' && userchoice === 'rock'){
      result="You lost!"
    }
     if(computerchoice==='paper' && userchoice === 'scissros'){
      result="You won!"
    }
     if(computerchoice==='scissros' && userchoice === 'rock'){
      result="You won!"
    }
     if(computerchoice==='scissros' && userchoice === 'paper'){
      result="You lost!"
    }
resultDisplay.innerHTML=result
}