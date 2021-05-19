function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  translate(200, 200)
  h=  hour();
  m= minute();
  s= second();
  console.log(s)
  sangle = map(s, 0,60, 0, 360)
  mangle = map(m, 0,60, 0, 360)
  hangle = map(h%12, 0,12, 0, 360)
  
  
 rotate(-90)
  strokeWeight(5)
  noFill()
  stroke("blue")
  arc(0, 0, 200,200,0, sangle);
  stroke("red")
  arc(0, 0, 220,220,0, mangle);
  stroke("green")
  arc(0, 0, 240,240,0, hangle);
 
  
  
  push()
  strokeWeight(3);
  stroke("blue")
 
  rotate (sangle)
  line (0,0, 80, 0)
  pop();
  
    push()
  strokeWeight(3);
  stroke("red")
 
  rotate (mangle)
  line (0,0, 60, 0)
  pop();
  
  
  push()
  strokeWeight(3);
  stroke("green")
 
  rotate (hangle)
  line (0,0, 40, 0)
  pop();
  
  strokeWeight(10)
  stroke("black")
  point(0,0)
}