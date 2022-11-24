status="";
input_value="";
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting objects";

}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
    input_value=document.getElementById("text_box").value;
}
function modelLoaded(){
    console.log("Model loaded!");
    status=true;
}
function draw(){
    image(video,0,0,480,380);
}