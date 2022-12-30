let game = null

async function fetchData() {
    const response = await fetch("../resources/data.json")
    return await response.json()
}

async function startGame() {
    let startDiv = document.getElementById("gameStart")
    let gameOver = document.getElementById("gameOver")
    let gameCanvas = document.getElementById("gameCanvas")
    startDiv.style.display = "none"
    gameCanvas.style.display = "block"
    gameOver.style.display = "none"

    const levels = await fetchData()
    game = new Game({
        element: document.querySelector("#gameContainer"),
        canvas: document.querySelector("#gameCanvas"),
        levels: levels,
        currentLevelIndex: 0
    })
    game.canvas.width = game.element.offsetWidth
    game.canvas.height = game.element.offsetHeight
    game.context.imageSmoothingEnabled = false
    game.init()
    game.startGameLoop()
}

function gameOver(){
    game = null
    let startDiv = document.getElementById("gameStart")
    let gameOver = document.getElementById("gameOver")
    let gameCanvas = document.getElementById("gameCanvas")
    startDiv.style.display = "none"
    gameCanvas.style.display = "none"
    gameOver.style.display = "block"
}