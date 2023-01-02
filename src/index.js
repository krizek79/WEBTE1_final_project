if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
}

let game = null

async function fetchData() {
    const response = await fetch("../resources/data.json")
    return await response.json()
}

async function startGame() {
    game = null
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

function gameOver() {
    game = null
    let startDiv = document.getElementById("gameStart")
    let gameOver = document.getElementById("gameOver")
    let gameCanvas = document.getElementById("gameCanvas")
    startDiv.style.display = "none"
    gameCanvas.style.display = "none"
    gameOver.style.display = "block"
}

function showMenu() {
    game = null
    let startDiv = document.getElementById("gameStart")
    let gameOver = document.getElementById("gameOver")
    let gameCanvas = document.getElementById("gameCanvas")
    startDiv.style.display = "block"
    gameCanvas.style.display = "none"
    gameOver.style.display = "none"
}

function openManual() {
    let manualDiv = document.getElementById("manual")
    manualDiv.style.display = "block"
}

function closeManual(){
    let manualDiv = document.getElementById("manual")
    manualDiv.style.display = "none"
}

function printManual() {
    document.getElementById("gameActions");
    let divContents = document.getElementById("manual").innerHTML
    let a = window.open('', '', 'height=800, width=1000')
    a.document.write('<html lang="en">')
    a.document.write('<head><title>Manual</title></head>')
    a.document.write('<link rel="stylesheet" href="style.css">')
    a.document.write('</head>')
    a.document.write('<body > <h1>Manual for Defender: <br>')
    a.document.write(divContents)
    a.document.write('</body></html>')
    a.document.close()
    a.print()
}

function openCredits() {
    let creditsDiv = document.getElementById("credits")
    creditsDiv.style.display = "block"
}

function closeCredits() {
    let creditsDiv = document.getElementById("credits")
    creditsDiv.style.display = "none"
}
