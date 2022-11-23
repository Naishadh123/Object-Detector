img="";
status1="";
objects=[];
function preload()
{
img=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status - Detecting Objects";
}

function draw()
{
image(img,0,0,640,420);
if(status1!=""){
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status - Object Detected";
fill("#FF0000");
percent=floor(objects[i].confidence*100);
text (objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#FF0000");
rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function modelLoaded()
{
console.log("model loaded");
status1=true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
if(error){
console.log("error");
}
else{
console.log(results);
objects=results;
}
}
/*fill('#FF0000');
text("Dog",45,75);
noFill();
fill('#00FF00');
text("Cat",350,100);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
stroke("#00FF00");
rect(300,70,300,330);*/