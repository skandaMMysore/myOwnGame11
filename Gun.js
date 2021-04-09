class Gun{
    constructor(x,y,diameter){
        var options={
            isStatic:false,

        }
        this.body = Bodies.circle(x,y,this.diameter,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.diameter,this.diameter);
    }
}