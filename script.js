let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore1 = document.querySelector("#user-score"); 
let compScore1 = document.querySelector("#comp-score"); 


const genCompChoice = () => {
const options = ["rock","paper","scissors"];
let randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame = (userChoice,compChoice) =>{
   
    msg.innerText =`Game Draw, ${userChoice} = ${compChoice}`;
    msg.style.backgroundColor = "yellow";
};


const showWinner =(userWin,userChoice,compChoice) =>{
     if(userWin)
     {
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "lightgreen";
        userScore++;
        userScore1.innerText = userScore;

     }
     else
     {
        msg.innerText =`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScore1.innerText = compScore;
     }
};

const playGame = (userChoice) =>{
    console.log("user-choice = ",userChoice);
    //generate computer choice 
    let compChoice = genCompChoice();
    genCompChoice 
    console.log("comp-choice = ", compChoice);
    if(userChoice === compChoice)
    {
        drawGame(userChoice,compChoice);
    }
    else{
        let userWin = true;
        if(userChoice ==="rock")
        {
            userWin = compChoice==="paper"? false:true;
        }
        else if(userChoice ==="scissors")
        {
            userWin= compChoice==="rock"?false:true;
        }
        else if(userChoice ==="paper")
        {
            userWin= compChoice==="scissors"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});