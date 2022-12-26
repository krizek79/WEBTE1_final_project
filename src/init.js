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