function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.color[0])
  circle(ball.x,ball.y,ball.r)
  ball.xspeed=1
  ball.x=ball.x+ball.xspeed
}
var ball={
  x:20,
  y:30,
  r:30,
xspeed:0,
yspeed:0,
color:["red","green"]
}