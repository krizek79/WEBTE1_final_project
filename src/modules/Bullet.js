class Bullet {

    constructor(x, y, spaceShip) {
        this.spaceShip = spaceShip
        this.image = new Image()
        this.image.src = "../resources/images/bullet.png"
        this.x = x
        this.y = y
        this.ya = 5
    }

    init() {
        this.image.onload = () => {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // Detection of mobile orientation
                if (window.matchMedia("(orientation:portrait)").matches) {
                    this.scale = 4
                    this.xOffset = 32
                    this.yOffset = 50
                    this.enemyXOffset = 10
                } else {
                    this.scale = 2
                    this.xOffset = 16
                    this.yOffset = 20
                    this.enemyXOffset = 15
                }
            } else {
                this.scale = 2
                this.xOffset = 16
                this.yOffset = 25
                this.enemyXOffset = 10
            }
            this.x = this.x + (this.spaceShip.image.width * this.spaceShip.scale) / 2 - this.xOffset
            this.y -= this.yOffset
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale)
    }

    updatePosition() {
        this.y -= this.ya
    }

    checkCollision(enemies) {
        let hitDetected = false
        for (let i = 0; i < enemies.length; i++) {
            if (this.x >= enemies[i].x - this.enemyXOffset
                && this.x <= enemies[i].x + enemies[i].image.width * enemies[i].scale
                && this.y <= enemies[i].y + enemies[i].image.height * enemies[i].scale
            ) {
                hitDetected = true
                enemies[i].healthPoints -= this.spaceShip.damage
            }
        }
        return hitDetected
    }
}