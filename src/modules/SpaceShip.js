class SpaceShip {

    constructor() {
        this.image = new Image()
        this.image.src = "../resources/images/spaceShip.png"
        this.isDraggable = false
        this.isShooting = false
        this.nextShotIn = 0
    }

    init(canvas) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.scale = 12
        } else {
            this.scale = 5.5
        }

        this.image.onload = () => {
            this.x = (canvas.width / 2) - ((this.image.width * this.scale) / 2)
            this.y = canvas.height - ((this.image.height * this.scale) + 50)
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale)
    }

    updatePosition(canvas) {
        canvas.onmousedown = e => {
            let mouseX = e.pageX
            let mouseY = e.pageY

            if (mouseX >= this.x + ((this.image.width * this.scale) / 2) - (this.image.width * 2) &&
                mouseX <= this.x + ((this.image.width * this.scale) / 2) + (this.image.width * 2) &&
                mouseY >= this.y &&
                mouseY <= this.y + ((this.image.height * this.scale))
            ) {
                canvas.style.cursor = "none"
                this.isDraggable = true
                this.isShooting = true
            }
        }

        canvas.onmousemove = e => {
            if (this.isDraggable) {
                this.x = e.pageX - ((this.image.width * this.scale) / 2)
                this.y = e.pageY - ((this.image.height * this.scale) - 25)
            }
        }

        canvas.onmouseup = () => {
            this.isDraggable = false
            this.isShooting = false
            canvas.style.cursor = "default"
        }

        canvas.onmouseout = () => {
            this.isDraggable = false
            this.isShooting = false
            canvas.style.cursor = "default"
        }

        canvas.ontouchstart = e => {
            let touchX = e.touches[0].clientX
            let touchY = e.touches[0].clientY

            if (touchX >= this.x + ((this.image.width * this.scale) / 2) - (this.image.width * 2) &&
                touchX <= this.x + ((this.image.width * this.scale) / 2) + (this.image.width * 2) &&
                touchY >= this.y &&
                touchY <= this.y + ((this.image.height * this.scale))
            ) {
                this.isDraggable = true
                this.isShooting = true
            }
        }

        canvas.ontouchmove = e => {
            let touchX = e.touches[0].clientX
            let touchY = e.touches[0].clientY

            if (this.isDraggable) {
                this.x = touchX - ((this.image.width * this.scale) / 2)
                this.y = touchY - ((this.image.height * this.scale) - 25)
            }
        }

        canvas.ontouchend = () => {
            this.isDraggable = false
            this.isShooting = false
        }

        canvas.ontouchcancel = () => {
            this.isDraggable = false
            this.isShooting = false
        }
    }
}