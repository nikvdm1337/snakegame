export const initialState = {
  x: 0,
  y: 0,
  boardWidth: 300,
  boardHeight: 500,
  ax: 100,
  ay: 100,
  snakeSize: 50
};

export function moveSnake(state, direction) {
  switch (direction) {
    case "down":
      state.y = (state.y + state.snakeSize) % state.boardHeight;
      break;
    case "up":
      state.y = state.y - state.snakeSize;
      if (state.y < 0) {
        state.y = state.boardHeight - state.snakeSize;
      }
      break;
    case "right":
      state.x = (state.x + state.snakeSize) % state.boardWidth;
      break;
    case "left":
      state.x = state.x - state.snakeSize;
      if (state.x < 0) {
        state.x = state.boardWidth - state.snakeSize;
      }
      break;
  }
  onAppleEat(state);
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
  if (state.x === state.ax && state.y === state.ay) {
    state.ax = generateRandomPositionOnGameboardForX(state);
    state.ay = generateRandomPositionOnGameboardForY(state);
  }
}
