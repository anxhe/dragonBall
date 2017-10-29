function World(context) {
  this.ctx = context;
  this.img = new Image();
  this.img.src = "images/world.png";
  this.img.addEventListener('load', this.draw.bind(this));
}


World.prototype.draw = function(){
  this.ctx.drawImage(this.img, 0, 0);
}
