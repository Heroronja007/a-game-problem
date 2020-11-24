const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var board, cornbag, slingShots, boardTwo
//var Hole , Hole2 , HoleImg
//var boardImg, boardTwoImg
var score1 = 0
var score2 = 0

function preload()
{
	boardImg=loadImage("sprites/cornhole board.png")
    boardTwoImg=loadImage("sprites/cornhole board 2.png")
    HoleImg=loadImage("sprites/hole.png")
    
}

function setup(){
 canvas = createCanvas(1200, 600)
 engine = Engine.create()
 world = engine.world
 
 bag1 = new Bag(200, 20)
 //bag2 = new Bag(300, 20)

 /*board = createSprite(1000, 500, 20, 20)
 board.addImage(boardImg)

 boardTwo = createSprite(200, 500, 20, 20)
 boardTwo.addImage(boardTwoImg)

 Hole = createSprite(145, 428, 1, 1)
 Hole.addImage(HoleImg)

 Hole2 = createSprite(1055, 428, 1, 1)
 Hole2.addImage(HoleImg)

 Hole.scale = 0.5
 Hole2.scale = 0.5*/

 boardOne = new Board1(1000, 500)
 boardTwo = new Board2(200, 500)

 HoleOne = new Hole(145, 428)
 HoleTwo = new Hole(1055, 428)

 

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bag1.body,{x:600, y:30});
    //slingshot2 = new SlingShot2(bag2.body,{x:1000, y:50});
}
 



function draw(){
    background(99, 136, 43)
    Engine.update(engine)

    drawSprites()

    if(boardOne.body.position.y >= 500){
        if(boardOne.body.position.x <= 1000){
            score1 +=1
        }
    }

    if(boardTwo.body.position.y >= 500){
        if(boardTwo.body.position.x <= 200){
            score2 +=1
        }
    }



    bag1.display()
    //bag2.display()

    slingshot.display()
    //slingshot2.display()
    
    boardOne.display()
    boardTwo.display()

    HoleOne.display()
    HoleTwo.display()

    textSize(20)
    fill("black")
    text("score:" + score1, 100, 30)
    text("score:" + score2, 1100, 30)

    /*if(bag1.isTouching(HoleTwo)){
        score1 += 3
    }
    if(bag1.isTouching(boardTwo)){
        score1 += 1
    }

    if(bag1.isTouching(HoleOne)){
        score2 += 3
    }
    if(bag1.isTouching(boardOne)){
        score2 += 1
    }*/

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bag1.body, {x: mouseX , y: mouseY});
    //}
}

//function mouseDragged2(){
    //if (gameState!=="launched"){
        //Matter.Body.setPosition(bag2.body, {x: mouseX , y: mouseY});
    //}
//}


function mouseReleased(){
    slingshot.fly();
    //slingshot2.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bag1.body);
       Matter.Body.setPosition(bag1.body, {x: 600 , y: 30});
       
    }
}


