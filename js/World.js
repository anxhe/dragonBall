function World(context) {
  this.ctx = context;
  this.img = new Image();
  this.img.src = "images/world.png";
  this.img.addEventListener('load', this.draw.bind(this));
  this.players = [];
  this.balls = [];
  this.interval = setInterval(this.checkCollisions.bind(this), 1000);
}

World.prototype.draw = function(){
  this.ctx.clearRect(0, 0, 500, 500);
  this.ctx.drawImage(this.img, 0, 0);
  for(var player of this.players){
    this.ctx.drawImage(player.img, player.position.x, player.position.y, 100, 100);
  }
  for(var ball of this.balls){
    this.ctx.drawImage(ball.img, ball.position.x, ball.position.y, ball.width, ball.height);
  }
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

World.prototype.checkCollisions = function(){

  for (var i = 0; i < this.players.length; i++) {
    for (var j =0; j < this.balls.length; j++) {

      var playerX = this.players[i].position.x;
      var playerY = this.players[i].position.y;
      var ballX = this.balls[j].position.x;
      var ballY = this.balls[j].position.y;

      if (playerX == ballX && playerY == ballY){
        this.players[i].score += 1;
      }
    }
  }
}
