const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball,ground;

var myengine,myworld;



function setup() {
  createCanvas(800,400);
  
  myengine=Engine.create();
  myworld=myengine.world;

  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(0,390,400,20,options);
  World.add(myworld,ground);

  var options1={
    restitution:0.3
  }

  ball = Bodies.circle(200,50,10,options1);
  World.add(myworld,ball);

  console.log(ground);

}

function draw() {
  background(100);  

  Engine.update(myengine);

  fill("green");
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}