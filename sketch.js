const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(100,100,10,10);
	bob2 = new Bob(100,100,10,10);
	bob3 = new Bob(100,100,10,10);
	bob4 = new Bob(100,100,10,10);
	bob5 = new Bob(100,100,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



