var img=""
var status=""
var objects=[]
function setup(){
    canvas=createCanvas(640,480)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(640,480)
    video.hide()
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelloaded)
    document.getElementById("status").innerHTML="detecting objects"
}
function modelloaded(){
    console.log("modelloaded")
    status=true
    
}
function gotresult(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects=results
    }
}
function draw(){
    image(video,0,0,640,480)
    if (status != "") {
        fill("purple")
        objectDetector.detect(video,gotresult)
        for (let index =0; index < objects.length; index++) 
        {
            document.getElementById("status").innerHTML="object detected"
            document.getElementById("numberofobjects").innerHTML="number of objects detected="+objects.length

    
    percent=(objects[index].confidence*100).toFixed(1)+"%"
        text(objects[index].label+percent,objects[index].x,objects[index].y)  
        noFill()
        stroke("purple")    
        rect(objects[index].x,objects[index].y, objects[index].width, objects[index].height)
if (objects[index].label=="person") {
    document.getElementById("babyfound").innerHTML="Baby is found"
}
    
    
    
    
    
    
    
    }    }}