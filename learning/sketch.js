function setup() {
  // We are still calling createCanvas like in the past, but now 
  // we are storing the result as a variable. This way we can 
  // call methods of the element, to set the position for instance.
  let canvas = createCanvas(1200, 750);

  // Here we call methods of each element to set the position 
  // and id, try changing these values.
  // Use the inspector to look at the HTML generated from this 
  // code when you load the sketch in your browser.
  canvas.position(0, 0);
  canvas.class("lemon");
}

function draw() {
  // These commands are applied to the graphics canvas as normal.
  background(220, 180, 200);
  // let metopa = rect(100,100,300,200,10);
  stroke(0);
  text('Hello World', x, 150);
}