
const container = document.querySelector("body");
const title = document.createElement('h1');
title.textContent = 'Rock Paper Scissors';
container.appendChild(title);

const rock = document.createElement("button");
rock.textContent = 'rock';
rock.addEventListener('click', () => {
    playRound('rock',getComputerChoice());
});

const paper = document.createElement("button");
paper.textContent = 'paper';
paper.addEventListener('click', () => {
    playRound('paper',getComputerChoice());
});

const scissors = document.createElement("button");
scissors.textContent = 'scissors';
scissors.addEventListener('click', () => {
    playRound('scissors',getComputerChoice());
});

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

const results = document.createElement('ul');

results.setAttribute("style","list-style-type: none;")

container.appendChild(results);



let getComputerChoice = () => { //define function
    let options = ['rock','paper','scissors']; //define list of options
    return options[Math.floor(Math.random() * 3)];//will choose item 0, 1, or 2 in list
};

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {

    const choices = document.createElement('li');
    const roundResult = document.createElement('li');
    const score = document.createElement('li');
    const blank = document.createElement('li');
    blank.setAttribute("style","padding-bottom:20px;")


    if (humanChoice === computerChoice) {     
        choices.textContent = "Computer: " + computerChoice + " You: " + humanChoice;

        roundResult.textContent = "YOU TIE!";
    } 
    
    else if ((humanChoice === 'rock' && computerChoice !== 'paper') || (humanChoice === 'paper' && computerChoice !== 'scissors') || (humanChoice === 'scissors' && computerChoice !== 'rock')) {
        
        choices.textContent = "Computer: " + computerChoice + " You: " + humanChoice;

        roundResult.textContent = "YOU WIN! " + humanChoice + " beats " + computerChoice;

        humanScore++;
    }
    
    else {
        
        choices.textContent = "Computer: " + computerChoice + " You: " + humanChoice;

        roundResult.textContent = " YOU LOSE! " + computerChoice + " beats " + humanChoice;
       
        computerScore++;

    }


    score.textContent = 'HUMAN: ' + humanScore + '\nCOMPUTER: ' + computerScore;
    
    results.appendChild(choices);
    results.appendChild(roundResult);
    results.appendChild(score);
    results.appendChild(blank);



    const finalResult = document.createElement('h2');

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            finalResult.textContent = 'Congratulations. You win.';
        } else {
            finalResult.textContent = 'Sorry. You lose.'
        }
        results.appendChild(finalResult);

        container.removeChild(rock);
        container.removeChild(paper);
        container.removeChild(scissors);


    }


}


//}

