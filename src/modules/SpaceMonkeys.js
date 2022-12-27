class SpaceMonkeys {
    constructor(game){
        this.game = game
        this.speedY = Math.random() * -1.5 - 0.5
        this.markedForDeletion = false
    }
    update(){
        this.y += this.speedY;
        if(this.y + this.height < 0) this.markedForDeletion = true;
        }
    draw(context){
        context.fillStyle = "red";
        context.fillRect(this.x, this.y ,this.width, this.height);

    }  
    }
   