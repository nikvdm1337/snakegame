const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext("2d");

export function paint(state) {
    const canvas = document.getElementById("gameboard");
    const ctx = canvas.getContext("2d");

    // Color of the canvas
    ctx.fillStyle = "#6D7965";
    // Setting the size and starting point of the canvas
    ctx.fillRect(0, 0, state.boardWidth, state.boardHeight);
    // Setting the width of the line
    ctx.lineWidth = 1;
    // Drawing line for the wall
    ctx.strokeRect(0.5, 0.5, state.boardWidth, state.boardHeight);
    // Color of the snake
    ctx.fillStyle = "black";
    // Setting size and position of the snake
    state.snake.forEach(e => {
        ctx.fillRect(e.x, e.y, state.snakeSize, state.snakeSize);
    });
    // Color of snake head
    ctx.fillStyle = 'green'
    ctx.fillRect(state.snake[0].x, state.snake[0].y, state.snakeSize, state.snakeSize)
    // Color of the apple
    ctx.fillStyle = "red";
    // Setting size and position of the apple
    ctx.fillRect(state.ax, state.ay, state.snakeSize, state.snakeSize);
    ctx.fillStyle = "white";
    ctx.fillText("Score: ", 5, 10);
    ctx.fillText(state.score, 25, 20)

}

export function paintGameOver() {
    const canvas = document.getElementById("gameboard");
    const ctx = canvas.getContext("2d");
    if (true) {
        ctx.fillStyle = "white";
        ctx.fillText("GAME OVER!", 100, 100,)
    }

}



