const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');

const boxSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };                                    // Variables 
let score = 0;
let gameStarted = false;
let gameInterval;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';                                        // Drawing the snake
  snake.forEach(drawSnakeSegment);

  ctx.fillStyle = 'red';                                          // Drawing the food
  drawFood();

  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';                                        // Drawing the score
  drawScore();
}

function update() {
  const head = Object.assign({}, snake[0]);                       // create a copy of the snake's head to avoid modifying the original array directly   
  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':                                             // Snake movement
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
    head.y < 0 || head.y >= canvas.height / boxSize ||                   // If statment if the snake hits the border
    collision(head, snake)
  ) {
    alert('Game Over! Your Score: ' + score);
    resetGame();
  }

  if (collision(head, [food])) {
    snake.unshift(food);                                                // If statments if snake eats food
    spawnFood();
    score += 1;

    if (score >= 10) {
      alert('Congratulations! You reached 10 points. Game Over!');       // If statments for ending the game if score hits the proper number
      resetGame();
    }
  } else {
    snake.unshift(head);
    snake.pop();                                                         // If there was no collision
  }
}

function collision(obj1, obj2) {                                            // Collision function 
  return obj2.some(function (segment) {                                     //
    return segment.x === obj1.x && segment.y === obj1.y;                    // checks the coordinates, to see if there was a collision
  });
}

function spawnFood() {
  food = {
    x: Math.floor(Math.random() * (canvas.width / boxSize)),              // Spawning foood function 
    y: Math.floor(Math.random() * (canvas.height / boxSize))
  };
}

function gameLoop() {
  update();                                                               // Keeping the game in loop
  draw();
}

function startGame() {
  spawnFood();
  gameInterval = setInterval(gameLoop, 100);                             // updates the game every 100 miliseconds
}

function resetGame() {
  clearInterval(gameInterval);
  gameInterval = null;
  gameStarted = false;                                                       //reseting the game
  snake = [{ x: 10, y: 10 }];
  score = 0;
}

function drawSnakeSegment(segment) {          
  ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);             // Drawing snake function
}

function drawFood() {
  ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);                  // Drawing food function
}

function drawScore() {
  ctx.fillText('Score: ' + score, 10, 20);                                             // Drawing score function
}

document.addEventListener('keydown', function (event) {
  if (!gameStarted) {
    startGame();                                                                // If key was pressed, start the game
    gameStarted = true;                                                            
  }

  switch (event.key) {
    case 'ArrowUp':
    case 'W':
    case 'w':
      direction = 'up';
      break;
    case 'ArrowDown':
    case 'S':                                                                      // Moving the snake with arrows or wsad
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
