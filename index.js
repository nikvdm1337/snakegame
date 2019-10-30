import {paint, paintGameOver} from "./render.js";
import {checkCollision, eatApple, initialState, moveSnake} from "./state.js";

const game = {
    state: initialState
};

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
    const stateUpdateIntervalId = setInterval(function () {
        paint(game.state)
        moveSnake(game.state)
        eatApple(game.state)
        checkCollision(game.state)
        if (game.state.colided) {
            clearInterval(stateUpdateIntervalId);
            paintGameOver()
        }
    }, 120)

    // render cycle

    bindControls(game.state);
    paint(initialState);
};

const resetGameState = function () {
    location.reload()
}

let startButton = document.querySelector('#gameStart')

startButton.addEventListener('click',resetGameState )


initializeGame();

