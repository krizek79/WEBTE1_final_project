class Level {

    constructor(config) {
        this.element = config.element
        this.canvas = config.canvas
        this.context = this.canvas.getContext("2d")
        this.spaceShip = new SpaceShip(this)
    }

    init() {
        console.log("Level", this)
        this.startGameLoop()

        this.spaceShip.init(this.canvas, this.context)
    }

    startGameLoop() {
        const step = () => {

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

            window.addEventListener('resize', () => {
                this.canvas.width = window.innerWidth
                this.canvas.height = window.innerHeight
            })

            this.spaceShip.updatePosition(this.canvas)
            this.spaceShip.draw(this.context)

            requestAnimationFrame(() => {
                step()
            })
        }
        step()
    }
}