class Basket extends BaseClass{

    constructor(x,y){
    super(x,y,80,80);
    this.image = loadImage("basket.png");
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = 500;
        super.display();
    }
}