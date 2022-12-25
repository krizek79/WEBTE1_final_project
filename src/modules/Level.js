class Level {

    constructor(config) {
        this.element = config.element
        this.canvas = this.element.querySelector("#gameCanvas")
        this.ctx = this.canvas.getContext("2d")
    }

    init() {
        console.log("Level", this)
        const spaceShip = new SpaceShip({
            element: this.element,
            canvas: this.canvas
        })
        spaceShip.init()
    }
}