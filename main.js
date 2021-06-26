nose_x = 0;
nose_y = 0;

function preload() {
   clown_nose = loadImage("https://i.postimg.cc/hGkfd3QZ/Clown-Nose-PNG-High-Quality-Image.png");
}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modleLoaded);
    poseNet.on("pose", gotPoses);
}

function modleLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}

function draw() {
    image(video, 0, 0, 350, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    //circle(nose_x, nose_y, 40);
    image(clown_nose, nose_x - 23, nose_y - 15, 50, 50);
}

function take_snapshot() {
    save("myFilterImage.png")
}
