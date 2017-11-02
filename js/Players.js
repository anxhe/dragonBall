function Players(name, position, keys){
  this.name = name;
  this.position = position;
  this.width = 100;
  this.height = 100;
  this.speed = 100;
  this.keys = keys ;
  this.img = new Image();
  this.img.src = "images/" + name + ".png";
  this.score = 0;
  this.life = 100;
}

Players.prototype.draw = function(){
  context.drawImage(this.img, this.position.x, this.position.y, 100, 100);

}

Players.prototype.checkBoundaries = function(e){
  switch (e.keyCode) {
    case this.keys.LEFT:
      return this.position.x - this.speed >= 0;
    case this.keys.RIGHT:
      return this.position.x + this.speed <= 600;
    case this.keys.UP:
      return this.position.y - this.speed >= 0;
    case this.keys.DOWN:
      return this.position.y + this.speed <= 600;
  }
}

Players.prototype.move = function(e) {
  switch (this.checkBoundaries(e) && e.keyCode) {
    case this.keys.LEFT:
      this.position.x -= this.speed;
      break;
    case this.keys.RIGHT:
      this.position.x += this.speed;
      break;
    case this.keys.UP:
      this.position.y -= this.speed;
      break;
    case this.keys.DOWN:
      this.position.y += this.speed;
      break;
  }
}

Players.prototype.win = function() {
  if(this.score >= 4){
    console.log(`Player ${this.name} wins.`);
  }
}

Players.prototype.loose = function() {
  if (this.life == 0) {
    console.log(`Player ${this.name} loose.`);
  }
}
