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
  world.addPlayer(goku);
  world.addPlayer(picolo);
  checkScore(goku, picolo);

  document.addEventListener('keyup', function(e) {
    if ((Object.values(keysPlayersGoku).indexOf(e.keyCode)) >= 0){
      goku.move(e);
    } else if ((Object.values(keysPlayersPicolo).indexOf(e.keyCode)) >= 0){
      picolo.move(e);
    }
    world.draw();

    if (e.keyCode == keysPlayersGoku.SHOW){
      world.checkArea(goku);
      checkScore(goku);
    } else if (e.keyCode == keysPlayersPicolo.SHOW){
      world.checkArea(picolo);
      checkScore(picolo);
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

function checkScore(player){
  var score = document.getElementById("score-"+ player.name);
  score.innerText = " " + player.score;
}
