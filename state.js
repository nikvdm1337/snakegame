export const initialState = {
    snake: [{x: 100, y: 0}, {x: 50, y: 0}, {x: 0, y: 0}],
    boardWidth: 700,
    boardHeight: 700,
    ax: 100,
    ay: 100,
    snakeSize: 50,
    score: 0
};

export function moveSnake(state, direction) {
    const newHead = moveHead(direction, state, state.snake[0]);
    state.snake = [newHead].concat(state.snake.slice(0, state.snake.length - 1))
    onAppleEat(state);
}

function moveHead(direction, state, head) {
    const increment = state.snakeSize;
    switch (direction) {
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

function onAppleEat(state) {
    if (state.snake[0].x === state.ax && state.snake[0].y === state.ay) {
        let eatenApple = {x: state.ax, y: state.ay, color: 'blue'}
        state.snake.push(eatenApple)
        state.score++
        updateGameScore(state)
        state.ax = generateRandomPositionOnGameboardForX(state);
        state.ay = generateRandomPositionOnGameboardForY(state);
    }
}

function updateGameScore(state) {
    document.getElementById('gameScore').innerHTML = `Apples eaten: ${state.score}`

}



