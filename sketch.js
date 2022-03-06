var ryuk, basket, basketImage, ryukImage;
var bgrealm;
//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;

function preload(){
    bgrealm = loadImage("realm.jpg");
    basketImage = loadImage("basket.png")
}

function setup(){
   // engine = Engine.create();
   // world = engine.world;

    var canvas = createCanvas(1000, 1000);

    basket = createSprite(mouseX, 700, 50, 50);
    basket.addImage(basketImage);

    //ryuk = new Shinigami(500, 500);
    //basket = new Basket(520, 520);
}

function draw(){
    background(bgrealm);
    //Engine.update(engine);
    drawSprites();

    //ryuk.display();
    //basket.display();
    //console.log("sfndjhngj");
}