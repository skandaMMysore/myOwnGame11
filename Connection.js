class Connection{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.08,
            length:10
        }
        this.joint = Constraint.create(options);
        World.add(world,this.joint);
    }
    fly(){
        this.joint.bodyA = null;
    }
    display(){
        if(this.joint.bodyA){
            var pointA = this.joint.bodyA.position;
            var pointB = pointB;
        }
    }
}