
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	//load the image of boy 
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

stoneObj =new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  // create 11 more mangoes objects with positions
  // mango2 1170,130,30
  //mango3 1010,140,30
	//mango41000,70,30
 //mango5 1100,70,30
	//mango6  1000,230,30
	//mango7 900,230,25
//	mango8 1140,150,25
 //	mango9 1100,230,25
 //	mango10 1200,200,25
 //	mango11 1120,50,25
	// mango12 900,160,25

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
 
	
	Engine.run(engine);
 
}

function draw() {

  background(230);
 
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
 
  

  treeObj.display();
  // display stoneObj ,all 12 mangoes , groundObject and launcherObject
 

  detectollision(stoneObj,mango1);
  // similarly as above line ,detect collision between stoneObj and all the other mangoes also  one by one
}

function mouseDragged()
{
	//use Matter.setPosition  to move stoneObj with mouse (Refer Angrybirds class 28 and see what we did in mouseDragged function)
}

function mouseReleased()
{
	launcherObject.fly();
  
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }