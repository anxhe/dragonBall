function Ball(){
  this.img = new Image();
  this.img.src = "images/goku.png";
  this.width = 30;
  this.height = 30;
  this.maxSize = 700 - this.width - 70;
  this.position = {
    x:   Math.floor(Math.random() * ((this.maxSize / (this.width + 70))+ 1)) * (this.width+70),
    y:   Math.floor(Math.random() * ((this.maxSize/ (this.height + 70))+ 1)) * (this.height+70)
  }
}
