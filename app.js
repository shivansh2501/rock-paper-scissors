let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#081b31";
}

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    //rock, paper, scissors
    return options[randIndx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose... ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate Computer Choice
    const compChoice = genComputerChoice();;

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice ==="paper" ? false : true; 
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true; 
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});