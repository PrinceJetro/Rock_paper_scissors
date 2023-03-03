const Option_Images = ["rock.png","paper.png", 'scissors.png']

player = window.prompt("Welcome to Jetro's Rock Paper and \
Scissors game (: Enter your Player name please: ").toUpperCase()
document.getElementById("playerName").innerHTML = player

let userScore = 0;
let computerScore = 0;
document.getElementById("computerScore").innerHTML = computerScore
document.getElementById("playerScore").innerHTML = userScore

function rock(){
computer_choice = Math.floor(Math.random() * 3) 
document.getElementById("player_image").src=  Option_Images[0]
document.getElementById("computer_image").src=  Option_Images[computer_choice]

if (computer_choice == 1){
    document.getElementById("progress").innerHTML = "AI wins";
    computerScore +=1;
    document.getElementById("computerScore").innerHTML = computerScore
}
else if (computer_choice == 2){
    document.getElementById("progress").innerHTML = player +" wins";
    userScore+=1;
    document.getElementById("playerScore").innerHTML = userScore
}
else{
    document.getElementById("progress").innerHTML = "Tie";
}

}

function paper(){

computer_choice = Math.floor(Math.random() * 3) 
console.log(computer_choice)
document.getElementById("player_image").src=  Option_Images[1]
document.getElementById("computer_image").src=  Option_Images[computer_choice]

if (computer_choice == 0){
    document.getElementById("progress").innerHTML = player +" wins"
    userScore+=1
    document.getElementById("playerScore").innerHTML = userScore
}
else if (computer_choice == 2){
    document.getElementById("progress").innerHTML = "AI wins";
    computerScore+=1
    document.getElementById("computerScore").innerHTML = computerScore
}
else{
    document.getElementById("progress").innerHTML = "Tie";
}
    
}

function scissors(){

    computer_choice = Math.floor(Math.random() * 3) 

    document.getElementById("player_image").src=  Option_Images[2]
    document.getElementById("computer_image").src=  Option_Images[computer_choice]

    if (computer_choice == 0){
        document.getElementById("progress").innerHTML = "AI wins";
        computerScore+=1
        document.getElementById("computerScore").innerHTML = computerScore
    }
    else if (computer_choice == 1){
        document.getElementById("progress").innerHTML = player +" wins"
        userScore+=1
        document.getElementById("playerScore").innerHTML = userScore
    }
    else{
        document.getElementById("progress").innerHTML = "Tie";
    }
    
}