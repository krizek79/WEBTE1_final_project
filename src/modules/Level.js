class Level {

    constructor(props) {
        this.element = props.element
        this.canvas = props.canvas
        this.context = this.canvas.getContext("2d")
        this.spaceShip = new SpaceShip()
        this.enemies = []
        this.bullets = []
        this.nextShotIn = 0
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

            // Bullets
            if (this.spaceShip.isShooting && this.nextShotIn === 0) {
                let bullet = new Bullet(this.spaceShip.x, this.spaceShip.y, this.spaceShip)
                this.nextShotIn = bullet.fireRate
                this.bullets.push(bullet)
                bullet.init()
            }

            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].draw(this.context)
                this.bullets[i].updatePosition()
                // Remove bullets past top bound
                if (this.bullets[i].y <= 0) {
                    this.bullets.splice(i, 1)
                }
                // Detect collision with enemies
                if (this.bullets.length !== 0 && this.bullets[i].checkCollision(this.enemies)) {
                    this.bullets.splice(i, 1)
                }
            }

            // Enemies
            for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].updatePosition(this.canvas)
                this.enemies[i].draw(this.context)

                // Remove enemies past bottom bound
                if (this.enemies[i].y >= this.canvas.height) {
                    this.enemies.splice(i, 1)
                }

                // Check enemy hp
                if (this.enemies[i].healthPoints <= 0) {
                    this.enemies.splice(i, 1)
                }
            }

            if (this.nextShotIn > 0) {
                this.nextShotIn--
            }

            requestAnimationFrame(() => {
                step()
            })
        }
        step()
    }
}