export const initialState = {
  x: 1,
  y: 1,
  boardWidth: 3,
  boardHeight: 3
};

export function moveSnake(state, direction) {
  switch (direction) {
    case "down":
      state.y = (state.y + 1) % (state.boardHeight + 1);
      break;
    case "up":
      state.y--;
      if (state.y < 0) {
        state.y = state.boardHeight;
      }
      break;
    case "left":
      state.x = (state.x + 1) % (state.boardWidth + 1);
      break;
    case "right":
      state.x++;
      if (state.x > state.boardWidth) {
        state.x = 0;
      }
      break;
  }
}
