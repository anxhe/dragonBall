function World(context) {
  this.ctx = context;
  this.img = new Image();
  this.img.src = "https://raw.githubusercontent.com/lostdecade/simple_canvas_game/master/images/background.png";
  this.img.addEventListener('load', this.draw.bind(this));
  this.players = [];
  this.balls = [];
  this.positionsCheck = [];
  this.gridPixelSize = 100;
  this.height = 700;
  this.width = 700;

  this.setTime = setTimeout(this.clearBall.bind(this), 2000);

}


World.prototype.draw = function(){
  this.ctx.clearRect(0, 0, 500, 500);
  this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
  for(var player of this.players){
    this.ctx.drawImage(player.img, player.position.x, player.position.y, 100, 100);
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
  this.ctx.fillRect(positionX, positionY, 100, 100);
  this.positionsCheck.push({x:positionX, y:positionY});
}

World.prototype.addPlayer = function(player){
  player.img.addEventListener('load', function(){
    this.ctx.drawImage(player.img, player.position.x, player.position.y, 100, 100);
  }.bind(this));
  this.players.push(player);
}

World.prototype.addBalls = function(ball){
  ball.img.addEventListener('load', function(){
    this.ctx.drawImage(ball.img, ball.position.x, ball.position.y, ball.width, ball.height);
  }.bind(this));
  this.balls.push(ball);
}

World.prototype.checkKeyPlayer = function(player){
  this.drawRect(player.position.x, player.position.y);
  this.checkCollisions(player);

}

World.prototype.checkCollisions = function(player){
  for(var ball of this.balls) {
    if (ball.position.x == player.position.x && ball.position.y == player.position.y){
      let ballIndex = this.balls.indexOf(ball);
      this.balls.splice(ballIndex, 1);
      player.score++;
    }
  };
}
