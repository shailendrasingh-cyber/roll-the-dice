
let dice;
let totalScore = 0;
let gamePlaying;



const totalPoints = document.querySelector("#totalPoints");


let diceImgs = {
    dice1:'image/twist.jpeg',
    dice2:'image/twist.jpeg',
    dice3:'image/twist.jpeg',
    dice4:'image/twist.jpeg',
    dice5:'image/twist.jpeg',
    dice6:'image/twist.jpeg',
  }

const throwDice = () => {
    //1.Generate random number  
        dice = Math.floor((Math.random() * 6) + 1);

    //2.Display result
        //   const score = document.querySelector("#point");
        //   score.innerHTML = dice;

        const diceDOM = document.querySelector("#diceImgDOM");
        diceDOM.classList.remove("no-display");
        diceDOM.src = diceImgs['dice' + dice];

    //3. If dice = 1, player loses
        
        // if (dice === 1) {
        //     const loseMsg = document.querySelector("#display-lose");
        //     loseMsg.innerHTML = '💀 YOU LOSE! You rolled 1!';
        //     totalScore=0;
        //     toggleBtn(rollBtn);
        // } else {
        //     hideMsg()
        //     totalScore += dice;
        //     totalPoints.innerHTML = totalScore;
        // }
        

        // if (totalScore >= 20) {
        //     const winMsg = document.querySelector("#display-win");
        //     winMsg.innerHTML = 'CONGRATULATIONS! YOU WON 🎉';
        //     totalScore = 0;
        //     tooggleBtn(rollBtn);
        // }
}



//HIDE MESSAGES
const hideMsg = () => {
    document.querySelector("#display-lose").innerHTML = '';
    document.querySelector("#display-win").innerHTML = '';
}


//START GAME BY ROLLING THE DICE
const rollBtn = document.querySelector("#roll-btn");
rollBtn.addEventListener("click",  throwDice)

//DISABLE BUTTONS 
// const disableBtn = (btn, time) => {
//     btn.disabled=true;
//     setTimeout(function(){
//         btn.disabled=false;
//     }, time);
// }

const toggleBtn = (btn) => {
    if (btn.disabled === true) {
        btn.disabled = false;
    } else if (btn.disabled === false) {
        btn.disabled = true;
    };
}


//RESET GAME
const reset = () => {
    totalScore = 0;
    document.querySelector("#diceImgDOM").classList.add("no-display");
    totalPoints.textContent='0';
    hideMsg();
    toggleBtn(rollBtn);

}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);