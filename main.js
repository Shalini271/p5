
function preload(){

}

function setup(){
canvas= createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
color="";
}

function draw(){
background("purple");
tint(color);
fill("blue");
circle(50,50,100);
circle(450,350,100);
circle(50,350,100);
circle(450,50,100);
fill("red");
rect(50,50,400,300);
fill("white");
rect(100,100,300,200);
image(video,100,100,300,200);
}

function take_snapshot(){
    save("pic.jpg");
}

function apply(){
color= document.getElementById("color-pick").value;
}