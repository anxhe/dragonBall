var keysPlayersGoku = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40
}

var keysPlayersPicolo = {
  LEFT: 65,
  RIGHT: 68,
  UP: 87,
  DOWN: 83
}

function Players(position){
  this.position = position;
  this.speed = 30;
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

Goku.prototype = Object.create(Players.prototype);

function Goku (position){
  this.keys = keysPlayersGoku;
  this.img = new Image();
  this.img.src = "images/goku.png";
  Players.call(this, position);
  console.log(this);
}

Picolo.prototype = Object.create(Players.prototype);

function Picolo (position){
  this.keys = keysPlayersPicolo;
  this.img = new Image();
  this.img.src = "images/picolo.png";
  Players.call(this, position);
  console.log(this);
}
