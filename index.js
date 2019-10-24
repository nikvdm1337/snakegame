import { paint } from "./render";
import { initialState, moveSnake, resetPosition } from "./state";

const game = {
  state: initialState
};

function bindControls() {
  document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    let direction;
    if (event.code === "ArrowDown") {
      direction = "down";
    } else if (event.code === "ArrowUp") {
      direction = "up";
    } else if (event.code === "ArrowLeft") {
      direction = "left";
    } else if (event.code === "ArrowRight") {
      direction = "right";
    }

    if (direction) {
      moveSnake(game.state, direction);
      paint(game.state);
    }
  });
}

const initializeGame = function() {
  bindControls();
  paint(initialState);
};

initializeGame();
