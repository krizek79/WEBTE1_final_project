class Ui {

    constructor(game) {
        this.canvas = game.canvas
        this.context = game.context
        this.isPauseActive = false
    }

    drawCurrentLevelHeader(levelId) {
        this.context.font = "32px Comic Sans MS"
        this.context.textAlign = "center"
        this.context.fillStyle = "red"
        this.context.fillText("Level: " + levelId, this.canvas.width / 2, 50)
    }

    drawNumberOfEnemies(currentNumberOfEnemies) {
        this.context.font = "32px Comic Sans MS"
        this.context.fillStyle = "red"
        this.context.textAlign = "right"
        this.context.fillText("Enemies left: " + currentNumberOfEnemies, this.canvas.width - 10, 50)
    }

    drawPauseButton(bgColor, textColor) {
        this.context.font = "32px Comic Sans MS"
        this.context.textAlign = "center"
        this.context.fillStyle = textColor
        this.context.fillRect(0, 0, 100, 60)
        this.context.fillStyle = bgColor
        this.context.fillRect(2, 2, 96, 56)
        this.context.fillStyle = textColor
        this.context.fillText("Pause", 50, 40)
    }

    drawPauseModal(bgColor, headerColor, textColor, tipColor, damage, fireRate) {
        this.context.textAlign = "center"
        this.context.fillStyle = textColor
        this.context.fillRect(
            this.canvas.width / 2 - 300,
            this.canvas.height / 2 - 150,
            600,
            300
        )
        this.context.fillStyle = bgColor
        this.context.fillRect(
            this.canvas.width / 2 - 297,
            this.canvas.height / 2 - 147,
            594,
            294
        )
        this.context.fillStyle = headerColor
        this.context.font = "48px Comic Sans MS"
        this.context.fillText(
            "Game is paused",
            this.canvas.width / 2,
            this.canvas.height / 2 - 20
        )
        this.context.font = "24px Comic Sans MS"
        this.context.fillStyle = textColor
        this.context.fillText(
            "Current damage: " + damage,
            this.canvas.width / 2,
            this.canvas.height / 2 + 42
        )
        this.context.fillText(
            "Current fire rate: " + fireRate,
            this.canvas.width / 2,
            this.canvas.height / 2 + 72
        )
        this.context.font = "12px Comic Sans MS"
        this.context.textAlign = "left"
        this.context.fillStyle = tipColor
        this.context.fillText(
            "*Click Pause again to unpause",
            this.canvas.width / 2 + 125,
            this.canvas.height / 2 + 137
        )
    }

    isPauseClicked() {
        this.canvas.onclick = e => {
            let mouseX = e.pageX
            let mouseY = e.pageY

            if (mouseX >= 0 && mouseX <= 100 && mouseY >= 0 && mouseY <= 100) {
                this.isPauseActive = !this.isPauseActive
            }
        }
        return this.isPauseActive
    }
}