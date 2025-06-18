let userScore = 0;
let compScore = 0;
let msg = document.getElementById("msg");
let uScore = document.getElementById("user-score");
let cScore = document.getElementById("comp-score");
let newGamebtn = document.getElementById("new-game");
const choices = document.querySelectorAll(".choice");

const computerChoice = () => {
    // rock paper scissors
    const options = ["rock", "paper", "scissors"];
    const rndInx = Math.floor(Math.random() * 3);
    return options[rndInx];
}

const gameDraw = () => {
    msg.innerText = "Game Drawn ! Play Again...."
    msg.style.backgroundColor = "#081b31"


}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`
        userScore++;
        uScore.innerText = userScore;
        msg.style.backgroundColor = "green";

    } else {
        msg.innerText = `You Lose ! ${compChoice} beats ${userChoice}`
        compScore++;
        cScore.innerText = compScore;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {

    // Generate compute choice -> modular
    const compChoice = computerChoice();
    if (userChoice == compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // paper rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })

});

newGamebtn.addEventListener("click", () => {
    uScore.innerText = 0;
    cScore.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor="#081b31"
});