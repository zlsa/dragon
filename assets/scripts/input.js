
function input_init() {
  prop.input={};

  prop.input.button={
    none:0,
    left:1,
    middle:2,
    right:3
  };

  prop.input.keys={};

  prop.input.keysym={
    shift:16,
    control:17,
    a:65,
    d:68,
    e:69,
    q:81,
    s:83,
    w:87,
    x:88,

    left:37,
    up:38,
    right:39,
    down:40,
  };
}

function input_done() {
  $(window).keydown(function(e) {
    prop.input.keys[e.which]=true;
    input_keydown(e.which);
  });

  $(window).keyup(function(e) {
    prop.input.keys[e.which]=false;
    console.log(e.which);
  });

}

function input_keydown(keycode) {
  console.log(keycode);
  // called with the users' key-repeat settings
}

function input_update_pre() {
  if(prop.input.keys[prop.input.keysym.a]) {
    prop.ship.rotate_input[0]=-1;
  } else if(prop.input.keys[prop.input.keysym.d]) {
    prop.ship.rotate_input[0]=1;
  } else {
    prop.ship.rotate_input[0]=0;
  }
  if(prop.input.keys[prop.input.keysym.q]) {
    prop.ship.rotate_input[1]=-1;
  } else if(prop.input.keys[prop.input.keysym.e]) {
    prop.ship.rotate_input[1]=1;
  } else {
    prop.ship.rotate_input[1]=0;
  }
  if(prop.input.keys[prop.input.keysym.w]) {
    prop.ship.rotate_input[2]=-1;
  } else if(prop.input.keys[prop.input.keysym.s]) {
    prop.ship.rotate_input[2]=1;
  } else {
    prop.ship.rotate_input[2]=0;
  }
}
