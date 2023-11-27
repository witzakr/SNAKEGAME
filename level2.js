var blockSize = 25;
var total_row = 17; 
var total_col = 17; 

var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var speedX = 0;  
var speedY = 0;  

var snakeBody = [];

var foodX;
var foodY;

var obstacles = []; 

var gameOver = false;

var score = 0;  
var targetScore = 10;  

window.onload = function () {
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");

    updateScore();

    placeFood();
    addObstacle(blockSize * 8, blockSize * 5);
    addObstacle(blockSize * 10, blockSize * 12);

    document.addEventListener("keyup", changeDirection);  //for movements
    setInterval(update, 1500 / 10);
}

function addObstacle(x, y) {
    obstacles.push([x, y]);
}

function isObstacle(x, y) {
    for (let i = 0; i < obstacles.length; i++) {
        if (x === obstacles[i][0] && y === obstacles[i][1]) {
            return true;
        }
    }
    return false;
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);


    context.fillStyle = "black";
    for (let i = 0; i < obstacles.length; i++) {
         context.fillRect(obstacles[i][0], obstacles[i][1], blockSize, blockSize);
    }
    

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
        score++;
        updateScore();

        if (score >= targetScore) {
            gameOver = true;
            alert("Congratulations! You've won the game!");
        }
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize; 
    snakeY += speedY * blockSize;  
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 
        || snakeX > total_col * blockSize 
        || snakeY < 0 
        || snakeY > total_row * blockSize) { 
        gameOver = true;
        alert("Game Over. Your Score: " + score);
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) { 
            gameOver = true;
            alert("Game Over. Your Score: " + score);
        }
    }
}


function changeDirection(e) {
    if (e.code == "KeyW" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    } else if (e.code == "KeyS" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    } else if (e.code == "KeyA" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    } else if (e.code == "KeyD" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * total_col) * blockSize; 
    foodY = Math.floor(Math.random() * total_row) * blockSize; 
}

function updateScore() {
    var scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.innerHTML = "Score: " + score;
    }
}
