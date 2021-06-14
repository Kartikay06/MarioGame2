var ground,groundImg;
var mario,marioStandingImg,marioJumpingImg;
var invisibleGround;
var tube,tubeImg;
var cloudsImg,clouds;
var enemy,enemy2,enemyImg;
var brick,brick2,brick3,brick4,brick5,brick6,brickImg;
var mushroom,mushroomImg,flower,flowerImg;
var castle,castleImg,flag,flagImg;
var longBrick,mediumBrick,longBrickImg,mediumBrickImg;
var gameOver,gameOverImg;

function preload(){

    groundImg=loadImage("Images/ground1.png");
    marioStandingImg=loadImage("Images/Mario_right.png");
    tubeImg=loadImage("Images/Tube.png");
    marioJumpingImg=loadImage("Images/Mario_jumping.png");
    enemyImg=loadImage("Images/enemy.png");
    brickImg=loadImage("Images/Brick.png");
    mushroomImg=loadImage("Images/mushroom.png");
    flowerImg=loadImage("Images/flower.png");
    castleImg=loadImage("Images/castle.png");
    flagImg=loadImage("Images/flag.png");
    gameOverImg=loadImage("Images/gameOver.png");
}


function setup(){
    createCanvas(1200,600);
    ground = createSprite(600,500,400,20);
    ground.addImage("ground",groundImg);
   //ground.x = ground.width /2;
   //ground.velocityX = -2;
   //ground.scale = 2.0;

    mario = createSprite(50,400,20,50);
    mario.addImage("marioStanding",marioStandingImg);
    mario.scale = 0.03;

    invisibleGround = createSprite(0,450,8000,20);
    invisibleGround.visible = false;

    tube = createSprite(600,390,40,50);
    tube.addImage("tube",tubeImg);
    tube.scale = 0.10;

    tube2= createSprite(1200,390,40,50);
    tube2.addImage("tube",tubeImg);
    tube2.scale = 0.10;

    tube3= createSprite(1900,390,40,50);
    tube3.addImage("tube",tubeImg);
    tube3.scale = 0.10;
    
    mushroom=createSprite(400,200,20,50);
    mushroom.addImage("mushroom",mushroomImg);
    mushroom.scale=0.05;
    mushroom.visible=false;

    castle=createSprite(3000,260,30,40);
    castle.addImage("castle",castleImg);
    castle.scale=0.3;

    flag=createSprite(2700,250,30,40);
    flag.addImage("flag",flagImg);
    flag.scale=0.3;

    flag.setCollider("rectangle",0,0,40,40);
    flag.debug = true;
    
    spawnBricks();
    spawnEnemys();
}
    function draw(){
            background("cyan");
            console.log(mario.x);
            if(mario.x > 800){
                console.log("mario>800",ground.x);
                console.log(displayWidth/2);
               // camera.position.x = displayWidth/2;
                camera.position.x=mario.x;
                //ground.x=displayWidth/2;
            }

            if(keyDown("space")&& mario.y >= 100) {
                mario.addImage("marioJumping",marioJumpingImg);
                mario.velocityY = -13;
            }
            mario.velocityY = mario.velocityY + 0.8;
            enemy.velocityX = -1;
            enemy2.velocityX = -1;
            enemy3.velocityX = -1;
            enemy4.velocityX = -1;
            enemy.velocityY = enemy.velocityY + 0.8;
            enemy2.velocityY = enemy2.velocityY + 0.8;

            if(keyDown(RIGHT_ARROW)){
                mario.x = mario.x+5;
            }

            if(keyDown(LEFT_ARROW)){
                mario.x = mario.x-5;
            }

            if(enemy.isTouching(tube)&&enemy2.isTouching(tube)){
                enemy.velocityX = +1;
                enemy2.velocityX = +1;
            }

            if(mario.isTouching(brick4)){
                mushroom.visible=true;
                mushroom.velocityX=3;
            }
            mushroom.velocityY=mushroom.velocityY+0.8;

            if(mario.isTouching(mushroom)){
                mushroom.visible=false;
                mushroom.destroy();
                mario.scale=0.05;
            }

            flag.depth = mario.depth;
            mario.depth = mario.depth + 1;

            if(mario.isTouching(flag)){
                console.log("GameOver");
                gameOver=createSprite(2500,300);
                gameOver.addImage("gameOver",gameOverImg);
                gameOver.scale=0.05;
            }

            if(enemy4.bounceOff(enemy3)){
                enemy4.velocityX=1;
                enemy4.velocityX=1;
            }

            mario.collide(invisibleGround);
            mario.collide(tube);
            mario.collide(tube2);
            mario.collide(tube3);
            mario.collide(enemy);
            mario.collide(enemy2);
            mario.collide(enemy3);
            mario.collide(enemy4);
            mario.collide(flag);
            enemy.collide(invisibleGround);
            enemy.collide(tube);
            enemy2.collide(invisibleGround);
            enemy2.collide(tube);
            enemy2.collide(enemy);
            enemy3.collide(tube3);
            enemy4.collide(tube3);
            enemy4.bounceOff(enemy3);
            mushroom.collide(brick4);
            mushroom.collide(tube);
            mushroom.collide(ground);

            brickCollision();            
            drawSprites();
}

    function spawnBricks(){
        brick = createSprite(250,250,20,50);
        brick.addImage("brick",brickImg);
        brick.scale = 0.05;
    
        brick2 = createSprite(300,250,20,50);
        brick2.addImage("brick2",brickImg);
        brick2.scale = 0.05;
    
        brick3 = createSprite(350,250,20,50);
        brick3.addImage("brick3",brickImg);
        brick3.scale = 0.05;
    
        brick4 = createSprite(400,250,20,50);
        brick4.addImage("brick4",brickImg);
        brick4.scale = 0.05;
        
    
        brick5 = createSprite(300,100,20,50);
        brick5.addImage("brick",brickImg);
        brick5.scale = 0.05;
    
        brick6 = createSprite(350,100,20,50);
        brick6.addImage("brick",brickImg);
        brick6.scale = 0.05; 
        
        brick7 = createSprite(800,250,20,50);
        brick7.addImage("brick",brickImg);
        brick7.scale = 0.05;
    
        brick8 = createSprite(850,250,20,50);
        brick8.addImage("brick2",brickImg);
        brick8.scale = 0.05;
    
        brick9 = createSprite(900,250,20,50);
        brick9.addImage("brick3",brickImg);
        brick9.scale = 0.05;

        brick10 = createSprite(1100,250,20,50);
        brick10.addImage("brick3",brickImg);
        brick10.scale = 0.05;

        brick11 = createSprite(1150,250,20,50);
        brick11.addImage("brick3",brickImg);
        brick11.scale = 0.05;

        brick12 = createSprite(1200,250,20,50);
        brick12.addImage("brick3",brickImg);
        brick12.scale = 0.05;

        brick13 = createSprite(1600,250,20,50);
        brick13.addImage("brick3",brickImg);
        brick13.scale = 0.05;
        
        brick14 = createSprite(1650,250,20,50);
        brick14.addImage("brick3",brickImg);
        brick14.scale = 0.05;

        brick15 = createSprite(1700,250,20,50);
        brick15.addImage("brick3",brickImg);
        brick15.scale = 0.05;

        brick16 = createSprite(1750,250,20,50);
        brick16.addImage("brick3",brickImg);
        brick16.scale = 0.05;

        brick17 = createSprite(1900,250,20,50);
        brick17.addImage("brick3",brickImg);
        brick17.scale = 0.05;

        brick18 = createSprite(1950,250,20,50);
        brick18.addImage("brick3",brickImg);
        brick18.scale = 0.05;

        brick19 = createSprite(2000,250,20,50);
        brick19.addImage("brick3",brickImg);
        brick19.scale = 0.05;

        brick20 = createSprite(2050,250,20,50);
        brick20.addImage("brick3",brickImg);
        brick20.scale = 0.05;

        brick21 = createSprite(2100,250,20,50);
        brick21.addImage("brick3",brickImg);
        brick21.scale = 0.05;

        brick22 = createSprite(1950,100,20,50);
        brick22.addImage("brick3",brickImg);
        brick22.scale = 0.05;

        brick23 = createSprite(2000,100,20,50);
        brick23.addImage("brick3",brickImg);
        brick23.scale = 0.05;

        brick24 = createSprite(2050,100,20,50);
        brick24.addImage("brick3",brickImg);
        brick24.scale = 0.05;

    }

    function brickCollision(){
        mario.collide(brick);
        mario.collide(brick2);
        mario.collide(brick3);
        mario.collide(brick4);
        mario.collide(brick5);
        mario.collide(brick6);
        mario.collide(brick7);
        mario.collide(brick8);
        mario.collide(brick9);
        mario.collide(brick10);
        mario.collide(brick11);
        mario.collide(brick12);
        mario.collide(brick13);
        mario.collide(brick14);
        mario.collide(brick15);
        mario.collide(brick16);
        mario.collide(brick17);
        mario.collide(brick18);
        mario.collide(brick19);
        mario.collide(brick20);
        mario.collide(brick21);
        mario.collide(brick22);
        mario.collide(brick23);
        mario.collide(brick23);
    }

    function spawnEnemys(){
        enemy = createSprite(800,400,20,50);
        enemy.addImage("enemy",enemyImg);
        enemy.scale = 0.10;
    
        enemy2 = createSprite(900,400,20,50);
        enemy2.addImage("enemy",enemyImg);
        enemy2.scale = 0.10;

        enemy3 = createSprite(2000,400,20,50);
        enemy3.addImage("enemy",enemyImg);
        enemy3.scale = 0.10;

        enemy4 = createSprite(2100,400,20,50);
        enemy4.addImage("enemy",enemyImg);
        enemy4.scale = 0.10;
    }

    function spawnTubes(){

    }