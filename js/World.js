function World(context) {
  this.ctx = context;
  this.img = new Image();
  this.img.src = "images/world.png";
  this.img.addEventListener('load', this.draw.bind(this));
  this.players = [];
}

World.prototype.draw = function(){
  this.ctx.clearRect(0, 0, 500, 500);
  this.ctx.drawImage(this.img, 0, 0);
  for(var player of this.players){
    this.ctx.drawImage(player.img, player.position.x, player.position.y, 100, 100);
  }
}

World.prototype.addPlayer = function(player){
  player.img.addEventListener('load', function(){
    this.ctx.drawImage(player.img, player.position.x, player.position.y, 100, 100);
  }.bind(this));
  this.players.push(player);
}
