
function load_init() {
  
}

function load_ready() {
  setTimeout(function() {
    $("#load").fadeOut(2000);
    $("#load").css("pointerEvents","none");
  },1000);
}
