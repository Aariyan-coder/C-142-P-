song = "";

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(415, 315);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 415, 315);
}

function play()
{
    song.play();
}