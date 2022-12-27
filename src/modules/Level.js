class Level {

    constructor(props) {
        this.element = props.element
        this.canvas = props.canvas
        this.context = this.canvas.getContext("2d")
        this.spaceShip = new SpaceShip(this)
        this.enemies = []
    }

    init() {
        this.startGameLoop()

        this.spaceShip.init(this.canvas)
        for (let i = 0; i < 10; i++) {
            this.enemies.push(new Monkey())
            this.enemies[i].init(this.canvas)
        }
    }

    startGameLoop() {
        const step = () => {
            // Clear canvas
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

            window.addEventListener('resize', () => {
                this.canvas.width = window.innerWidth
                this.canvas.height = window.innerHeight
            })

            // SpaceShip
            this.spaceShip.updatePosition(this.canvas)
            this.spaceShip.draw(this.context)

            // Enemies
            for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].updatePosition(this.canvas)
                this.enemies[i].draw(this.context)

                // Remove enemies past line
                if (this.enemies[i].y >= this.canvas.height) {
                    this.enemies.splice(i, 1)
                }
            }

            requestAnimationFrame(() => {
                step()
            })
        }
        step()
    }
}