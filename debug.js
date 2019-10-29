function drawDebugGrid(state, ctx) {
    const columns = state.boardWidth / state.snakeSize;
    const rows = state.boardHeight / state.snakeSize;

    ctx.lineWidth = 1;
    ctx.strokeStyle = "gray";

    // draw columns
    for (let i = 0; i < columns; i++) {
        const x = i * state.snakeSize + 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, state.boardHeight);
        ctx.closePath();
        ctx.stroke();
    }

    // draw rows
    for (let i = 0; i < rows; i++) {
        const y = i * state.snakeSize + 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(state.boardWidth, y);
        ctx.closePath();
        ctx.stroke();
    }
}
