var ship, ship_img,shipRight_img,shipLeft_img;
var ufo1,ufo1_img;
var borderRight,borderLeft;
var ufoGroup;

function preload(){
    ship_img = loadImage("assets/ship.png");
    shipRight_img = loadImage("assets/ship_right.png");
    shipLeft_img = loadImage("assets/ship_left.png");
    ufo1_img = loadImage("assets/ufo1.png");
}

function setup(){
    createCanvas(500,700);

    borderRight = createSprite(499,250,5,1000);
    borderLeft = createSprite(1,250,5,1000);
    borderRight.shapeColor = "orange";
    borderLeft.shapeColor = "orange";
    

    ship = createSprite(250,600);
    ship.addImage("ship",ship_img);
    ship.addImage("shipRight",shipRight_img);
    ship.addImage("shipLeft",shipLeft_img);
    ship.scale = 2;

    ufoGroup = new Group();

}

function draw(){
    background("black");
    fill("white");  
    text(mouseX + " - " + mouseY, mouseX,mouseY);

    if(keyDown(UP_ARROW)){
        ship.position.y =ship.position.y - 5;
        ship.changeAnimation("ship", ship_img);
    }
    if(keyDown(DOWN_ARROW)){
        changePosition(ship,0,5);
        ship.changeAnimation("ship", ship_img);
    }
    if(keyDown(RIGHT_ARROW)){
        changePosition(ship,5,0);
        ship.changeAnimation("shipRight", shipRight_img);
    }
    if(keyDown(LEFT_ARROW)){
        changePosition(ship,-5,0);
        ship.changeAnimation("shipLeft", shipLeft_img);
    }

    if(keyWentUp(RIGHT_ARROW)){
        ship.changeAnimation("ship", ship_img);
    }
    if(keyWentUp(LEFT_ARROW)){
        ship.changeAnimation("ship", ship_img);
    }
    if(keyDown("space")){
        var bullets = createSprite(ship.position.x,ship.position.y,10,30);
        bullets.velocity.y = -8;
        bullets.shapeColor=rgb(random(1,255),random(1,255),random(1,255));
        ship.depth = bullets.depth;
        ship.depth = ship.depth+1;
    }

    ufoGroup.bounceOff(borderRight);
    ufoGroup.bounceOff(borderLeft);
    drawSprites();
    spawnUfos();
}


function changePosition(sprite,x,y){
    sprite.position.x = sprite.position.x + x;
    sprite.position.y = sprite.position.y + y; 
}

function spawnUfos(){
    if(frameCount%30 === 0){
        ufo1 =createSprite(random(1,500),0,50,50);
        ufo1.addImage("ufo1", ufo1_img);
        ufo1.scale= 3
        ufo1.velocity.y = random(1,3);
        ufo1.velocity.x = random(-3,3);
        ufo1.lifetime=200;
        ufoGroup.add(ufo1);
        console.log(ufo1.velocity.y,ufo1.velocity.x);
    }
}
