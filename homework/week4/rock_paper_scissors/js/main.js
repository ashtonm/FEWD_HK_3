
//Define Ids as variables // 

var human =document.getElementById("humanScore");
var computer = document.getElementById("computerScore");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var statusMsg = document.getElementById("status");
var userInput; //declared, not assigned // 

//Get user input - define click handlers // 
rockBtn.onclick = rockIsClicked; 
paperBtn.onclick = paperIsClicked;
scissorsBtn.onclick = scissorsIsClicked;

//define functions //

function rockIsClicked(){
	userInput = "rock"; //want to know which button is hit // 
	var robotInput = getRobotInput();
	compare (userInput, robotInput);
}

function paperIsClicked(){
	userInput = "paper"; //want to know which button is hit // 
	var robotInput = getRobotInput();
	compare (userInput, robotInput);
}

function scissorsIsClicked(){
	userInput = "scissors"; //want to know which button is hit // 
	var robotInput = getRobotInput();
	compare (userInput, robotInput);
}

//compare user input to robots input //

//get robot input // 

function getRobotInput(){
	var choices = {
		1:"rock",
		2:"scissors",
		3:"paper"
	}

var randomNumber = Math.ceil(Math.random() * 3); //saving generated number in variable // 
	//console.log(randomNumber);
	//console.log(choices[randomNumber]);
	return choices[randomNumber];
}


//compare both user and computer input
//function takes up two parameters. decide which function passed into variable
//function stand alone //

function compare(userInput, computerInput){
	// # User win
// if (user_choice == scissors AND robot_choice == paper)
// or (user_choice == stone AND robot_choice == scissors)
// or (user_choice == paper AND robot_choice == stone)
// || = OR //
	// var win = winner(win);
	// var lose = loser(lose);
	// var draw = draw(draw);
//	console.log("computer: " + computerInput); 
	if (
		(userInput == "scissors" && computerInput =="paper") ||
		(userInput == "rock" && computerInput =="scissors") ||
		(userInput == "paper" && computerInput =="rock")
		) {
		
		//statusMsg.value = "win";//
		
		statusMsg.innerHTML= winner(); //
	} else  if (
		(computerInput == "scissors" && userInput =="paper") ||
		(computerInput == "rock" && userInput =="scissors") ||
		(computerInput == "paper" && userInput =="rock")
		) {
		//statusMsg.value = "loss";
		//console.log("User lose"); 

		statusMsg.innerHTML= loser(); 
	} else {
		//statusMsg.value = "draw";
		//console.log("Draw")

		statusMsg.innerHTML= draw(); 
	}
}

function winner(){
	var score = parseInt(human.innerHTML);
	human.innerHTML = score + 1;
	return 'win' 
}

function loser(){
	var score = parseInt(computer.innerHTML);
	computer.innerHTML = score + 1;
	return 'lose' 
}

function draw(){
	return 'draw' 
}

// //Total //
// var humanScore = 0;
// var computerScore = 0;






//GAME_START//


// Get user input
//user_choice = get_user_choice

// Get robot input
// robot_choice = random(paper, scissors, stone)

// 1 = paper
// 2 = scissors
// 3 = stone


// # User win
// if (user_choice == scissors AND robot_choice == paper)
// or (user_choice == stone AND robot_choice == scissors)
// or (user_choice == paper AND robot_choice == stone)
//   say "YOU WIN"
//   save(results, "user")

// # User lose
// if (user_choice == paper AND robot_choice == scissors)
// or (user_choice == scissors AND robot_choice == stone)
// or (user_choice == stone AND robot_choice == paper)
//   say "YOU LOSE"
//   save(results, "robot")

// # Repeat if draw
// if (user_choice == robot_choice)
//   save(results, "draw")
//   GOTO $GAME_START
// else
//   say "GAME OVER"
//   # Display recent results
//   foreach(results as result)
//     say result