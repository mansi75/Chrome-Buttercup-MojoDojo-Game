class Mojodojo {
  
  constructor() {
    this.r = 50;
    this.x = width;
    this.y = height - this.r;
  
  }
  
  move() {
    this.x -= 8;
  }
  
  show() {
    image(mImg, this.x, this.y, this.r, this.r);
    
  }
}
