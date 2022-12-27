class Monkey extends SpaceMonkeys{
    constructor(game){
        super(game);
        this.width = 230;
        this.height = 200;
        this.x = Math.random() * (this.game.height * 0.9 - this.height);
    }
}