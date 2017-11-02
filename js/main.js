var keysPlayersGoku = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SHOW: 32
}

var keysPlayerspiccolo = {
  LEFT: 65,
  RIGHT: 68,
  UP: 87,
  DOWN: 83,
  SHOW: 84
}
var context;

window.onload = function(){
  context =document.getElementById('world').getContext('2d');
  var world = new World(context);


  var positions = generateRandomPositions(17);

  var generateEnemiesBalls = function(){
    var arrayBalls = [];
    var arrayEnemies = [];
    for(var i = 0; i < positions.length;i++){
      if (i < 7){
        arrayBalls.push(generateBalls(positions[i]));

      } else if(8 < positions.length){
        arrayEnemies.push(generateEnemies(positions[i]));
      }
    }
    addBallGenerate(arrayBalls);
    addEnemiesGenerate(arrayEnemies);
  }
  generateEnemiesBalls();

  function generateBalls(position){
    var ball = new Ball(position);
    return ball
  }

  function generateEnemies(position){
    var enemy = new Enemy(position);
    return enemy
  }

  function addBallGenerate(arrayBalls){
    for (var i= 0; i < arrayBalls.length; i++){
      world.addBalls(arrayBalls[i]);
    }
  }
  function addEnemiesGenerate(arrayEnemies){
    for (var i= 0; i < arrayEnemies.length; i++){
      world.addEnemies(arrayEnemies[i]);
    }
  }


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

function generateRandomPositions(quantity) {
  var positions = []
  while (positions.length != quantity) {
    var positionX = Math.floor(Math.random() * 7) * 100;
    var positionY = Math.floor(Math.random() * 7) * 100;
    var position = positionX + ',' + positionY;
    if (positions.indexOf(position) == -1){
      positions.push(position);
    }
  }
   positions = positions.map(function(p){
     p = p.split(',');
     return { x: parseInt(p[0]), y: parseInt(p[1]) };
   });
  return positions
};
