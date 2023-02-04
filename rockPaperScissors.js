function rockPaperScissors(playerTurn){
    let rock="Rock";
    let paper="Paper";
    let scissors='Scissors';
    
    if(playerTurn=="r" || playerTurn=="rock"){
        playerTurn=rock
        console.log("You choose Rock");
    }else if(playerTurn=="s" || playerTurn=="scissors"){
        playerTurn=scissors
        console.log("You choose Scissors");
    }else if(playerTurn=="p" || playerTurn=="paper"){
        playerTurn=paper
        console.log("You choose Paper");
    }else{
        console.log("Invalid Input. Try Again...");
    }
 let computerRandomNumber=Math.floor(Math.random()*3)+1;
 let computerMove=""
 switch (computerRandomNumber) {
    case 1:
        computerMove=rock;
    break;
    case 2:
        computerMove=paper;
    break;
    case 3:
        computerMove=scissors;
    break;
 }
console.log(`The computer chooses ${computerMove}`);
let result=""
 if(playerTurn===rock){
    if(computerMove==rock){
        result="This game was a draw!"
    }else if(computerMove==paper){
        result="You lose!"
    }else{
        result="You win!"
    }
 }else if(playerTurn===paper){
    if(computerMove==paper){
        result="This game was a draw!"
    }else if(computerMove==scissors){
        result="You lose!"
    }else{
        result="You win!"
    }
 }else if(playerTurn===scissors){
    if(computerMove==scissors){
        result="This game was a draw!"
    }else if(computerMove==rock){
        result="You lose!"
    }else{
        result="You win!"
    }
 }console.log(result);
}
rockPaperScissors("p")