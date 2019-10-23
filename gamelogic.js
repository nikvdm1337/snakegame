// Create the settings for the game control
function createControlSettings () {
  document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    } else if (event.code === "ArrowDown") {
      console.log("KeyDown is pressed");
    } else if (event.code === "ArrowUp") {
      console.log("KeyUp is pressed");
    } else if (event.code === "ArrowLeft") {
      console.log("KeyLeft is pressed");
    } else if (event.code === "ArrowRight") {
      console.log("KeyRight is pressed");
    }
  });
};

// Create gameboard
function createGameboard () {
  const canvas = document.getElementById("gameboard");
  const ctx = canvas.getContext("2d");
  // Color of the canvas
  ctx.fillStyle = "lightblue";
  // Setting the size of the canvas
  ctx.fillRect(0, 0, 500, 500);
  // Setting the width of the line
  ctx.lineWidth = 3;
  // Drawing line for the wall
  ctx.strokeRect(0, 0, 500, 500);
};

export const initializeGame = function() {
    createGameboard();
    createControlSettings();
  };