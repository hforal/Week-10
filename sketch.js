var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x = 100;
var y = 200;
var diameter = 50;
var speed= 3;
 // this function is called only once
function setup()
{

    createCanvas(800,600);
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
    background(120);
    fill('rgb(0,255,0)');
    circle(x,125,200); x++
    rect(x,215,200,250); x++
    fill('#222222');
    circle(315,100,10);
    circle(385,100,10);
    circle(350,175,30);
    arc(350,100,10)
    fill('rgb(0,255,0)');
    rect(200,y,50,150); y++
    rect(450,y,50,150); y++
    rect(250,465,50,200);
    rect(400,465,50,200);
   

    if (x > width) {
    speed = -3;  
    }
    x = x + speed; 
    if (x < 0) {
        speed = 3; 
        }
if (y > height) {
    speed = -3; 
}
y = y + speed; 
if (y < 0) {
    speed = 3;
}

    }


var x = 350;
var y = 250;


