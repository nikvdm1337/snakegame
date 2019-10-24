export const initialState = {
  snake: [{ x: 0, y: 0 }, { x: 50, y: 0 }, { x: 100, y: 0 }],
  boardWidth: 300,
  boardHeight: 500,
  ax: 100,
  ay: 100,
  snakeSize: 50
};

export function moveSnake(state, direction) {
//   let tmp = {...state.snake[0]};
    let tmp = state.snake.slice(1)
  moveHead(direction, state);
//   state.snake[1] = tmp;
    console.log('tmp',tmp)
   state.snake = state.snake.concat(tmp)
   console.log(state.snake)
     onAppleEat(state);
}

function moveHead(direction, state) {
  switch (direction) {
    case "down":
      state.snake[0].y =
        (state.snake[0].y + state.snakeSize) % state.boardHeight;
      break;
    case "up":
      state.snake[0].y = state.snake[0].y - state.snakeSize;
      if (state.snake[0].y < 0) {
        state.snake[0].y = state.boardHeight - state.snakeSize;
      }
      break;
    case "right":
      state.snake[0].x =
        (state.snake[0].x + state.snakeSize) % state.boardWidth;
      break;
    case "left":
      state.snake[0].x = state.snake[0].x - state.snakeSize;
      if (state.snake[0].x < 0) {
        state.snake[0].x = state.boardWidth - state.snakeSize;
      }
      break;
  }
}

function generateRandomPositionOnGameboardForY(state) {
  const k = state.boardHeight / state.snakeSize;
  return Math.floor(Math.random() * k) * state.snakeSize;
}

function generateRandomPositionOnGameboardForX(state) {
  const k = state.boardWidth / state.snakeSize;
  return Math.floor(Math.random() * k) * state.snakeSize;
}

function onAppleEat(state) {
  if (state.snake[0].x === state.ax && state.snake[0].y === state.ay) {
    state.ax = generateRandomPositionOnGameboardForX(state);
    state.ay = generateRandomPositionOnGameboardForY(state);
  }
}
