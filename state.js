export const initialState = {
    snake: [{x: 80, y: 0}, {x: 60, y: 0}, {x: 40, y: 0}],
    boardWidth: 400,
    boardHeight: 400,
    ax: 100,
    ay: 100,
    snakeSize: 20,
    score: 0,
    direction: "right",
    collided: false

};

export function moveSnake(state) {
    const newHead = moveHead(state, state.snake[0]);
    state.snake = [newHead].concat(state.snake.slice(0, state.snake.length - 1))

}

function moveHead(state, head) {
    const increment = state.snakeSize;
    switch (state.direction) {
        case "down":
            return {
                x: head.x,
                y: (head.y + increment) % state.boardHeight
            };
        case "up":
            let y = head.y - increment;
            if (y < 0) {
                y = state.boardHeight - increment;
            }
            return {
                x: head.x,
                y
            }
        case "right":
            return {
                x: (head.x + increment) % state.boardWidth,
                y: head.y
            };
            break;
        case "left":
            let x = head.x - increment;
            if (x < 0) {
                x = state.boardWidth - increment;
            }
            return {
                x,
                y: head.y
            }
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

export function eatApple(state) {
    if (state.snake[0].x === state.ax && state.snake[0].y === state.ay) {
        let eatenApple = {x: state.ax, y: state.ay, ignoreCollision: true}
        state.snake.push(eatenApple)
        state.score++
        updateGameScore(state)
        state.ax = generateRandomPositionOnGameboardForX(state);
        state.ay = generateRandomPositionOnGameboardForY(state);
    }
}


export function checkCollision(state) {
    const snakeHead = state.snake[0];
    for (let i = 1; i < state.snake.length; i++) {
        const bodyItem = state.snake[i]
        if (snakeHead.x === bodyItem.x && snakeHead.y === bodyItem.y && !bodyItem.ignoreCollision) {
            state.colided = true
            console.log("BOOM")
            console.log(state)
        }
    }
    return false;
}

function spawnAppleNotOnSnake(state) {
    for (let i = 0; i < state.snake.length; i++) {
        if (state.ax === state.snake[i].x && state.ay === state.snake[i].y) {
            return state.ax = generateRandomPositionOnGameboardForX(state);
            return state.ay = generateRandomPositionOnGameboardForY(state);
        }
    }
    return false;
}

function updateGameScore(state) {
    document.getElementById('gameScore').innerHTML = `Apples eaten: ${state.score}`
}



