function Ball(position){
  this.ctx = context;
  this.img = new Image();
  this.img.src = "images/goku.png";
  this.img.addEventListener('load', this.draw.bind(this));
  this.width = 30;
  this.height = 30;
  this.position = position;
}

Ball.prototype.draw = function(){
  context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
}
