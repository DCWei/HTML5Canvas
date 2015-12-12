var topTextValue = "";
var bottomTextValue = "";
var imagePath = "images/IMG_0419.JPG";
var c = document.querySelector("#target");
var ctx = c.getContext("2d");
var image = new Image();
image.onload = function() {
	console.log('Image loaded');
	renderCanvas();
};

ctx.lineWidth = 3;
ctx.textAlign = 'center';
ctx.font='bold 60px Impact';
ctx.fillStyle='white';
ctx.strokeStyle='black';

function renderCanvas(){
	ctx.clearRect(0,0,c.width,c.height);

	ctx.drawImage(image,0,0,c.width,c.height);

	ctx.fillText(topTextValue, c.width/2,65);
	ctx.strokeText(topTextValue, c.width/2,65);

	ctx.fillText(bottomTextValue, c.width/2,450);
	ctx.strokeText(bottomTextValue, c.width/2,450);
};

function selectImageFile(e) {
	console.log(e.target.files);
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		var data = e.target.result;
		image.src = data;
		console.log("File content="+data);
	};


	reader.readAsDataURL(file);
};

function changeText(e) {
	var text = e.target.value;
	var id = e.target.id;

	if(id === "inputTopText")
		topTextValue = text;
	else if(id === "inputBottomText")
		bottomTextValue = text;

	renderCanvas();
};

function saveFile(e){
	window.open(document.querySelector('canvas').toDataURL())
};

document.querySelector('#image-file').addEventListener('change', selectImageFile);
document.querySelector('#inputTopText').addEventListener('change', changeText);
document.querySelector('#inputBottomText').addEventListener('change', changeText);
document.querySelector('#saveImage').addEventListener('click', saveFile);