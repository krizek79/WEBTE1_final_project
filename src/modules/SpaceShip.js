class SpaceShip {

    constructor(config) {
        this.element = config.element
        this.canvas = config.canvas
        this.ctx = this.canvas.getContext("2d")
        this.ctx.imageSmoothingEnabled = false
    }

    init() {
        console.log("SpaceShip", this)
        const image = new Image()
        image.src = "../resources/images/spaceShip.png"
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0, image.width, image.height)
        }
    }
}