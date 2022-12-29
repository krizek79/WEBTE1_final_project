class Game {

    constructor(props) {
        this.element = props.element
        this.canvas = props.canvas
        this.context = this.canvas.getContext("2d")
        this.levels = props.levels
        this.spaceShip = null
        this.enemies = []
        this.bullets = []
        this.currentLevelIndex = props.currentLevelIndex
        this.ui = null
    }

    init() {
        this.ui = null
        this.spaceShip = null

        this.currentLevel = this.levels[this.currentLevelIndex]

        this.spaceShip = new SpaceShip()
        this.spaceShip.init(this.canvas)

        for (let i = 0; i < this.currentLevel.numberOfEnemies; i++) {
            this.enemies.push(new Enemy(this.currentLevel))
            this.enemies[i].init(this.canvas)
        }

        this.ui = new Ui(this)
    }

    spawnEnemies() {
        // TODO
    }

    startGameLoop() {
        const step = () => {
            // Resize canvas if is window resized
            window.addEventListener('resize', () => {
                this.canvas.width = window.innerWidth
                this.canvas.height = window.innerHeight
            })

            // Clear canvas
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

            // SpaceShip
            this.spaceShip.updatePosition(this.canvas)
            this.spaceShip.draw(this.context)

            // Bullets
            if (this.spaceShip.isShooting && this.spaceShip.nextShotIn === 0) {
                let bullet = new Bullet(this.spaceShip.x, this.spaceShip.y, this.spaceShip)
                this.spaceShip.nextShotIn = bullet.fireRate
                this.bullets.push(bullet)
                bullet.init()
            }

            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].draw(this.context)
                this.bullets[i].updatePosition()

                // Remove bullets past top bound
                if (this.bullets[i].y <= 0) {
                    this.bullets.splice(i, 1)
                    continue
                }

                // Detect collision with enemies
                if (this.bullets[i].checkCollision(this.enemies)) {
                    this.bullets.splice(i, 1)
                }
            }

            // Enemies
            for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].updatePosition(this.canvas)
                this.enemies[i].draw(this.context)

                // Remove enemies past bottom bound and restart current level
                if (this.enemies[i].y >= this.canvas.height) {
                    this.enemies.splice(i, 1)
                    gameOver()
                }

                // Check enemy hp
                if (this.enemies[i].healthPoints <= 0) {
                    this.enemies.splice(i, 1)
                    // Vibration on mobile after kill
                    window.navigator.vibrate(10)
                }
            }

            // UI
            this.ui.drawCurrentLevelHeader(this.currentLevel.id)
            this.ui.drawNumberOfEnemies(this.enemies.length)
            this.ui.drawPauseButton()

            // Update for weapon fireRate
            if (this.spaceShip.nextShotIn > 0) {
                this.spaceShip.nextShotIn--
            }

            requestAnimationFrame(() => {
                step()
            })
        }
        step()
    }
}