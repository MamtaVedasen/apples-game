class Shinigami extends BaseClass{
    constructor(x,y){
    super(x,y,80,80);
    this.image = loadImage("ryuk.png");
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = 450;
        super.display();
    }
}