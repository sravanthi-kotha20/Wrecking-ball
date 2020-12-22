class SlingShot{

    constructor(point1,body2)
    {
        var options = {
            pointA : point1,
            bodyB : body2,
            length : 150,
            stiffness :1.5
      }
      
      this.sling=Constraint.create(options);
      World.add(myWorld,this.sling);
     // console.log(this.sling);
     
    }

    display()
    {
         var posA= this.sling.pointA;
         var posB= this.sling.bodyB.position;
         push();
         strokeWeight(2);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
    }

}