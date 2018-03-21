var keysPlayersGoku = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SHOW: 32
};

var keysPlayerspiccolo = {
  LEFT: 65,
  RIGHT: 68,
  UP: 87,
  DOWN: 83,
  SHOW: 84
};

var context;

window.onload = function() {
  document.querySelector('#start').addEventListener('click', function(e){
    $('section').toggleClass('hidden');
    start();
  });
};

function start(){
  context = document.getElementById('world').getContext('2d');

  var world = new World();
  var positions = generateRandomPositions(57);

  world.addBallsEnemies(positions);

  document.addEventListener('keydown', function(e) {
    if ((Object.values(keysPlayersGoku).indexOf(e.keyCode)) >= 0){
      world.goku.move(e);
    } else if ((Object.values(keysPlayerspiccolo).indexOf(e.keyCode)) >= 0){
      world.piccolo.move(e);
    }
    world.draw();

    if (e.keyCode == keysPlayersGoku.SHOW){
      world.checkArea(world.goku);
      world.updateStatus(world.goku);
    } else if (e.keyCode == keysPlayerspiccolo.SHOW){
      world.checkArea(world.piccolo);
      world.updateStatus(world.piccolo);
    }
  });
};
