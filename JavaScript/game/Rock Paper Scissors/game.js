let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };
  
 const drawGame = () => {
    console.log("Game Was Draw.")
    msg.innerText = "Game Was Draw. Play Again"
    msg.style.backgroundColor = "#081b31";
 }

 const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        console.log("You Win!")
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}` 
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose.")
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 }

const playGame = (userChoice) => {
    console.log("user coice =", userChoice);
    //Generete computer choice
    const compChoice = genCompChoice()
    console.log("comp coice =", compChoice);

    if (userChoice === compChoice){
        // draw game
        drawGame()
    }else {
        let userWin = true;
        if (userChoice === "rock"){
            // paper , sscissors
            userWin = compChoice === "paper" ? false : true ;
        }else if (userChoice === "paper"){
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true ; 
        }else {
           // rock paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });
