let playerScore = 0,
	computerScore = 0;

const ROCK = "ROCK",
	PAPER = "PAPER",
	SCISSORS = "SCISSORS";

function GetComputerChoice() {
	let choice = Math.random();

	return choice < 1 / 3 ? ROCK : choice < 2 / 3 ? PAPER : SCISSORS;
}

function GetPlayerChoice() {
	let choice = prompt("Please enter your choice...").trim().toUpperCase();

	while (choice !== ROCK && choice !== PAPER && choice !== SCISSORS) {
		alert("Invalid move entered. Please enter your choice again.");
		choice = prompt("Please enter your choice...").trim().toUpperCase();
	}

	return choice;
}

function evaluate(choice1, choice2) {
	return (
		(choice1 === ROCK && choice2 === SCISSORS) ||
		(choice1 === SCISSORS && choice2 === PAPER) ||
		(choice1 === PAPER && choice2 === ROCK)
	);
}

function Game() {
	let playerChoice = GetPlayerChoice(),
		computerChoice = GetComputerChoice();

	let WIN_MSG = "You win!",
		LOSE_MSG = "You lose!",
		TIE_MSG = "Tie!";

	let choiceMsg = () =>
		`Your choice: ${playerChoice}\nComputer choice: ${computerChoice}`;
	let curMsg = () =>
		`Current score: Your score: ${playerScore}, computer score: ${computerScore}.`;
	let resMsg;

	if (playerChoice === computerChoice) resMsg = TIE_MSG;
	else {
		if (evaluate(playerChoice, computerChoice)) {
			playerScore++;
			resMsg = WIN_MSG;
		} else {
			computerScore++;
			resMsg = LOSE_MSG;
		}
	}

	alert(choiceMsg() + "\n" + resMsg + "\n" + curMsg());
}

function Main() {
	alert(
		"Welcome to Rock Paper Scissors. You will play against the computer. Whoever reaches five first wins."
	);

	while (computerScore < 5 && playerScore < 5) Game();

	if (computerScore == 5) alert("Too bad! You lose.");
	else alert("You win!");
}

Main();
