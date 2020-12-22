class Box{
    constructor(x,y,width,height){
        
        var options = {
            'restitution' : 1.0
            }
        
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            World.add(myWorld,this.body);
    }
  display()
  {   var pos=this.body.position;
      var angle=this.body.angle;
      push();
      
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      fill(255);
      stroke("green");
    //  Image(boxImg,this.body.position.x,this.body.position.y,this.width,this.height);
     rect(0,0,this.width,this.height);
      pop();
  }  
 
}