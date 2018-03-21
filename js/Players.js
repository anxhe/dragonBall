function Players(name, position, keys){
  this.name = name;
  this.position = position;
  this.imagePosition = { x: null, y: null };
  this.width = 100;
  this.height = 100;
  this.speed = 50;
  this.keys = keys ;
  this.img = new Image(32, 48);
  this.img.src = "images/" + name + ".png";
  this.score = 0;
  this.life = 100;
}

Players.prototype.draw = function(){
  context.drawImage(
    this.img,                                   // Imagen
    this.imagePosition.x, this.imagePosition.y, // Coordenadas iniciales del sprite
    this.img.width, this.img.height,            // Medidas de la imagen en el sprite
    this.position.x + 8, this.position.y,       // Coordenadas iniciales en el canvas
    this.img.width, this.img.height             // Medidas de la imagen en el canvas
   );
};

Players.prototype.checkBoundaries = function(e){
  switch (e.keyCode) {
    case this.keys.LEFT:
      return this.position.x - this.speed >= 0;
    case this.keys.RIGHT:
      return this.position.x + this.speed <= 950;
    case this.keys.UP:
      return this.position.y - this.speed >= 0;
    case this.keys.DOWN:
      return this.position.y + this.speed <= 650;
  }
};

Players.prototype.move = function(e) {
  switch (this.checkBoundaries(e) && e.keyCode) {
    case this.keys.LEFT:
      this.position.x -= this.speed;
      this.imagePosition.x = 0;
      this.imagePosition.y = 48;
      break;
    case this.keys.RIGHT:
      this.position.x += this.speed;
      this.imagePosition.x = 0;
      this.imagePosition.y = 96;
      break;
    case this.keys.UP:
      this.position.y -= this.speed;
      this.imagePosition.x = 0;
      this.imagePosition.y = 144;
      break;
    case this.keys.DOWN:
      this.position.y += this.speed;
      this.imagePosition.x = 0;
      this.imagePosition.y = 0;
      break;
  }
};

Players.prototype.win = function() {
  if(this.score >= 4){
    console.log(`Player ${this.name} wins.`);
    $('section').toggleClass('hidden');
    start();
  }
};

Players.prototype.loose = function() {
  if (this.life == 0) {
    console.log(`Player ${this.name} loose.`);
    $('section').toggleClass('hidden');
    start();
  }
};
