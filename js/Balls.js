function Ball(position){
  this.img = new Image();
  this.img.src = "images/goku.png";
  this.width = 30;
  this.height = 30;
  this.maxSize = 700 - this.width - 70;
  this.position = position;
}
