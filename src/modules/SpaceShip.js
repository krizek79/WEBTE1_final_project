class SpaceShip {

    constructor() {
        this.image = new Image()
        this.image.src = "../resources/images/spaceShip.png"
        this.isDraggable = false
    }

    init(canvas, context) {
        console.log("SpaceShip", this)
        this.image.onload = () => {
            this.x = (canvas.width / 2) - ((this.image.width * 5) / 2)
            this.y = canvas.height - ((this.image.height * 5) + 50)
            context.drawImage(this.image, this.x, this.y, this.image.width * 5, this.image.height * 5)
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.image.width * 5, this.image.height * 5)
    }

    updatePosition(canvas) {
        canvas.onmousedown = e => {
            let mouseX = e.pageX
            let mouseY = e.pageY

            if (mouseX >= this.x + ((this.image.width * 5) / 2) - 5 &&
                mouseX <= this.x + ((this.image.width * 5) / 2) + 5 &&
                mouseY >= this.y &&
                mouseY <= this.y + ((this.image.height * 5))
            ) {
                console.log("nieco")
                this.isDraggable = true;
            }
        }

        canvas.onmousemove = e => {
            if (this.isDraggable) {
                this.x = e.pageX - ((this.image.width * 5) / 2)
                this.y = e.pageY - ((this.image.height * 5) - 25)
            }
        }

        canvas.onmouseup = () => {
            this.isDraggable = false
        }

        canvas.onmouseout = () => {
            this.isDraggable = false
        }
    }
}