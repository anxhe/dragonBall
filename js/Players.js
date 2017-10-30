function Players(position, keys, src){
  this.position = position;
  this.speed = 30;
  this.keys = keys ;
  this.img = new Image();
  this.img.src = src;
}

Players.prototype.checkBoundaries = function(e){
  switch (e.keyCode) {
    case this.keys.LEFT:
      return this.position.x - this.speed >= 0;
    case this.keys.RIGHT:
      return this.position.x + this.speed <= 400;
    case this.keys.UP:
      return this.position.y - this.speed >= 0;
    case this.keys.DOWN:
      return this.position.y + this.speed <= 400;
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
