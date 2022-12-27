class SpaceShip {

    constructor() {
        this.image = new Image()
        this.image.src = "../resources/images/spaceShip.png"
        this.isDraggable = false
        this.scale = 5.5
        this.isShooting = false
    }

    init(canvas) {
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
    }
}