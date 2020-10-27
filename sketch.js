var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box2,box3;
var rectangle;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = createSprite(350,610,10,50);
	box1.shapeColor = "red";

	box2 = createSprite(450,610,10,50);
	box2.shapeColor = "red";
	


	engine = Engine.create();
	world = engine.world;




	packageBody = Bodies.circle(width/2 , 200 , 5 , {
		restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	keyPressed();

	var boxOptions = {
		isStatic : true
	}
	boxBody = Bodies.rectangle(width/2,630,100,10,boxOptions);
	World.add(world,boxBody);
	boxBody.shapeColor = "red";

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rectMode(CENTER);
  rect(boxBody.position.x,boxBody.position.y,100,10);
   
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}




