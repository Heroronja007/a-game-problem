class Hole extends BaseClass {
    constructor(x,y){
      super(x,y,1,1);
      this.image = loadImage("sprites/hole");
      this.scale = 0.5
    }
}