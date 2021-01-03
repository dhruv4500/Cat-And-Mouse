var backImage;
var cat,catImage,catAnimation,catImg2,mouse,mouseImage,mouseAnimation,mouseImg2;
var keyCode=null;
var gameState;


function preload() {

        backImage=loadImage("garden.png");
        catImage=loadAnimation("tomOne.png");
        mouseImage=loadAnimation("jerryOne.png"); 
        catAnimation=loadAnimation("tomTwo.png","tomThree.png");
        catImg2=loadAnimation("tomFour.png"); 
        mouseImg2=loadAnimation("jerryFour.png");
        mouseAnimation=loadAnimation("jerryTwo.png","jerryThree.png");

}

function setup(){
    createCanvas(1000,800);
    
    background=createSprite(500,400,10000,800);
    background.addImage(backImage);
    
 
        cat=createSprite(750,600,100,100);
        cat.addAnimation("image",catImage);
        cat.scale=0.15;

        mouse=createSprite(150,600,100,100);
        mouse.addAnimation("mImage", mouseImage);
        mouse.scale=0.15;

        gameState="play";

}

function draw() {
    

    if(gameState==="play"){

if(keyDown(LEFT_ARROW)){
        keyCode="LEFT_ARROW";
        keyPressed();
    }

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.x=236;
        cat.addAnimation("stop", catImg2);
        cat.changeAnimation("stop");

        mouse.addAnimation("stopM", mouseImg2);
        mouse.changeAnimation("stopM");

        gameState="end";
    
    }
  
    cat.setCollider("rectangle",0,0,700,1000);
    mouse.setCollider("rectangle",0,0,550,800);

    drawSprites();

    fill("white");
    text(mouseX+","+mouseY,40,85,textSize(20));

}

if(gameState==="end"){



    if(keyDown("r")){
        console.log("true");

        cat.x=750;
        cat.addAnimation("image",catImage);
        cat.changeAnimation("image");
        cat.scale=0.15;

        mouse.x=150;
        mouse.addAnimation("mImage", mouseImage);
        mouse.changeAnimation("mImage");
        mouse.scale=0.15;

        gameState="play";
    }

    fill("white");
    text("Press R To Replay",60,155,textSize(30));
}

    

  

}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catAnimation);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseRunning",mouseAnimation);
        mouse.changeAnimation("mouseRunning");
    }


}
