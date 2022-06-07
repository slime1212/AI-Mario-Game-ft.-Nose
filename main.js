noseX = "";
noseY = "";
gameStatus = "";

function startGame() {
	gameStatus = "start";
	document.getElementById("status").innerHTML = "Game is loading..."
}

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses)
}

function modelLoaded() {
	console.log('Model Loaded')
}

function gotPoses(r) {
	if (r.length > 0) {
		console.log(r);
		noseX = r[0].pose.nose.x;
		noseY = r[0].pose.nose.y;
	}
}
	


function draw() {
	game()
}