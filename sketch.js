
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


	Engine.run(engine);

	 paper1 = new paper(50,250,70);
	 ground1 = new Ground(400,680,800,20);
	dustbin1 = new dustbin(600,540,200,300);
	 //dustbin2 = new dustbin(510,620,10,80);
	 //dustbin3 = new dustbin(690,620,10,80);
	
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();
  paper1.display();
  ground1.display();
  dustbin1.display();
 //dustbin2.display();
 // dustbin3.display();

  keyPressed();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-50});
}
}



