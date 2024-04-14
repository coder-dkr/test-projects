let music = new Audio("victorybozo.m4a");
let turnAud = new Audio("ting.mp3")
let boxs = document.getElementsByClassName("box");
let resetBtn = document.getElementById("reset")
let gameEnd = false;

let turn = "X";

function turnSwap() {
    return turn === "X" ? "0" : "X"
}

function winCheck() {
    let boxtext = document.getElementsByClassName("boxtxt")
    let wins = [
        [0, 1, 2,-1,5,0],
        [3, 4, 5,-1,15,0],
        [6, 7, 8,-1,25,0],
        [0, 3, 6,-11,15,90],
        [1, 4, 7,-1,15,90],
        [2, 5, 8,9,15,90],
        [0, 4, 8,-1,15,45],
        [2, 4, 6,-1,15,-45]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
            document.getElementsByClassName("info")[0].innerHTML = `${boxtext[e[0]].innerHTML} WON !`
            gameEnd = true;
            music.play();  
            document.getElementById("line").style.transition = "width 2s ease-in-out";
            document.getElementById("line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.getElementById("line").style.width = "32vw"; 

            document.querySelector("#imgvic").style.width = "110%"

        }
    })
}
Array.from(boxs).forEach(element => {
    let boxtext = element.querySelector(".boxtxt");
    element.addEventListener("click", function () {
        if (gameEnd) {
            return null
        }
        turnAud.play();
        if (boxtext.innerHTML == "") {
            boxtext.innerHTML = turn;
            turn = turnSwap();
        }
        winCheck();
        if (!gameEnd) {
            document.getElementsByClassName("info")[0].innerHTML = "Turn of " + turn;
        }
    })

})

resetBtn.addEventListener("click",function (){
    let boxtext = document.getElementsByClassName("boxtxt");
    Array.from(boxtext).forEach(e => {
        e.innerHTML = "";
    })
    turn = "X";
    gameEnd = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn of " + turn;
    document.querySelector("#imgvic").style.width = "0";
    document.getElementById("line").style.transition = "none";
    document.getElementById("line").style.width = "0";
    document.getElementById("line").style.transform = `translate(0,0) rotate(0)`;
    music.pause()
    music.currentTime = 0;

})

