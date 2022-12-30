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
function openManual(){
    let manualDiv = document.getElementById("manual");
    manualDiv.style.display = "block";
}
function closeManual(){
    let manualDiv = document.getElementById("manual");
    manualDiv.style.display = "none";
}
function printManual(){
    let manualDiv = document.getElementById("manual");
    var divContents = document.getElementById("manual").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > <h1>Manual for SpaceMonkeys Defender Ultra Luxury first edition pimpilimpi TopG<br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}
