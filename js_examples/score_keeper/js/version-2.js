// This global variable will keep score value.
var total = 0;

$("#zero").click(function(){
  total = 0;
  $("#result").text(total);
});

$("#add5").click(function(){
  total = total + 5;
  $("#result").text(total);
});

$("#add10").click(function(){
  total = total + 10;
  $("#result").text(total);
});

$("#sub1").click(function(){
  total = total - 1;
  $("#result").text(total);
});