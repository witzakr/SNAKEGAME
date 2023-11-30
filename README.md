# SNAKEGAME code explanation
1. Set up
https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L1-L2
These lines help create a space (canvas) where the game will happen and get the tools ready to draw everything you see in the game.

2. Setting up variables
https://github.com/witzakr/SNAKEGAME/blob/f4a04da5043dcbbafbefad6981de5cd6c09b413a/level1.js#L4-L8

3. Draw function
https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L11-L22
The drawing function is responsible for setting up the canvas and the game. It uses already-established functions that will be mentioned later.

- This part is responsible for clearing the canvas and drawing the snake.
https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L12-L14

- This part is responsible for drawing the food.
https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L16-L17

- This part is responsible for drawing the score.
https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L18-L21

4. Update function
https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L23-L63
The update function can be divided into two parts, one responsible for the movement and one for the gameplay scenarios
 - Movement section:
   https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L25-L39   
In this part, the code makes a copy of the front part of the snake, calling it head. Think of it like taking a snapshot of the snake's head.
Then, depending on which direction the snake is supposed to move (up, down, left, or right), the position of this snapshot is adjusted accordingly.
For example, if it's going up, the 'y' coordinate goes one step back; if down, it goes one step forward; left, it goes left; and right, it goes right.
This piece of code essentially figures out where the snake's head should be after a move in the game.
  - Gameplay section:
    https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L41-L63
    This part of the code checks what happens after the snake makes a move. It first does the border and self-collision check and if either condition is true, the game ends.
    Secondly, it checks if the snake collided with food, if it did then the snake grows, and the score increases by +1. If the score is higher than 10 then the game ends.
    If there was no collision with anything the game just continues.

5. Collision function:
   https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L65-L69
   The collision funciton is designed to determine whether there is a collision between two objects. So pretty much this function checks if there was a collision between the snake and an object, such as food or border.
   It's important to add, that this function is pretty much the most important one, since it somewhat establishes the way game works.

6. Spawn food function
   https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L71-L76
   This function is repsobilbe for food spawing, it establishes the random cooridnates where it will be spawned.
