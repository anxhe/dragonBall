function World() {
  this.ctx = context;
  this.img = new Image();
  this.img.src = "images/world.png";
  this.img.addEventListener('load', this.draw.bind(this));
  this.goku = new Players("goku", {x: 0, y: 0}, keysPlayersGoku);
  this.piccolo = new Players("piccolo", {x: 950, y: 650}, keysPlayerspiccolo);
  this.balls = [];
  this.enemies = [];
  this.ballsFind = [];
  this.gridPixelSize = 50;
  this.height = 700;
  this.width = 1000;
  this.setTime = setTimeout(this.clearBall.bind(this), 1000);
}

World.prototype.addBallsEnemies = function(positions) {
  for(var i = 0; i < positions.length;i++){
    if (i < 7){
      this.balls.push(new Ball(positions[i], i + 1));
    } else {
      this.enemies.push(new Enemy(positions[i]));
    }
  }
}

World.prototype.draw = function(){
  this.ctx.clearRect(0, 0, this.width, this.height);
  this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
  this.goku.draw();
  this.piccolo.draw();
  for(ball of this.ballsFind){
    ball.draw(ball.position)
  }
  this.drawGrid();
}

World.prototype.clearBall = function(){
  for(var ball of this.balls){
    this.ctx.clearRect(ball.position.x, ball.position.y, ball.width, ball.height);
  }
  this.draw();
}

World.prototype.drawGrid = function() {
  this.ctx.lineWidth = 0.5;
  this.ctx.strokeStyle = "#000000";
  // horizontal grid lines
  for(var i = 0; i <= this.height; i = i + this.gridPixelSize){
    this.ctx.beginPath();
    this.ctx.moveTo(0, i);
    this.ctx.lineTo(this.width, i);
    this.ctx.closePath();
    this.ctx.stroke();
  }
  // vertical grid lines
  for(var j = 0; j <= this.width; j = j + this.gridPixelSize){
    this.ctx.beginPath();
    this.ctx.moveTo(j, 0);
    this.ctx.lineTo(j, this.height);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}

World.prototype.drawRect = function(positionX, positionY) {
  this.ctx.fillStyle='#f00';
  this.ctx.fillRect(positionX, positionY, this.gridPixelSize, this.gridPixelSize);
}


World.prototype.checkArea = function(player){
  this.drawRect(player.position.x, player.position.y);
  this.checkBallsCollisions(player);
  this.checkEnemiesCollisions(player);
}

World.prototype.checkBallsCollisions = function(player){
  for(var ball of this.balls) {
    if (ball.position.x == player.position.x && ball.position.y == player.position.y){
      let index = this.balls.indexOf(ball);
      ball.draw(ball.position);
      this.ballsFind.push(ball)
      this.balls.splice(index, 1);
      player.score++;
      player.win();
    }
  };
}
World.prototype.checkEnemiesCollisions = function(player){
  for(var enemy of this.enemies) {
    if (enemy.position.x == player.position.x && enemy.position.y == player.position.y){
      enemy.draw(enemy.position)
      player.life -= enemy.strong;
      player.loose();
    }
  };
}

World.prototype.updateStatus = function(player){
  var score = document.getElementById(`score-${player.name}`);
  score.innerText = player.score;
  var life  = document.getElementById(`life-${player.name}`);
  life.value = player.life;
}
