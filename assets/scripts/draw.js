
function draw_init_pre() {
  prop.draw={};

  prop.draw.fov=60;

  prop.draw.znear=0.1;
  prop.draw.zfar=100;

  prop.draw.size={
    width:128,
    height:128
  };
}

function draw_init() {
  prop.draw.scene={};
  prop.draw.scene.earth=new THREE.Scene();

  prop.draw.camera=new THREE.PerspectiveCamera(prop.draw.fov,prop.draw.size.width,prop.draw.size.height,prop.draw.znear,prop.draw.zfar);

  prop.draw.renderer=new THREE.WebGLRenderer();
  prop.draw.renderer.setSize(prop.draw.size.width,prop.draw.size.height);
  $("body #view").append(prop.draw.renderer.domElement);

  var geometry=new THREE.BoxGeometry(1,1,1);
  var material=new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });
  var cube=new THREE.Mesh(geometry,material);
  prop.draw.scene.earth.add(cube);

  prop.draw.camera.position.z=5;
}

function draw_resize() {
  prop.draw.size.width=$(window).width();
  prop.draw.size.height=$(window).height();
  var width=prop.draw.size.width;
  var height=prop.draw.size.height;
  prop.draw.camera.fov=prop.draw.fov;
  prop.draw.camera.width=width;
  prop.draw.camera.height=height;
  prop.draw.camera.aspect=width/height;

  prop.draw.renderer.setSize(width,height);

  prop.draw.camera.updateProjectionMatrix();
}

function draw_update() {
  prop.draw.renderer.render(prop.draw.scene.earth,prop.draw.camera);
}
