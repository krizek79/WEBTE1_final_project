class Ui {

    constructor(game) {
        this.canvas = game.canvas
        this.context = game.context
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

    drawPauseButton() {
        this.context.font = "32px Comic Sans MS"
        this.context.textAlign = "center"
        this.context.fillStyle = "grey"
        this.context.fillRect(0, 0, 100, 100)
        this.context.fillStyle = "red"
        this.context.fillText("Pause", 50, 60)
    }
}