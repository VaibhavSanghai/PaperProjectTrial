//Making all Matter. codes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup () {
	createCanvas(800, 700);

	//Adding the engine and the world to the canvas
	engine = Engine.create();
	world = engine.world;

	//Creating the bodies
	scrambledPaper = new Paper(200,600,30);
	dustbin = new Dustbin(700,650,50,50);
	ground = new Ground(400,690,800,10);
}

function draw() {
  //Running the engine
	Engine.run(engine);

  //Adding the background
  background(0);

  //Displaying all objects
  scrambledPaper.display();
  dustbin.display();
  ground.display();
}

//Making the UpArrowKey function
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(scrambledPaper.body,scrambledPaper.body.position,{x : 85, y :-85});
	}
}