class Buttercup {
  constructor() {
    this.r = 100;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
  }
  
  jump() {
    if (this.y == height - this.r){
      this.vy = -35;
      
    }
    
  }
  
  hits(mojo) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = mojo.x + mojo.r * 0.5;
    let y2 = mojo.y + mojo.r * 0.5;
    //return collideRectRect(this.x,this.y,this.r,this.r,mojo.x,mojo.y,mojo.r,mojo.r)
    return collideCircleCircle(x1,y1,this.r,x2,y2,mojo.r);
  }
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  
  show() {
    image(cImg,this.x, this.y, this.r, this.r);
    
  }
}
