const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//the below gameState indicates when armyMen jump out of the aircraft
var gameState = "PLAY";
var gameState = 1;
//2nd gameState of battlefield is Play1
var gameState = "PLAY1";

var invisible;

//creating the chest in which all the major coins and diamonds are present
var chest = 100;

//diamonds are for changing the planes 
var diamonds = 50;

//gold for buying all guns and grenades and so on
var gold = 20;

//weaponry is for health
var weaponry = 30;

var level = 1;

//creating health to 0
var health = 120;
//for button
var health1;

var army1,army2,army3,army4,army5;

//enemy army which must be spawned randomly
var opp1,opp2,opp3,opp4,opp5;
//creating variable for ejection from flight
var flight;
//creating variable for kills of a player
var kills = 0;
//where the players fight
var battleGround;
//creating other mountain
var mount;

//global variable for different prices of guns
var price1;
var price2;
var price4;


//for guns
var gun1;
var gun2;
var gun4;

//creating a variable for aircraft Sprite
var flightSprite;
//a sprite invisibly created for putting parachutes out
var inv;
//variable for parachute
var parachute;

var army6;

var engine,world;
var back1,back2;

 function preload(){
  armyImage = loadImage("army2.png");
  aircraftImage = loadImage("aircraft.png");
  backgroundImage = loadImage("snowImage.jpg");
  chestImage = loadImage("chest.png");
  healthImage = loadImage("plus.jpg");
  mountainImage = loadImage("mountain.png");
  parachuteImage = loadImage("parachute.png");
  gun1Image = loadImage("gun2.png");
  gun2Image = loadImage("gun4.png");
 
 }

function setup() {
  //creating canvas acc. to the screen size
  var canvas = createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

 

  
  
  //displaying the sprite not the body
  flightSprite = createSprite(320,850,10,10);
  flightSprite.addImage(aircraftImage);
  flightSprite.scale = 0.86;

  
 
  
 
  
  
}

function draw() {
  if(backgroundImage);
  background(backgroundImage);
   //when key pressed is space,then the code gets executed and gameState is 1
   if(gameState === 1){
    if(keyCode === 32){
      flightSprite.velocityY = -2;
      flightSprite.velocityX = 0;
    
      //army creation
  
      army1 = createSprite(310,flightSprite.y-30,10,10);
      army1.addImage(armyImage);
      army1.scale = 0.36;
      army1.visible = false;
      army1.velocityY = -2;
      army1.velocityX = 0;
      
      //army2 is under the same track of the army1
      army2 = createSprite(260,flightSprite.y+30,10,10);
      army2.addImage(armyImage);
      army2.scale = 0.36;
      army2.visible = false;
      army2.velocityY = -2;
      army2.velocityX = 0;
  
      army3 = createSprite(210,flightSprite.y-40);
      army3.addImage(armyImage);
      army3.scale = 0.36;
      army3.visible = false;
      army3.velocityY = -2;
      army3.velocityX = 0;
  
      army4 = createSprite(160,flightSprite.y+40);
      army4.addImage(armyImage);
      army4.scale = 0.36;
      army4.visible = false;
      army4.velocityY = -2;
      army4.velocityX = 0;
  
      army5 = createSprite(110,flightSprite.y-50);
      army5.addImage(armyImage);
      army5.scale = 0.36;
      army5.visible = false;
      army5.velocityY = -2;
      army5.velocityX = 0;
    
      fill("brown");
      stroke("black");
      strokeWeight(3.5);
      circle(90,160,75);
  
      textSize(20);
      stroke("red");
      strokeWeight(3.5);
      text("Levels",65,155);
      stroke("green");
      strokeWeight(2.5);
      text(+level,80,182);
      
      chest1 = createSprite(1350,180);
      chest1.addImage(chestImage);
      chest1.scale = 0.66;
  
      health1 = createSprite(1350,330);
      health1.addImage(healthImage);
      health1.scale = 0.30;
  
      //circle for health
      fill("brown");
      stroke("black");
      strokeWeight(3.5);
      circle(1455,320,80);
  
      textSize(20);
      text("Health:",1430,320);
      text(+health,1435,340);
      
      
      //circle for chest
      fill("purple");
      stroke("black");
      strokeWeight(3.5);
      circle(1455,200,80);
      
      textSize(20);
      stroke("red");
      strokeWeight(3.5);
      text("Chest:",1430,190);
      text(+chest,1435,220);
    }
  }
 
 
    
  
  
 
  
  
    

  

  //when left arrow gets pressed then the army sprite will be visible
  if(keyCode === LEFT_ARROW){
    

    //created sprite for displaying parachutes
    inv = createSprite(250,600,340,100);
    inv.visible = false;
    inv.display();
  }


  /*if(army1.isTouching(inv)){
    parachute = createSprite(200,200);
    parachute.addImage(parachuteImage);
    parachute.display();
  }
  */
  //if keyPressed is Down arrow, then the code below gets executed
  if(keyCode === DOWN_ARROW){
   
    gameState = "PLAY";
  }
  if(gameState === "PLAY"){
    
    




    

    army1.visible = true;
    army1.velocityY = 0.5;
    army1.velocityX = 0;
    

    army2.visible = true;
    army2.velocityY = 0.5;
    army2.velocityX = 0;

    army3.visible = true;
    army3.velocityY = 0.5;
    army3.velocityX = 0;

    army4.visible = true;
    army4.velocityY = 0.5;
    army4.velocityX = 0;

    army5.visible = true;
    army5.velocityY = 0.5;
    army5.velocityX = 0;

    mountainy = createSprite(780,730,displayWidth,displayHeight);
    mountainy.addImage(mountainImage);
    mountainy.scale = 3.8;
    mountainy.display();
  }
  //when i press g key then gameState turns to play
  if(keyCode === 107){
    gameState = "PLAY1";
  } 
  if(gameState === "PLAY1"){
    army6 = createSprite(700,750);
    army6.addImage(armyImage);
    army6.scale = 0.8;
    army6.display();
  }
    
   
    
    




    
  
  
  //creating buy function to select guns by purchases from the chest
  function buy(){
    if(keyCode === RIGHT_ARROW){
      gun1 = createSprite(1560,200);
      gun1.addImage(gun1Image);
      gun1.scale = 0.5;
      gun1.display();
      
      gun2 = createSprite(1560,300);
      gun2.addImage(gun2Image);
      gun2.scale = 0.5;
      gun2.display();

      //price set for gun1
      price1 = 2;

      //price for gun2
      price2 = 4;
      
    }
    //when the a key isPressed then the chest value gets decreased by 2
    if(keyCode === 65){
      chest = chest - 2;
    }
    //when the b key gets pressed the chest value gets decreased by 4
    else if(keyCode === 66){
      chest = chest - 4;
    }
  }
  
  
  
  
  

  
  
 
  
  drawSprites();
}

