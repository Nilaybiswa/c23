class Ground {
  constructor(x,y,w,h){
   
  var Option = {
    isStatic : true
  }
   this.body = Bodies.rectangle(x,y,w,h,Option)
   World.add(world,this.body)
   this.w = w
   this.h = h

}
display(){

  var pos = this.body.position
  push ()
  fill("Brown");
  rectMode(CENTER)
  rect(pos.x,pos.y,this.w,this.h)
  pop ()
}


}