var mn,sc,hr;
var mnAngle, scAngle, hrAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(200,200);
  rotate(-90);

  mn = minute();
  sc = second();
  hr = hour();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360);


  //seconds hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //minutes hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(225,0,255);
  point(0,0);

  //arcs
  strokeWeight(10);
  noFill();
  //seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  //hours
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle)
}