const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;

var myEngine,myWorld;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,boxImg;
var ball;
var mySling;

function setup()
{
   createCanvas(600,400);
   myEngine=Engine.create();
   myWorld=myEngine.world;

boxImg= loadImage("/sprites/box.jpg") ;
 ground = new Ground(250,390,500,20);

box1 = new Box(250,0,50,50);
box2= new Box(250,0,50,50);
box3 = new Box(250,0,50,50);
box4 = new Box(250,0,50,50);
box5 = new Box(250,0,50,50);
box6 = new Box(250,0,50,50);
box7 = new Box(250,0,50,50);
// box8 = new Box(250,0,50,50);
// box9 = new Box(250,0,50,50);
// box10 = new Box(250,0,50,50);

box11 = new Box(350,0,50,50);
box12= new Box(350,0,50,50);
box13 = new Box(350,0,50,50);
box14 = new Box(350,0,50,50);
box15 = new Box(350,0,50,50);
box16 = new Box(350,0,50,50);
box17 = new Box(350,0,50,50);
// box18 = new Box(350,0,50,50);
// box19 = new Box(350,0,50,50);
// box20 = new Box(350,0,50,50);
//console.log(box1.position);

ball = new Ball(100,100,25);
var point= {
  x:100,
  y:100
}
mySling=new SlingShot(point,ball.body);

}

function draw()
{ background(200);
  
 Engine.update(myEngine);


  ground.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
//  box8.display();
//  box9.display();
//  box10.display();

//console.log(box1)
  box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
//  box18.display();
//  box19.display();
//  box20.display();
ball.display();
mySling.display();


}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body, { x:mouseX,y:mouseY });
}