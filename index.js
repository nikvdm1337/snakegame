const gameStartElement = document.getElementById('start-game')

gameStartElement.addEventListener('click', (event) => {
    alert('Game is under construction')
})

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 40) {
        console.log('KeyDown is pressed')
    }
})

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 38) {
        console.log('KeyUp is pressed')
    }
})

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 37) {
        console.log('KeyLeft is pressed')
    }
})

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 39) {
        console.log('KeyRight is pressed')
    }
})