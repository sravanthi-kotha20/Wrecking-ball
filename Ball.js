 class Ball{
    constructor(x,y,radius){
        var ball_options={
            'restitution' : 1.0,
            'frictionAir'  :0.001,
            'density'  : 0.1
          }
        this.body=Bodies.circle(x,y,radius,ball_options);
        this.radius=radius; 
        
        World.add(myWorld,this.body);

    }

    display()
    {   push();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }

 }