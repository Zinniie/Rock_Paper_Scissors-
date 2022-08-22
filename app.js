// create a few functions and each function is going to have its own role. Maybe a function that is just going to compare
// the hands, that would just update the scores. 

// For now, a big function thats basically the whole game
const game = ()=> {
    // here we write all our codes and all additional functions; basically scoping all our codes inside this 
    // function, so we dont have global variable; 
    // update scores
    let pScore = 0;
    let cScore = 0;

    // create start game function; the goal is to fadeOut beginners........
    // Start the Game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        // to get the intro screen
        const introScreen = document.querySelector('.intro');
        // match screen
        const match = document.querySelector('.match');

        // when we click on lets play, we woukld run soumeting there; meanwhile short of function is () => {}
        // fade in and out intro and match screen
        playBtn.addEventListener("click", () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    // play match; resolve around the actual game'
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        // remove animations after they finish
        const hands = document.querySelectorAll(".hands img");

        // foreac hand, we add an eventlistener thats going to listen toanimation end
        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });

       // Computer Options; randomly generated; generate randomly btw 0, 1 and 2 and then associate the different numbers 
        // to the differennt images
        const computerOptions = ["rock", "paper", "scissors"];

// we can run an eventlistener oneach buttron
        options.forEach(options=>{
            options.addEventListener("click", function (){
                // used function here instead of the symbols because of the keyword this
                // Computer Choice
                // Math.floor would take all the numners in console log and convert it into one sinmgle whole number
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // animation; this sets the time for the hands to play
                setTimeout(() =>{
                    // Here is where we call compareHands
                    compareHands(this.textContent, computerChoice);
                    // Update Images
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
    
                }, 2000);
                // for animation; 
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });   
    };

    // Update score
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) =>{
        // Checking for a tie
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie!";
            return;
        }
        // Checking for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins";
                // update score; increment, then update score, everytimr we makle a change in our variables
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        // Checking for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        // Checking for scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // call  all the inner functions
    startGame();
    playMatch();
    updateScore();
};

// also, outside of the big functuion above, we qlso have to call the game.

// start the game function ; going to execute all the small scope
game();