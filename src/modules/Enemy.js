class Enemy {

    constructor() {
        this.image = new Image()
        this.image.src = "../resources/images/monkey.png"
        this.healthPoints = 2
    }

    init(canvas) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.scale = 0.3
            this.ya = (Math.random() * (200 - 100) + 100) / 100
            this.xa = (Math.random() * (100 + 100) - 100) / 100
        } else {
            this.scale = 0.12
            this.ya = (Math.random() * (80 - 30) + 30) / 100
            this.xa = (Math.random() * (100 + 100) - 100) / 100
        }

        this.image.onload = () => {
            let xMax = canvas.width - this.image.width * this.scale
            let xMin = 1  + this.image.width * this.scale
            this.x = Math.floor(Math.random() * (xMax - xMin + xMin))
            this.y = -(this.image.height * this.scale + 10)
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale)
    }

    updatePosition(canvas) {
        if (this.x <= 0 || this.x + this.image.width * this.scale >= canvas.width) {
            this.xa *= -1
        }

        this.y += this.ya
        this.x += this.xa
    }
}