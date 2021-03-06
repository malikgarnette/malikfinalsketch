function setup() {
  createCanvas(720, 400);
  background(255);

  image(loadImage('malik.garnett.jpg'), 0, 0);

  noStroke();
}

function draw() {
  background(0);
  from = color(155, 0, 0, 0.2 * 155);
  to = color(230, 0, 255, 0.2 * 100);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .66);
  for (var i = 0; i < 50; i++) {
    fill(from);
    quad(random(-40, 220), random(height),
         random(-40, 220), random(height),
         random(-40, 220), random(height),
        random(-40, 220), random(height));
    fill(c1);
    quad(random(140, 380), random(height),
         random(140, 380), random(height),
         random(140, 380), random(height), 
         random(140, 380), random(height));
    fill(c2);
    quad(random(320, 580), random(height), 
         random(320, 580), random(height),
         random(320, 580), random(height), 
         random(320, 580), random(height));
    fill(to);
    quad(random(500, 760), random(height), 
         random(500, 760), random(height),
         random(500, 760), random(height), 
         random(500, 760), random(height));
  }
  frameRate(5);
}