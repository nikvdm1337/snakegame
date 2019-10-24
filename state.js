export const initialState = {
  x: 25,
  y: 25,
  boardWidth: 60,
  boardHeight: 60
};

export function moveSnake(state, direction) {
  switch (direction) {
    case "down":
      state.y++;
      break;
    case "up":
      state.y--;
      break;
    case "left":
      state.x--;
      break;
    case "right":
      state.x++;
      break;
  }
  resetPosition(state);
}

export function resetPosition(state) {
  if (state.y > state.boardHeight) {
    state.y = 0;
  } else if (state.y < 0) {
    state.y = state.boardHeight;
  } else if (state.x < 0) {
    state.x = state.boardWidth;
  } else if (state.x > state.boardWidth) {
    state.x = 0;
  }
}
