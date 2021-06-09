object="";
status = "";
function setup(){
    canvas = createCanvas(450,450);
    canvas.position(450,150);
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("h22").innerHTML="Status = Detecting object";
}
function modelLoaded(){
    console.log("cocossd initialised");
    status = true;
    objectDetector.detect(img,gotResult);
}
function preload(){
    img = loadImage("dog_cat.jpg");
}
function draw(){
    image(img,0,0,450,450);
    if(status != ""){
        for(i=0;i<object.length;i++){
            document.getElementById("h22").innerHTML="Status = Detected Object";
            fill("#c576f9");
            percent = floor(object[i].confidence * 100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("#ff0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
    /*fill("#c576f9");
    text("dog",50,90);
    noFill();
    stroke("#ff0000");
    rect(40,80,250,350);
    
   fill("#c576f9");
    text("cat",210,100);
    noFill();
    stroke("#ff0000");
    rect(200,90,250,350);

    fill("#c576f9");
    text("bowl",150,300);
    noFill();
    stroke("#ff0000");
    rect(140,290,150,250);*/
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
}