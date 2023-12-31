song = "";
song1 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX - "+ leftWristX + ", rightWristX - "+ rightWristX);

        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristY - "+ leftWristY + ", rightWristY - "+ rightWristY);
    }
}
