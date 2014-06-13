
function draw_init_pre() {
  prop.draw={};

  prop.draw.fov=60;

  prop.draw.znear=0.1;
  prop.draw.zfar=200;

  prop.draw.size={
    width:128,
    height:128
  };
}

function draw_init() {
  prop.draw.scene={};
  prop.draw.scene.earth=new THREE.Scene();

  prop.draw.camera=new THREE.PerspectiveCamera(prop.draw.fov,prop.draw.size.width/prop.draw.size.height,prop.draw.znear,prop.draw.zfar);

  prop.draw.renderer=new THREE.WebGLRenderer({
    antialias:true,
  });
  prop.draw.renderer.setSize(prop.draw.size.width,prop.draw.size.height);
  $("body #view").append(prop.draw.renderer.domElement);

  prop.draw.sun=new THREE.DirectionalLight( 0xffffff,2);
  prop.draw.sun.position.clone(prop.environment.sun_direction);
  prop.draw.scene.earth.add(prop.draw.sun);

  prop.draw.camera.position.z=100;
  prop.draw.camera.position.y=50;
  prop.draw.camera.lookAt(new THREE.Vector3(0,0,0));

  var c=new Content({
    url:"assets/model/dragon-v2/exports/dragon-v2.js",
    type:"threejs",
    callback:function(status,data) {
      console.log("done",data);
      prop.draw.scene.earth.add(data);
      prop.draw.dragon=data;
    }
  });

  var c=new Content({
    url:"assets/model/iss/exports/iss.js",
    type:"threejs",
    callback:function(status,data) {
      console.log("done",data);
      prop.draw.scene.earth.add(data);
      prop.draw.iss=data;
    }
  });
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
  if(prop.draw.dragon) {
    prop.draw.dragon.rotation.x+=0.01;
    prop.draw.dragon.rotation.z+=0.01;
  }
  $("#fps").text(prop.time.fps.toFixed(0));
}
