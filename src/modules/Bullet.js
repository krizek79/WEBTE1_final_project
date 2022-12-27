class Bullet {

    constructor(props) {
        this.image = new Image()
        this.image.src = "../resources/images/bullet.png"
        this.scale = 3
        this.x = props.x
        this.y = props.y
        this.ya = 2
        this.damage = 1
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale)
    }

    updatePosition() {
        this.y -= this.ya
    }
}