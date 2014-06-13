
function physics_init_pre() {
  prop.physics={};

  prop.physics.world=new CANNON.World();
  prop.physics.world.gravity.set(0,0,0);
  prop.physics.world.broadphase=new CANNON.NaiveBroadphase();
}

function physics_update() {
  prop.physics.world.step(delta());
}
