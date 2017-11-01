function Enemy() {
  this.width = 100;
  this.height = 100;
  this.maxSize = 700 - this.width;
  this.position = {
    x:   Math.floor(Math.random() * ((this.maxSize / (this.width))+ 1)) * (this.width),
    y:   Math.floor(Math.random() * ((this.maxSize/ (this.height))+ 1)) * (this.height)
  }
  this.strong = 10;
}
