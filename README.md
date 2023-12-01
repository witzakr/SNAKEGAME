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
   The collision function is designed to determine whether there is a collision between two objects. So pretty much this function checks if there was a collision between the snake and an object, such as food or border.
   It's important to add, that this function is pretty much the most important one, since it somewhat establishes the way game works.

6. Spawn food function:
   https://github.com/witzakr/SNAKEGAME/blob/2364e89a9942384220e13c9bde6b2c2985b78dc8/level1.js#L71-L76
   This function is responsible for food spawning, it establishes the random coordinates where it will be spawned.

7. Game loop function:
   https://github.com/witzakr/SNAKEGAME/blob/f4a04da5043dcbbafbefad6981de5cd6c09b413a/level1.js#L77-L80
   This function keeps the game in a loop and calls functions update and draw. Keeps the game moving pretty much

8. Start game function:
   https://github.com/witzakr/SNAKEGAME/blob/f4a04da5043dcbbafbefad6981de5cd6c09b413a/level1.js#L82-L85
   This function is responsible for starting the game. It was necessary to establish it because without it the game would just start with opening the page.

9. Reset game function:
   https://github.com/witzakr/SNAKEGAME/blob/f4a04da5043dcbbafbefad6981de5cd6c09b413a/level1.js#L87-L93
   This function is responsible for resetting the game, after finishing the game, it comes back to the state established in the function.

10. Drawing functions:
    https://github.com/witzakr/SNAKEGAME/blob/f4a04da5043dcbbafbefad6981de5cd6c09b413a/level1.js#L95-L105
    These functions if called will draw the object on the canvas using fillrect.

11. Controls:
    https://github.com/witzakr/SNAKEGAME/blob/f4a04da5043dcbbafbefad6981de5cd6c09b413a/level1.js#L107-L135
    The control section can be divided into two parts. One for starting the game with a press of a button, and the second one responsible for the control of the snake using arrows and 'WSAD'
     - Starting the game:
       https://github.com/witzakr/SNAKEGAME/blob/f4a04da5043dcbbafbefad6981de5cd6c09b413a/level1.js#L108-L111
     - Controlling the snake:
       https://github.com/witzakr/SNAKEGAME/blob/f4a04da5043dcbbafbefad6981de5cd6c09b413a/level1.js#L113-L134
  -------------------------------------------------
 13. Feature in second level.
     In the second level, I decided to add obstacles that if touched would end the game. They will spawn randomly on the map in the interval of 5 seconds.
      - Establishing the obstacle array:
        https://github.com/witzakr/SNAKEGAME/blob/f5c223e15c089f7db0c20bd101d4a05f6cc38f8a/level2.js#L6
      - Drawing the obstacle:
        https://github.com/witzakr/SNAKEGAME/blob/f5c223e15c089f7db0c20bd101d4a05f6cc38f8a/level2.js#L19-L21
      - Hitting the obstacle:
        https://github.com/witzakr/SNAKEGAME/blob/f5c223e15c089f7db0c20bd101d4a05f6cc38f8a/level2.js#L44-L49
      - Spawning the obstacle:
        https://github.com/witzakr/SNAKEGAME/blob/f5c223e15c089f7db0c20bd101d4a05f6cc38f8a/level2.js#L82-L94
        The function can be divided into two parts, one for rendering the obstacle and one for ensuring that the obstacle won't overlap with the snake or food.
      - Updating start game function:
        https://github.com/witzakr/SNAKEGAME/blob/f9e83f048dbd18cbb9384fd6b56ff21d544507da/level2.js#L101-L105
        Modification makes obstacles spawn at the beginning of the game.
      - Updating the reset game function:
        https://github.com/witzakr/SNAKEGAME/blob/f5c223e15c089f7db0c20bd101d4a05f6cc38f8a/level2.js#L107-L114
        After the reset of the game, the obstacle will appear on the canvas.
      - Drawing the obstacle function:
        https://github.com/witzakr/SNAKEGAME/blob/f5c223e15c089f7db0c20bd101d4a05f6cc38f8a/level2.js#L124-L126
        Works the same way as the drawing functions mentioned in the 10th point.
      - Making obstacles spawn every 5 seconds:
        https://github.com/witzakr/SNAKEGAME/blob/f5c223e15c089f7db0c20bd101d4a05f6cc38f8a/level2.js#L162-L166

        ---------------------------------------------------------------------
 14. Features in the 3rd level:
 https://github.com/witzakr/SNAKEGAME/blob/f5c223e15c089f7db0c20bd101d4a05f6cc38f8a/level3.js#L31-L70
3rd level is considered a free run level, which means that there are no score limits and users can just test themselves to see how much they can score.


---------------------------------------------------------------------------------------
Research:
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
- https://www.geeksforgeeks.org/create-a-snake-game-using-html-css-and-javascript/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
----------------------------------------------------------------------------------------------
Summary:
Overall making the snake game was a quite challenging task. It was definitely something new and it took me a while to finish this. It required plenty of research and learning new things, but eventually, I managed to finish it. 
I am pretty happy with my performance and I think I am ready to continue the path of becoming a front-end designer.
             
