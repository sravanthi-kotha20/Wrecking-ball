class Box{
    constructor(x,y,width,height){
        
        var options = {
            'restitution' : 0.5,
            'density'     : 0.3
            }
        
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.visibility=255;
            this.image= loadImage("/wood1.png");
            World.add(myWorld,this.body);
    }
  display()
  {   var pos=this.body.position;
      var angle=this.body.angle;

      if(this.body.velocity.y !=0){
         push();
      
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
      // strokeWeight(4);
      // fill(255);
      // stroke("green");
      // rect(0,0,this.width,this.height);
        pop();
     //   console.log(this.body.velocity.y)
      }  
    else{
      var pos=this.body.position;

      World.remove(myWorld,this.body);

      this.visibility = this.visibility - 5;
      if(this.visibility > 0)
  {
     
      push();      
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        tint(255,this.visibility);
        image(this.image,0,0,this.width,this.height);
       console.log(this.visibility + " " +this.body.velocity.x+ "  " + this.body.velocity.y   );

       pop();
      }
    }
    }

 }
 
