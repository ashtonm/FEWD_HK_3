// Comments wuth '//!'' show the pseudo code for 
// the programme comments behind functions with '@'
// inform you what 'types' are expected as arguments
// for the functions.

// Save the total in javascript
var total = 0;

// Cache all the HTML elements for easy reference
var form = $('#entry')
var inputBox =$('#newEntry');
var grandTotal = $('#total');

// Catch the form's 'submit' event 
form.submit(formHandler);

// Define what happens when the 'form' is 'submitted'
function formHandler(e){ // @e = event
	e.preventDefault();
//! Save the input value
	var cost = inputBox.val();
//! Add it to the total
	total = total + parseFloat(cost);
//! format value for output
	var result = formatUSD(total);
//! Display it on the page
	grandTotal.text(result);
}

// Prepare the 'number' to be displayed on the page
function formatUSD(dollars){ // @dollars = float
	return "$" + twoDecimalPoints(dollars);
}

// Ensure that the 'float' only has 2 decimal points
function twoDecimalPoints(dollars){ // @dollars = float 
	return dollars.toFixed(2);
}


