function Ball(position, stars){
  this.stars = stars;
  this.ctx = context;
  this.img = new Image(34, 34);
  this.img.src = "images/balls.png";

  this.imagePosition = {
    x: (this.stars - 1 ) * 34,
    y: 0
  };

  this.img.addEventListener('load', function(e){
    setTimeout(this.draw.bind(this), 100);
  }.bind(this));

  this.width = 30;
  this.height = 30;
  this.position = position;
}

Ball.prototype.draw = function(){
  this.ctx.drawImage(
    this.img,
    this.imagePosition.x, this.imagePosition.y,
    this.img.width,       this.img.height,
    this.position.x + 8,  this.position.y + 8,
    this.img.width,       this.img.height
  );
};
