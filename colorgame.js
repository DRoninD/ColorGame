// Function for generating random colors
var numSquares = 6;

var colors = generateRandomColors(numSquares);


// variables for JS logic
var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

// var easyBtn = document.querySelector("#easyBtn");

// var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");






colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {

	// add initial colors to squares

	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares

	squares[i].addEventListener("click", function() {

	// grab color of clicked square

	var clickedColor = this.style.backgroundColor;

	// compare color to pickedColor

	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";

		// call function changeColors
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;

	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";

	}


		
	});
}

function changeColors(color) {
	// loop through all squares
	for(var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;



	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make array
	var arr = []
	// add number of random colors to the array
	for(var i = 0; i < num; i++){
	// get random color and push into the array 
		arr.push(randomColor());
 

	}

	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" color from 0 -255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" color from 0 -255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" color from 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

	//function for the reset button

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	

	// pick a ned random color
	pickedColor = pickColor();

	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	this.textContent = "New Colors";

	messageDisplay.textContent = "";

	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";

});	 




// loop for the Easy and Hard buttons

for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected")

		// the turnery operator

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

		// add reset function
		reset();

	});
}


function reset(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	

	// pick a ned random color
	pickedColor = pickColor();

	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	this.textContent = "New Colors";

	messageDisplay.textContent = "";

	// change colors of squares
	for(var i = 0; i < squares.length; i++) {

		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];

		} else {
			squares[i].style.display = "none";
		}
		
		
	}

	h1.style.backgroundColor = "steelblue";

}























// // easyBtn

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	// loop
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}

// });


// // hardBtn

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	// loop
// 	for(var i = 0; i < squares.length; i++){

// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

