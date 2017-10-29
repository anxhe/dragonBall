
window.onload = function(){
  var context = document.getElementById('world').getContext('2d');
  var world = new World(context);
  var goku = new Goku({x: 0, y: 0});
  var picolo = new Picolo({x: 400, y: 400});

  world.addPlayer(goku);
  world.addPlayer(picolo);

  document.addEventListener('keyup', function(e){
    goku.move(e);
    picolo.move(e);
    world.draw();
  });
};
