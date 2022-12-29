(async function () {
    const levels = await fetchData()
    const level = new Game({
        element: document.querySelector("#gameContainer"),
        canvas: document.querySelector("#gameCanvas"),
        levels: levels,
        currentLevelIndex: 0
    })
    level.canvas.width = level.element.offsetWidth
    level.canvas.height = level.element.offsetHeight
    level.context.imageSmoothingEnabled = false
    level.init()
    level.startGameLoop()
})()

async function fetchData() {
    const response = await fetch("../resources/data.json")
    return await response.json()
}