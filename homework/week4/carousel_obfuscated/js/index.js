//click handler for back button

var currentImage = 1;

$("input.back").click(function(){
	if (currentImage == 1){

	} else {
	currentImage = currentImage - 1; //whenever image is clicked value goes up
	$("#image-to-vote-on").attr("src", "images/food" + currentImage + ".jpg");
	}
});



//change class in html to 'btn back'

//click event for the skip button
//if you have a variable, keep storing number of image


$("input.skip").click(function(){
	if (currentImage == 8){

	} else {
	currentImage = currentImage + 1; //whenever image is clicked value goes up
	$("#image-to-vote-on").attr("src", "images/food" + currentImage + ".jpg");
	}
});
//select image, update src attribute


//change event for the selection list
	//search google jquery capture select change



//change image - implemented with the buttons click event
