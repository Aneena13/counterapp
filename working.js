function game(){
    let playerScore= 0;
    let compScore= 0;
    let moves= 10;

    function playgame(){
        const rockbtn= document.querySelector('.rock');
        const paperbtn= document.querySelector('.paper');
        const scissorbtn= document.querySelector('.scissor');
        const playerOption= [rockbtn,paperbtn,scissorbtn];
        const compOption= ['rock','paper','scissor'];

        playerOption.forEach(playerOption =>  {
            playerOption.addEventListener('click',function(){
                const movesleft = document.querySelector('.movesleft');
                if (moves == 0) {
                    gameover();
                }
                moves--;
                movesleft.innerText = 'moves left : '+moves;

                const choiceno = Math.floor(Math.random()*3);
                const compchoice= compOption[choiceno];

                winner(this.innerText,compchoice)
            })
        });
    }
    function winner(player,computer){
        const result= document.querySelector('.result');
        const playerscoreboard= document.querySelector('.pcount');
        const compscoreboard= document.querySelector('.ccount');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player === computer){
            result.textContent = 'Tie';
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                compScore++;
                compscoreboard.textContent = compScore;
            }
            else{
                result.textContent = 'Player Won';
                playerScore++;
                playerscoreboard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissor'){
                result.textContent = 'Computer Won';
                compScore++;
                compscoreboard.textContent = compScore;
            }
            else{
                result.textContent = 'Player Won';
                playerScore++;
                playerscoreboard.textContent = playerScore;
            }
        }
        else if(player == 'scissor'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                compScore++;
                compscoreboard.textContent = compScore;
            }
            else{
                result.textContent = 'Player Won';
                playerScore++;
                playerscoreboard.textContent = playerScore;
            }
        }
    }
    function gameover() {
        const choosemove = document.querySelector('.moves');  
        choosemove.innerText = 'Game Over!!!';
        movesleft.style.display = 'none';
        document.querySelectorAll('.result').style.display = 'none';
    }
    playgame();
}
game();
