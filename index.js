import { paint } from "./render";

const state = {
  x: 250,
  y: 250,
  width: 10,
  height: 10
};

function bindControls() {
  document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    } else if (event.code === "ArrowDown") {
      state.y++;
    } else if (event.code === "ArrowUp") {
      state.y--;
    } else if (event.code === "ArrowLeft") {
      state.x--;
    } else if (event.code === "ArrowRight") {
      state.x++;
    } else {
      return;
    }
    paint(state);
  });
}

const initializeGame = function() {
  bindControls();
  paint(state);
};

initializeGame();
