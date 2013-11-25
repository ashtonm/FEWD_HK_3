// This global variable will keep score value.
var total = 0;

$("#zero").click(function(){
  total = 0;
  checkTotal(total);
  $("#result").text(total);
});

$("#add5").click(function(){
  total = total + 5;
  checkTotal(total);
  $("#result").text(total);
});

$("#add10").click(function(){
  total = total + 10;
  checkTotal(total);
  $("#result").text(total);
});

$("#sub1").click(function(){
  total = total - 1;
  checkTotal(total);
  $("#result").text(total);
});

// Set different color to total for positive, negative and zero
function checkTotal(value){
  if (value > 0) {
    $("#result").css('color', 'green');
  } else if (value < 0) {
    $("#result").css('color', 'red');
  } else {
    $("#result").css('color', 'black');
  }
}