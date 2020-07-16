const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bin1, bin2, bin3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paper = new Paper(150, 650);
	ground = new Ground(400, 690, 800, 20);

	bin1 = new Dustbin(510, 640, 20, 80);
	bin3 = new Dustbin(680, 640, 20, 80);
	bin2 = new Dustbin(600, 670, 160, 20);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:30, y:-30});
	}
}



