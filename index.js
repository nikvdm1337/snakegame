import {paint} from "./render";
import {checkCollision, eatApple, initialState, moveSnake} from "./state";

const game = {
    state: initialState
};

let direction = "down"
function bindControls(state) {
    document.addEventListener("keydown", event => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }

        if (event.code === "ArrowDown") {
            state.direction = "down";
        } else if (event.code === "ArrowUp") {
            state.direction = "up";
        } else if (event.code === "ArrowLeft") {
            state.direction = "left";
        } else if (event.code === "ArrowRight") {
            state.direction = "right";
        }
    });
}

const initializeGame = function () {

    // state update cycle
    const stateUpdateIntervalId = setInterval(function() {
        moveSnake(game.state)
        eatApple(game.state)
        checkCollision(game.state)
        if(game.state.colided) {
            clearInterval(stateUpdateIntervalId);
        }
    },80)

    // render cycle
    setInterval(function() {
        paint(game.state)
    },32)

    bindControls(game.state);
    paint(initialState);
};

initializeGame();

