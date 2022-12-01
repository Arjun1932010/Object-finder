status="";
input_value="";
objects=[];
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting objects";
    input_value=document.getElementById("text_box").value;
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
   
}
function modelLoaded(){
    console.log("Model loaded!");
    status=true;
}
function draw(){
    console.log("In draw");
    image(video,0,0,480,380);
    if(status !=""){
        objectDetector.detect(video,gotResult);
        for(i=0;i=objects.length;i++){
            document.getElementById("status").innerHTML="Status=detecting objects";
            document.getElementById("no._of_objects").innerHTML="Number of objects are "+objects.length;
            
            fill("red");
            percent=Math.floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("yellow");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            
            if(objects[i].label==input_value){
                video.stop();
                objectDetector.detect(gotResult);
                document.getElementById("status").innerHTML="Status= Object found !";
                synth=window.speechSynthesis;
                utterThis=new SpeechSynthesisUtterance(input_value+"found");
                synth.speak();
            }
            else{
                document.getElementById("status").innerHTML="Status= Object not found."
            }
        }
    }
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}