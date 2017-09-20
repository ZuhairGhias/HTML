//alert("Hello");
var numColors = 6;
var colors = generateRandomColors(numColors);

var boxes = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#ColorDisplay");
var messageDisplay = document.querySelector("#Message");
Message.textContent = "";
var headings = document.querySelectorAll("h1");
var pickedColor = pickColor();
var resetButton = document.querySelector("#Reset");
var ezbtn = document.querySelector("#ezbtn")
var hdbtn = document.querySelector("#hdbtn")

ezbtn.addEventListener("click", function(){
	ezbtn.classList.add("selected");
	hdbtn.classList.remove("selected");
	numColors = 3;
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < boxes.length; i++){
		if(colors[i]){
			boxes[i].style.backgroundColor = colors[i];
		}else{
			boxes[i].style.display = "none";
		};
	};
	for(var i = 0; i < headings.length; i++){
	headings[i].style.backgroundColor = "#232323";
	};
});
hdbtn.addEventListener("click", function(){
	ezbtn.classList.remove("selected");
	hdbtn.classList.add("selected");
	numColors = 6;
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.display = "block";
		boxes[i].style.backgroundColor = colors[i];
		};
	for(var i = 0; i < headings.length; i++){
	headings[i].style.backgroundColor = "#232323";
	};
});

resetButton.addEventListener("click", function(){

	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < boxes.length; i++){
	//Set Color
	boxes[i].style.backgroundColor = colors[i];
	}
	for(var i = 0; i < headings.length; i++){
	headings[i].style.backgroundColor = "#232323";
	}
	Message.textContent = "";
	this.textContent = "NEW COLORS";
});

colorDisplay.textContent = pickedColor.toUpperCase();

for(var i = 0; i < boxes.length; i++){
	//Set Color
	boxes[i].style.backgroundColor = colors[i];

	//Set event handler
	boxes[i].addEventListener("click", function(){
		//alert("Clicked Square!");
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			Message.textContent = "Correct";
			resetButton.textContent = "Play Again! "
			changeColors(pickedColor);
			for(var i = 0; i < headings.length; i++){
				headings[i].style.backgroundColor = pickedColor;
			}
		}else{
			Message.textContent = "Nope, Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}

function pickColor(){
	var rand = Math.floor(Math.random() * colors.length)
	return colors[rand];
}

function changeColors(color){

	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = color;
	}

}
function generateRandomColors(num){

	var arr = [];
	for(var i = 0; i < num; i ++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
	
}