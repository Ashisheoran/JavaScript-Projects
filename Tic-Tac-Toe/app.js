let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX playerO
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const restGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    restbtn.style.display = "inline";

}

const colorChange = (box) => {
    if (box.innerText === "X") {
        box.style.color = "blue";
    }
    if (box.innerText === "O") {
        box.style.color = "red";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        colorChange(box);
        let isWinner = checkWinner();


        if (count == 9 && !isWinner) {
            gameDraw();
        }

    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations ,  Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    if (winner == "X") {
        msg.style.color = "blue";
        msgContainer.style.border = "5px dotted blue"
    } else {
        msg.style.color = "red";
        msgContainer.style.border = "5px dotted red"

    }
    restbtn.style.display = "none";
    disableBoxes();

}


const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }

        }
    }
};

const gameDraw = () => {
    msg.innerText = "Match Drawn... Play Again ";
    msgContainer.style.border = "5px dotted #ffffc7"
    msgContainer.classList.remove('hide');
    restbtn.style.display = "none";

}

newGamebtn.addEventListener("click", restGame);
restbtn.addEventListener("click", restGame);
