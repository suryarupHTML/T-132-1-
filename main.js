function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects.";
}

img = "";
status = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function modelLoaded() {
    console.log("cocoSSD is loaded!");
    status = true;
    ObjectDetector.detect(img, gotRestult);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}

function gotRestult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}