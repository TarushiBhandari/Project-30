class GreenBox extends Box{
  constructor(x,y,width,height) {
    super(x,y,width,height);
  }

  display()
  {
    fill(0,225,4);
    if(this.body.speed<3){
      super.display();
    }else{
      World.remove(world,this.body);
      push();
      tint(255, this.visibility);
      this.visibility= this.visibility-5;
      pop();
    }
  }
}