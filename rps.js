
let getHumanChoice = () => {
    let input = prompt('rock (r), paper (p), or scissors (s): ');
    input = input.toLowerCase();
    if (input === 'r') {
        return 'rock'
    }
    else if (input === 'p') {
        return 'paper'
    }
    else if (input === 's') {
        return 'scissors'
    }
    else {
        console.log('invalid input');
        getHumanChoice();
    }
};


let getComputerChoice = () => { //define function
    let options = ['rock','paper','scissors']; //define list of options
    return options[Math.floor(Math.random() * 3)];//will choose item 0, 1, or 2 in list
};



let playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            console.log('YOU TIE!');
        } else if ((humanChoice === 'rock' && computerChoice !== 'paper') || (humanChoice === 'paper' && computerChoice !== 'scissors') || (humanChoice === 'scissors' && computerChoice !== 'rock')) {
            console.log("Computer: " + computerChoice);
            console.log("You: " + humanChoice);
            console.log("YOU WIN! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log("Computer: " + computerChoice);
            console.log("You: " + humanChoice);
            console.log("YOU LOSE! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }

    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log('HUMAN: ' + humanScore + '\nCOMPUTER: ' + computerScore);
    }

    if (humanScore > computerScore) {
        console.log('Congratulations. You win.');
    } else {
        console.log('Sorry. You lose.')
    }
}

console.log(playGame());