noseX=0
noseY=0

function preload()
{
    mustache=loadImage('https://i.postimg.cc/cJDcRjJ3/moustache.png')
}

function setup()
{
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function modelLoaded()
{
    console.log("Model have been loaded")
}

function gotPoses(results)
{
    if(results.length>0)
        {
            console.log(results)
            noseX=results[0].pose.nose.x-45
            noseY=results[0].pose.nose.y
            console.log("nose x = " + results[0].pose.nose.x)
            console.log("nose y = " + results[0].pose.nose.y)
        }
}

function draw(){
    image(video,0,0,300,300)
    image(mustache,noseX,noseY,100,40)
}

function take_snapshot(){
    save('jessica.png')
}