window.addEventListener("load", function(){
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
class Player{
    constructor(game){
        this.game = game;
        this.width = 50;
        this.height = 50;
        
        this.x = 150;
        this.y = 420;
        this.speedX = 0;
    }
    update(){
        this.x += this.speedX;
    }
    draw(context){
        context.fillRect(this.x, this.y , this.width , this.height);
    }
}
class Enemy {
        constructor(game){
            this.game = game;
            this.y = 0; 
            this.speedY = Math.random() * -0.2 - 0.5;
            this.markedForDeletion = false;
            this.frameX = 0;
            this.frameY = 0;
            this.maxFrame = 37;
            this.lives = Math.floor(Math.random() * 16) +5;
            this.score = this.lives;
        }
        update(){
            this.y -= this.speedY;
            if(this.y + this.height < 0) this.markedForDeletion = true;
            if(this.frameY < this.maxFrame){
                this.frameY++;
            } else this.frameY = 0;
            }
        draw(context){
            context.strokeRect(this.x, this.y ,this.width, this.height);
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.fillText(this.lives, this.x, this.y);
            context.font = "20px Helvetica";
    
        }  
    }
class Monkey extends Enemy {
            constructor(game){
                super(game);
                this.width = 90;
                this.height = 100;
                this.x = Math.random() * (this.game.width * 0.9 - this.width);
                this.image = document.getElementById("spaceMonkey");
                this.frameY = Math.floor(Math.random() * 3);
                
            }
        }
class Game{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.enemies = [];
        this.enemiesTimer = 0;
        this.enemiesInterval = 1000;
        this.gammeOver = false;
    }
    update(deltaTime){
        this.player.update();
        this.enemies.forEach(enemy=> {
            enemy.update();
        });
        this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
        if (this.enemiesTimer > this.enemiesInterval && !this.gammeOver){
            this.addEnemy();
            this.enemiesTimer = 0;
        } else{
            this.enemiesTimer += deltaTime;
        }
    }
    draw(context){
        this.player.draw(context)
        this.enemies.forEach(enemy => {
            enemy.draw(context);
        });
    }
    addEnemy(){
        this.enemies.push(new Monkey(this));
        console.log(this.enemies);
    }
}

const game = new Game(canvas.width, canvas.height);
let lastTime = 0;
function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
}
animate(0);
});

