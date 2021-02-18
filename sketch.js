var background1 , backImage;
var cat , cat_1 , cat_2 , cat_3 , cat_4;
var mouse , mouse_1 , mouse_2 , mouse_3 , mouse_4;

function preload(){
backImage = loadImage("garden.png");
cat_1 = loadImage("cat1.png");
cat_2 = loadAnimation("cat2.png" , "cat3.png");
cat_4 = loadImage("cat4.png");
mouse_1 = loadImage("mouse1.png");
mouse_2 = loadAnimation("mouse2.png" , "mouse3.png");
mouse_4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(950,700);
    background1 = createSprite(465,353,90,60);
    background1.addImage("background",backImage);

    cat = createSprite(850,550,500,500);
    cat.addImage("cat_stand",cat_1);
    cat.scale = 0.1;
cat.velocityX = 0;
    mouse = createSprite(50,550,500,500);
    mouse.addImage("mouse_stand",mouse_1);
    mouse.scale = 0.1;
}

function draw(){
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addImage("cat_stop" , cat_4);
    cat.changeImage("cat_stop");
    mouse.addImage("mouse_stop" , mouse_4);
    mouse.changeImage("mouse_stop");
}
    drawSprites();
}

function keyPressed(){

    if (keyCode === LEFT_ARROW){
        cat.velocityX = cat.velocityX+-3;
        cat.addAnimation("cat_running" , cat_2);
        cat.changeAnimation("cat_running");
        mouse.addAnimation("mouse_teasing" , mouse_2);
        mouse.changeAnimation("mouse_teasing");
    }
}