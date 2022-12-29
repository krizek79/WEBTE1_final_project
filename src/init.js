(function () {
    const level = new Level({
        element: document.querySelector("#gameContainer"),
        canvas: document.querySelector("#gameCanvas")
    })
    level.canvas.width = level.element.offsetWidth
    level.canvas.height = level.element.offsetHeight
    level.context.imageSmoothingEnabled = false
    level.init()
})()
//treba to porobiť dáko aby sa dalo incializovať keď sa klikne start game až ale nechce do 
// toho rýpať  
function startGame(){
    let startDiv = document.getElementById("gameStart");
    let gameOver = document.getElementById("gameOver");
    let gameCanvas = document.getElementById("mainFrame");
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
    
}

//game over je keď jedna opica prejde dole
function gameOver(){
    let startDiv = document.getElementById("gameStart");
    let gameOver = document.getElementById("gameOver");
    let gameCanvas = document.getElementById("gameCanvas");
    startDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display = "block";
}