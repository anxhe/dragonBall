var keysPlayersGoku = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SHOW: 32
}

var keysPlayersPicolo = {
  LEFT: 65,
  RIGHT: 68,
  UP: 87,
  DOWN: 83,
  SHOW: 84
}

window.onload = function(){
  var context = document.getElementById('world').getContext('2d');
  var world = new World(context);
  var goku = new Players("goku", {x: 0, y: 0}, keysPlayersGoku);
  var picolo = new Players("picolo", {x: 600, y: 600}, keysPlayersPicolo);

  var arrayBalls = generateBalls();
  for (var i= 0; i < arrayBalls.length; i++){
    world.addBalls(arrayBalls[i]);
  }
  var arrayEnemies = generateEnemies();
  for (var i= 0; i < arrayEnemies.length; i++){
    world.addEnemies(arrayEnemies[i]);
  }

  world.addPlayer(goku);
  world.addPlayer(picolo);

  document.addEventListener('keyup', function(e) {
    if ((Object.values(keysPlayersGoku).indexOf(e.keyCode)) >= 0){
      goku.move(e);
    } else if ((Object.values(keysPlayersPicolo).indexOf(e.keyCode)) >= 0){
      picolo.move(e);
    }
    world.draw();

    if (e.keyCode == keysPlayersGoku.SHOW){
      world.checkArea(goku);
      updateStatus(goku);
    } else if (e.keyCode == keysPlayersPicolo.SHOW){
      world.checkArea(picolo);
      updateStatus(picolo);
    }
  });
};

function generateBalls(){
  var balls = [];
  for (var i = 0; i < 7; i++){
    balls.push(new Ball());
  }
  return balls;
}

function updateStatus(player){
  var score = document.getElementById(`score-${player.name}`);
  score.innerText = player.score;
  var life  = document.getElementById(`life-${player.name}`);
  life.value = player.life;
}

function generateEnemies(){
  var enemies = [];
  for (var i = 0; i < 10; i++){
    enemies.push(new Enemy());
  }
  return enemies;
}
