const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext("2d");



export function paint(state) {
  const canvas = document.getElementById("gameboard");
  const ctx = canvas.getContext("2d");

  // Color of the canvas
  ctx.fillStyle = "lightblue";
  // Setting the size and starting point of the canvas
  ctx.fillRect(0, 0, state.boardWidth, state.boardHeight);
  // Setting the width of the line
  ctx.lineWidth = 1;
  // Drawing line for the wall
  ctx.strokeRect(0.5, 0.5, state.boardWidth, state.boardHeight);
  // Color of the snake
  ctx.fillStyle = "green";
  // Setting size and position of the snake
  state.snake.forEach(e => {
    ctx.fillRect(e.x, e.y, state.snakeSize, state.snakeSize);
  });

  // Color of the apple
  ctx.fillStyle = "red";
  // Setting size and position of the apple
  ctx.fillRect(state.ax, state.ay, state.snakeSize, state.snakeSize);

  drawDebugGrid(state, ctx);

  console.log(JSON.stringify(state, null, 2));
}
function drawDebugGrid(state, ctx) {
  const columns = state.boardWidth / state.snakeSize;
  const rows = state.boardHeight / state.snakeSize;

  ctx.lineWidth = 1;
  ctx.strokeStyle = "gray";

  // draw columns
  for (let i = 0; i < columns; i++) {
    const x = i * state.snakeSize + 0.5;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, state.boardHeight);
    ctx.closePath();
    ctx.stroke();
  }

  // draw rows
  for (let i = 0; i < rows; i++) {
    const y = i * state.snakeSize + 0.5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(state.boardWidth, y);
    ctx.closePath();
    ctx.stroke();
  }
}
