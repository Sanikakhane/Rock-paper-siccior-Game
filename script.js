let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id"); //used get the id 
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

const playGame=(userChoice)=>
{
    console.log(userChoice);
    //Generate computer choice creating a different function for every work is called modular way of programming
    const compChoice=generateCompChoice();
    console.log(compChoice);
    if(userChoice === compChoice)
    {
        //Draw
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice === "rock")
        {
            // if(compChoice === "paper")  userWin = false;
            userWin= compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper")
        {
            //if(compChoice === "scissors") userWin=false;
            userWin = compChoice === "scissors" ? false:true;
        }
        else
        {
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const generateCompChoice = () =>
{
    const options=["rock","paper","scissors"]; //Math.random generate the number between 0 to 1 so if we want whole number then we need to multiply it by whole number
    //if we multiply by n then we get the numbers from 0 to n-1
    const randIndex=Math.floor(Math.random()*3); //Math.floor is useed to remove the extra digits from the number
    return options[randIndex];
};
const drawGame= () =>
{
    console.log("The game was draw");
    msg.innerText="Game is draw play again";
    msg.style.backgroundColor="#081b31"; //for changing the style
};
const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        console.log("You Win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        console.log("you lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="blue";
    }
};