class Aircraft{
    constructor(x,y,diameter){
        var options ={
            isStatic:false
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.image = loadImage("aircraft.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.diameter,this.diameter);
        

    }
}