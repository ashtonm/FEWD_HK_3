// Comments wuth '//!'' show the pseudo code for 
// the programme comments behind functions with '@'
// inform you what 'types' are expected as arguments
// for the functions.

// Save the total in javascript
var total = 0;

// Cache all the HTML elements for easy reference
var form = document.getElementById('entry');
var inputBox = document.getElementById('newEntry');
var grandTotal = document.getElementById('total');

// Catch the form's 'submit' event 
form.onsubmit = formHandler;

// Define what happens when the 'form' is 'submitted'
function formHandler(e){ // @e = event
	e.preventDefault();
//! Save the input value
	var cost = inputBox.value;
//! Add it to the total
	var total = total + parseFloat(cost);
//! format value for output
	var result = formatUSD(newTotal);
//! Display it on the page
	grandTotal.innerHTML = result;
}

// Prepare the 'number' to be displayed on the page
function formatUSD(dollars){ // @dollars = float
	return "$" + twoDecimalPoints(dollars);
}

// Ensure that the 'float' only has 2 decimal points
function twoDecimalPoints(dollars){ // @dollars = float 
	return dollars.toFixed(2);
}


