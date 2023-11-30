const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');


const boxSize = 20;
let snake = [{ x: 10, y: 10 }];
let obstacles = [];
let score = 0;
let gameStarted = false;
let gameInterval;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  snake.forEach(drawSnakeSegment);

  ctx.fillStyle = 'red';
  drawFood();

  ctx.fillStyle = 'red';
  drawRottenFood();                                         // drawing rotten food

  ctx.fillStyle = 'black';
  obstacles.forEach(drawObstacle);

  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  drawScore();
}

function update() {
  const head = Object.assign({}, snake[0]);
  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }

  if (
    head.x < 0 || head.x >= canvas.width / boxSize ||
    head.y < 0 || head.y >= canvas.height / boxSize ||
    collision(head, snake) ||
    collision(head, obstacles)
  ) {
    alert('Game Over! Your Score: ' + score);
    resetGame();
  }

  if (collision(head, [food])) {
    snake.unshift(food);
    spawnFood();
    score += 1;
  } else if (collision(head, [rottenFood])) {
    if (score > 0) {
      snake.pop(); 
      score -= 1;
    } else {
      alert('Game Over! Your Score: 0');
      resetGame();
      return;
    }

    spawnRottenFood();
  } else {                                  //spawing rotten food
    snake.unshift(head);
    snake.pop();
  }

  if (score >= 10) {
    alert('Congratulations! You reached 10 points. Game Over!');
    resetGame();
  }
}
  

function collision(obj1, obj2) {
  return obj2.some(function (segment) {
    return segment.x === obj1.x && segment.y === obj1.y;
  });
}

function spawnFood() {
  food = generateFood();         
}

function spawnRottenFood() {
  rottenFood = generateFood();    //function for spawing rotten food
}

function spawnObstacle() {
  const obstacle = generateFood();
  
  while (
    collision(obstacle, snake) ||
    collision(obstacle, [food]) ||
    collision(obstacle, [rottenFood]) ||
    collision(obstacle, obstacles)
  ) {
    obstacle.x = Math.floor(Math.random() * (canvas.width / boxSize));
    obstacle.y = Math.floor(Math.random() * (canvas.height / boxSize));
  }

  obstacles.push(obstacle);
}

function generateFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / boxSize)),
    y: Math.floor(Math.random() * (canvas.height / boxSize))
  };
}

function gameLoop() {
  update();
  draw();
}

function startGame() {
  spawnFood();
  spawnRottenFood();
  spawnObstacle();
  gameInterval = setInterval(gameLoop, 100);
}

function resetGame() {
  clearInterval(gameInterval);
  gameInterval = null;
  gameStarted = false;
  snake = [{ x: 10, y: 10 }];
  direction = 'right';
  score = 0;
  obstacles = [];
}

function drawSnakeSegment(segment) {
  ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
}

function drawFood() {
  ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
}

function drawRottenFood() {
  ctx.fillRect(rottenFood.x * boxSize, rottenFood.y * boxSize, boxSize, boxSize);        // function that draws rotten food 
}

function drawObstacle(obstacle) {
  ctx.fillRect(obstacle.x * boxSize, obstacle.y * boxSize, boxSize, boxSize);
}

function drawScore() {
  ctx.fillText('Score: ' + score, 10, 20);
}

document.addEventListener('keydown', function (event) {
  if (!gameStarted) {
    startGame();
    gameStarted = true;
  }

  switch (event.key) {
    case 'ArrowUp':
    case 'W':
    case 'w':
      direction = 'up';
      break;
    case 'ArrowDown':
    case 'S':
    case 's':
      direction = 'down';
      break;
    case 'ArrowLeft':
    case 'A':
    case 'a':
      direction = 'left';
      break;
    case 'ArrowRight':
    case 'D':
    case 'd':
      direction = 'right';
      break;
  }
});

setInterval(function () {
  if (gameStarted) {
    spawnObstacle();
  }
}, 5000);
