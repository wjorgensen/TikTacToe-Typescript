var board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 1;
var plays = 0;
// Winner is false for x and true for o
var winner = false;
var gameFinished = false;
//DOM manipulation
function updateBoard(space) {
    if (board[space] == 0 && !gameFinished && plays < 9) {
        board[space] = turn;
        turn = turn * -1;
        plays++;
        // Update the board
        var button = document.getElementById("" + space);
        if (button !== null) {
            if (turn == 1) {
                button.textContent = "X";
            }
            else {
                button.textContent = "O";
            }
        }
        else {
            console.error("Button with id " + space + " not found");
        }
    }
    else if (gameFinished) {
        alert("Game is over!");
    }
    else {
        alert("Space already taken!");
    }
    checkForWin();
    if (gameFinished) {
        var body = document.getElementById("body");
        if (body !== null) {
            var button = document.createElement("button");
            button.textContent = "Restart Game";
            button.id = "restart";
            button.onclick = function () {
                location.reload();
            };
            body.appendChild(button);
        }
        if (plays >= 9) {
            var updater = document.getElementById("game-won");
            if (updater !== null) {
                updater.textContent = "Game is a draw!";
            }
        }
        else if (winner) {
            var updater = document.getElementById("game-won");
            if (updater !== null) {
                updater.textContent = "X Wins!";
            }
        }
        else {
            var updater = document.getElementById("game-won");
            if (updater !== null) {
                updater.textContent = "O Wins!";
            }
        }
    }
}
function checkForWin() {
    if (plays >= 9) {
        gameFinished = true;
    }
    else if (board[0] == board[1] && board[1] == board[2] && board[0] != 0) {
        winner = board[0] == 1 ? true : false;
        gameFinished = true;
    }
    else if (board[3] == board[4] && board[4] == board[5] && board[3] != 0) {
        winner = board[3] == 1 ? true : false;
        gameFinished = true;
    }
    else if (board[6] == board[7] && board[7] == board[8] && board[6] != 0) {
        winner = board[6] == 1 ? true : false;
        gameFinished = true;
    }
    else if (board[0] == board[3] && board[3] == board[6] && board[0] != 0) {
        winner = board[0] == 1 ? true : false;
        gameFinished = true;
    }
    else if (board[1] == board[4] && board[4] == board[7] && board[1] != 0) {
        winner = board[1] == 1 ? true : false;
        gameFinished = true;
    }
    else if (board[2] == board[5] && board[5] == board[8] && board[2] != 0) {
        winner = board[2] == 1 ? true : false;
        gameFinished = true;
    }
    else if (board[0] == board[4] && board[4] == board[8] && board[0] != 0) {
        winner = board[0] == 1 ? true : false;
        gameFinished = true;
    }
    else if (board[2] == board[4] && board[4] == board[6] && board[2] != 0) {
        winner = board[2] == 1 ? true : false;
        gameFinished = true;
    }
}
