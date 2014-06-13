
var Ship=function() {
  this.mass=4200;
  this.radius=1.7;
  
  this.rotate_input=[0,0,0];
  this.translate_input=[0,0,0];

  this.applyThruster=function(pos,force) {
    var worldPoint=pos.copy();
    worldPoint.vadd(prop.physics.dragon.position,new CANNON.Vec3());
    prop.physics.dragon.applyImpulse(worldPoint,force);
  };
  
  this.update=function() {
    var f=40; // 90 pounds == draco force
    var r=this.radius;
    var t=this.rotate_input[0];
    this.applyThruster(new CANNON.Vec3(r,0,0),new CANNON.Vec3(0,Math.max(f*t,0),0));  // these thrusters are assumed to be pointing up and down at the left and right edges
    this.applyThruster(new CANNON.Vec3(-r,0,0),new CANNON.Vec3(0,Math.max(-f*t,0),0));

    t=this.rotate_input[1];
    this.applyThruster(new CANNON.Vec3(r,0,0),new CANNON.Vec3(0,0,Math.max(f*t,0)));  // rotation
    this.applyThruster(new CANNON.Vec3(-r,0,0),new CANNON.Vec3(0,0,Math.max(-f*t,0)));

    t=this.rotate_input[2];
    this.applyThruster(new CANNON.Vec3(0,0,r),new CANNON.Vec3(0,Math.max(f*t,0),0));  // front and back
    this.applyThruster(new CANNON.Vec3(0,0,-r),new CANNON.Vec3(0,Math.max(-f*t,0),0));
  }

  var sphereShape=new CANNON.Sphere(this.radius);
  prop.physics.dragon=new CANNON.RigidBody(this.mass,sphereShape);
  prop.physics.dragon.position.set(0,0,0);
  prop.physics.world.add(prop.physics.dragon);

};

function ship_init_pre() {
  prop.ship=new Ship();
}

function ship_update_pre() {
  prop.ship.update();
}
