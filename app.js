
var pics = [ 
	"Ollie/1.jpg",
	"Ollie/2.jpg",
	"Ollie/3.jpg",
	"Ollie/4.jpg",
	"Ollie/5.jpg",
	"Ollie/6.jpg",
	"Ollie/7.jpg",
	"Ollie/8.jpg",
	"Ollie/9.jpg",
	"Ollie/10.jpg"] // An array of photos

var btn = document.querySelector("button"); //Searches in the HTML document for "button" and stores it in the variable btn
var img = document.querySelector("img");
var counter = 1;
var size = pics.length;

btn.addEventListener("click", function()
{
		img.src = pics[counter];
		counter++;

		if (counter === size){ // If the counter reaches the end of the pics array
			counter = 0; // restart the counter
		}
})
