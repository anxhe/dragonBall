function Enemy(position) {
  this.ctx = context;
  this.img = new Image();
  this.img.src = "images/freezer.png";
  this.width = 30;
  this.height = 30;
  this.position = position;
  this.strong = 10;
}


Enemy.prototype.draw = function(){
  this.ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
};
